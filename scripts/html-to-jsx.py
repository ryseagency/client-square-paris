#!/usr/bin/env python3
"""
Convert hydrated Shopify product page HTML into JSX for ProductPageV3.tsx.

Input: yoko-hydrated.html (full document captured via Playwright)
Output: extracted JSX body for the <main> area, ready to splice into ProductPageV3.

The script:
  - Extracts each <section/div id="shopify-section-...__main|product_tabs|...">.
  - Concatenates them in template order.
  - Strips <script>, inline <style> kept (theme styles) -> wrapped in dangerouslySetInnerHTML.
  - Converts attributes: class -> className, for -> htmlFor, fill-rule -> fillRule, etc.
  - Converts boolean attrs: checked, disabled, hidden -> defaultChecked etc.
  - Self-closes void elements (img, input, br, link, meta, hr, source, area, base, col, embed, param, track, wbr).
  - Replaces local CDN image URLs with import references where matching assets exist.
  - Maps known on* handlers to noop (dropped) since we render static.
"""
from __future__ import annotations

import html
import os
import re
import sys
from pathlib import Path

ROOT = Path('/Users/ryseagency/Documents/Claude/RYSE/clients/square')
HTML_PATH = ROOT / 'shopify-rendered' / 'yoko-hydrated.html'
ASSETS_DIR = ROOT / 'lovable-source' / 'src' / 'assets' / 'shopify-sync'
OUTPUT_JSX_BODY = ROOT / 'shopify-rendered' / 'yoko-hydrated.body.jsx'

VOID_ELEMENTS = {
    'area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input',
    'link', 'meta', 'param', 'source', 'track', 'wbr',
}

# Section ids in the order they appear on the live page.
SECTION_IDS_ORDERED = [
    'shopify-section-template--29733033214294__main',
    'shopify-section-template--29733033214294__product_tabs_fNcDGq',
    'shopify-section-template--29733033214294__croquis_v2_xhLkyW',
    'shopify-section-template--29733033214294__complementary_products_pwaV6A',
    'shopify-section-template--29733033214294__temoignages_Cqz4i3',
    'shopify-section-template--29733033214294__faq_zKdwnW',
    'shopify-section-template--29733033214294__cta_contact_w9G9yn',
    'shopify-section-template--29733033214294__newsletter_eihETy',
]

# Map common HTML attribute names to JSX equivalents.
ATTR_RENAME = {
    'class': 'className',
    'for': 'htmlFor',
    'tabindex': 'tabIndex',
    'colspan': 'colSpan',
    'rowspan': 'rowSpan',
    'maxlength': 'maxLength',
    'minlength': 'minLength',
    'readonly': 'readOnly',
    'autofocus': 'autoFocus',
    'autoplay': 'autoPlay',
    'autocomplete': 'autoComplete',
    'autocorrect': 'autoCorrect',
    'autocapitalize': 'autoCapitalize',
    'spellcheck': 'spellCheck',
    'crossorigin': 'crossOrigin',
    'enctype': 'encType',
    'accept-charset': 'acceptCharset',
    'http-equiv': 'httpEquiv',
    'srcset': 'srcSet',
    'srclang': 'srcLang',
    'datetime': 'dateTime',
    'novalidate': 'noValidate',
    'usemap': 'useMap',
    'allowfullscreen': 'allowFullScreen',
    'frameborder': 'frameBorder',
    'marginheight': 'marginHeight',
    'marginwidth': 'marginWidth',
    'cellpadding': 'cellPadding',
    'cellspacing': 'cellSpacing',
    'contenteditable': 'contentEditable',
    'inputmode': 'inputMode',
    'fill-rule': 'fillRule',
    'clip-rule': 'clipRule',
    'stroke-width': 'strokeWidth',
    'stroke-linecap': 'strokeLinecap',
    'stroke-linejoin': 'strokeLinejoin',
    'stroke-dasharray': 'strokeDasharray',
    'stroke-dashoffset': 'strokeDashoffset',
    'stroke-miterlimit': 'strokeMiterlimit',
    'stroke-opacity': 'strokeOpacity',
    'fill-opacity': 'fillOpacity',
    'text-anchor': 'textAnchor',
    'font-family': 'fontFamily',
    'font-size': 'fontSize',
    'font-weight': 'fontWeight',
    'letter-spacing': 'letterSpacing',
    'baseline-shift': 'baselineShift',
    'clip-path': 'clipPath',
    'color-interpolation': 'colorInterpolation',
    'color-interpolation-filters': 'colorInterpolationFilters',
    'color-profile': 'colorProfile',
    'color-rendering': 'colorRendering',
    'flood-color': 'floodColor',
    'flood-opacity': 'floodOpacity',
    'glyph-orientation-horizontal': 'glyphOrientationHorizontal',
    'glyph-orientation-vertical': 'glyphOrientationVertical',
    'image-rendering': 'imageRendering',
    'lighting-color': 'lightingColor',
    'marker-end': 'markerEnd',
    'marker-mid': 'markerMid',
    'marker-start': 'markerStart',
    'overline-position': 'overlinePosition',
    'overline-thickness': 'overlineThickness',
    'paint-order': 'paintOrder',
    'pointer-events': 'pointerEvents',
    'rendering-intent': 'renderingIntent',
    'shape-rendering': 'shapeRendering',
    'stop-color': 'stopColor',
    'stop-opacity': 'stopOpacity',
    'strikethrough-position': 'strikethroughPosition',
    'strikethrough-thickness': 'strikethroughThickness',
    'text-decoration': 'textDecoration',
    'text-rendering': 'textRendering',
    'underline-position': 'underlinePosition',
    'underline-thickness': 'underlineThickness',
    'unicode-bidi': 'unicodeBidi',
    'vector-effect': 'vectorEffect',
    'word-spacing': 'wordSpacing',
    'writing-mode': 'writingMode',
    'xml:lang': 'xmlLang',
    'xml:space': 'xmlSpace',
    'accept-charset': 'acceptCharset',
    'aria-labelledby': 'aria-labelledby',
}

# Boolean attributes that React expects defaultChecked/defaultValue/etc.
BOOL_TO_DEFAULT = {
    'checked': 'defaultChecked',
    'selected': 'defaultSelected',
    'value': 'defaultValue',  # only on input/select/textarea
}

# Strip these attributes (event handlers can't run statically).
STRIP_ATTR_PREFIXES = ('onclick', 'onchange', 'onsubmit', 'oninput', 'onload', 'onerror',
                       'onfocus', 'onblur', 'onkeydown', 'onkeyup', 'onkeypress',
                       'onmouseover', 'onmouseout', 'onmouseenter', 'onmouseleave',
                       'onmousemove', 'onmousedown', 'onmouseup',
                       'ontouchstart', 'ontouchend', 'ontouchmove')


def load_html() -> str:
    return HTML_PATH.read_text(encoding='utf-8')


def find_section_block(doc: str, sid: str) -> str:
    """Return the full outer HTML of the <section|div id="<sid>">...</...> block."""
    # Match opening tag (could be <section> or <div>) at start
    open_re = re.compile(rf'<(section|div)([^>]*\bid="{re.escape(sid)}"[^>]*)>', re.DOTALL)
    m = open_re.search(doc)
    if not m:
        return ''
    tag = m.group(1)
    start = m.start()
    # Find matching closing tag using simple depth counter on same tag name.
    depth = 0
    pos = m.start()
    pat = re.compile(rf'<(/?){tag}\b[^>]*>', re.DOTALL)
    for tm in pat.finditer(doc, pos):
        if tm.group(1) == '':
            depth += 1
        else:
            depth -= 1
            if depth == 0:
                end = tm.end()
                return doc[start:end]
    return ''


def strip_scripts(s: str) -> str:
    return re.sub(r'<script\b[^>]*>.*?</script>', '', s, flags=re.DOTALL)


def replace_link_stylesheet(s: str) -> str:
    """Drop <link rel='stylesheet'> tags pointing to Shopify CDN; CSS is imported separately."""
    return re.sub(r'<link\b[^>]*\brel=["\']stylesheet["\'][^>]*/?>', '', s, flags=re.DOTALL)


def collect_image_assets() -> dict[str, str]:
    """Return mapping pattern -> filename for files that exist locally.

    Includes both literal basenames and remote-URL substring patterns so we can
    rewrite Shopify CDN images that don't share the local filename verbatim.
    """
    mapping: dict[str, str] = {}
    if not ASSETS_DIR.exists():
        return mapping
    for f in ASSETS_DIR.iterdir():
        if f.is_file():
            mapping[f.name.lower()] = f.name
    # Manual aliases for renamed Shopify CDN files. Keys are lowercase substrings
    # that appear in remote URLs.
    aliases = {
        'capture_d_ecran_2026-04-14_a_16.13.52': 'Capture_16-13-52.png',
        'capture_d_ecran_2026-04-14_a_16.21.34': 'Capture_16-21-34.png',
        'capture_d_ecran_2026-04-14_a_16.21.46': 'Capture_16-21-46.png',
        'capture_d_ecran_2026-04-14_a_16.21.57': 'Capture_16-21-57.png',
        'capture_d_ecran_2026-04-14_a_16.22.06': 'Capture_16-22-06.png',
        'logo-alma-black': 'logo-alma-black.png',
        'telechargement_3': 'telechargement_3.png',
        'telechargement_2': 'telechargement_2.png',
        'telechargement_1': 'telechargement_1.png',
        'telechargement': 'telechargement.png',
        'square_blanc': 'square_blanc.png',
        'noir_sans_fond': 'NOIR_SANS_FOND.svg',
        'blanc_sans_fond': 'BLANC_SANS_FOND.svg',
        '1.jpg': '1.jpg',
    }
    for k, v in aliases.items():
        existing = ASSETS_DIR / v
        if existing.exists():
            mapping[k] = v
    return mapping


def find_local_for_url(url: str, img_map: dict[str, str]) -> str | None:
    """Search img_map for any key that appears as a substring of url (lowercased)."""
    u = url.lower()
    # Prefer longer key matches first.
    for k in sorted(img_map.keys(), key=len, reverse=True):
        if k in u:
            return img_map[k]
    return None


def cdn_basename(url: str) -> str:
    # Strip query, leading slashes, get last segment
    u = url.split('?')[0]
    base = u.rstrip('/').rsplit('/', 1)[-1]
    return base


def varname_for(filename: str) -> str:
    # img + camelCased basename minus extension, alphanumeric only
    base = re.sub(r'\.[^.]+$', '', filename)
    parts = re.split(r'[^a-zA-Z0-9]+', base)
    parts = [p for p in parts if p]
    if not parts:
        return 'imgUnknown'
    pascal = ''.join(p.capitalize() for p in parts)
    return f'img{pascal}'


# Style attribute conversion: style="a:b;c:d" -> style={{a: 'b', c: 'd'} as React.CSSProperties}
def convert_style(value: str) -> str:
    decls = [d.strip() for d in value.split(';') if d.strip()]
    out = []
    for d in decls:
        if ':' not in d:
            continue
        k, v = d.split(':', 1)
        k = k.strip()
        v = v.strip()
        # CSS custom property (--foo) -> kept as quoted key
        if k.startswith('--'):
            key_repr = f"'{k}'"
        else:
            # camelCase the property name
            parts = k.split('-')
            key_repr = parts[0] + ''.join(p.capitalize() for p in parts[1:])
        # Escape single quotes in value
        v_escaped = v.replace("\\", "\\\\").replace("'", "\\'")
        out.append(f"{key_repr}: '{v_escaped}'")
    return '{{' + ', '.join(out) + '} as React.CSSProperties}'


def parse_attrs(attr_str: str) -> list[tuple[str, str | None, str]]:
    """Return list of (name, value_or_None, raw_value_token) preserving order."""
    out = []
    # Match: name="..."  or name='...'  or name=value  or name (boolean)
    rx = re.compile(r'''([:\-_a-zA-Z][:\-_.a-zA-Z0-9]*)(?:\s*=\s*("([^"]*)"|'([^']*)'|([^\s"'>]+)))?''')
    pos = 0
    for m in rx.finditer(attr_str):
        name = m.group(1)
        raw = m.group(2)
        if raw is None:
            out.append((name, None, ''))
            continue
        if m.group(3) is not None:
            val = m.group(3)
        elif m.group(4) is not None:
            val = m.group(4)
        else:
            val = m.group(5)
        out.append((name, val, raw))
    return out


def render_attrs(tag: str, attrs: list[tuple[str, str | None, str]], img_map: dict[str, str], used_imports: set[str]) -> str:
    parts = []
    seen = set()
    is_input_like = tag in ('input', 'textarea', 'select', 'option')
    for name, val, _ in attrs:
        ln = name.lower()
        if any(ln.startswith(pref) for pref in STRIP_ATTR_PREFIXES):
            continue
        # Drop xmlns, x:* etc. but keep simple xmlns on root svg (React handles it).
        if name in seen:
            continue
        seen.add(name)

        # Boolean attribute (no value provided)
        if val is None:
            if ln == 'checked' and is_input_like:
                parts.append('defaultChecked')
            elif ln == 'selected' and is_input_like:
                parts.append('defaultSelected')
            elif ln == 'disabled':
                parts.append('disabled')
            elif ln == 'hidden':
                parts.append('hidden')
            elif ln == 'readonly':
                parts.append('readOnly')
            elif ln == 'required':
                parts.append('required')
            elif ln == 'autofocus':
                parts.append('autoFocus')
            elif ln == 'multiple':
                parts.append('multiple')
            elif ln == 'controls':
                parts.append('controls')
            elif ln == 'open':
                parts.append('open')
            else:
                # Generic boolean -> name={true}
                jsx_name = ATTR_RENAME.get(ln, name)
                parts.append(f'{jsx_name}={{true}}')
            continue

        # Value rewrites
        # 1. Decode HTML entities in value
        decoded = html.unescape(val)

        # HTML5 boolean attributes serialize with empty string ("checked=\"\"" etc.).
        # In JSX these need to become bare boolean props or {true}.
        BOOLEAN_HTML5 = {
            'checked', 'disabled', 'hidden', 'readonly', 'required',
            'autofocus', 'autoplay', 'controls', 'multiple', 'open',
            'selected', 'reversed', 'loop', 'muted', 'default', 'novalidate',
            'allowfullscreen', 'async', 'defer', 'itemscope', 'nomodule',
            'playsinline', 'truespeed',
        }
        if ln in BOOLEAN_HTML5 and decoded == '':
            if ln == 'checked' and is_input_like:
                parts.append('defaultChecked')
            elif ln == 'selected' and is_input_like:
                parts.append('defaultSelected')
            elif ln == 'readonly':
                parts.append('readOnly')
            elif ln == 'autofocus':
                parts.append('autoFocus')
            elif ln == 'novalidate':
                parts.append('noValidate')
            elif ln == 'allowfullscreen':
                parts.append('allowFullScreen')
            elif ln == 'playsinline':
                parts.append('playsInline')
            else:
                parts.append(ln)
            continue

        # Special: src on <img> may point to Shopify CDN -> map to import if matching
        if tag == 'img' and ln == 'src':
            local = find_local_for_url(decoded, img_map)
            if local:
                vn = varname_for(local)
                used_imports.add(local)
                parts.append(f'src={{{vn}}}')
                continue

        # Style: convert
        if ln == 'style':
            parts.append(f'style={convert_style(decoded)}')
            continue

        # Value attribute on input -> defaultValue
        if ln == 'value' and is_input_like:
            jsx_name = 'defaultValue'
        elif ln == 'checked' and is_input_like:
            jsx_name = 'defaultChecked'
        else:
            jsx_name = ATTR_RENAME.get(ln, name)

        # Hyphenated SVG/XML attrs that aren't in our map: keep as-is if they have a hyphen but
        # JSX accepts hyphenated string attrs only via explicit string keys. Since JSX in TSX
        # rejects unknown camelCased SVG props, fall back to using the attribute name directly
        # (works for data-*, aria-*, and React tolerates kebab on non-DOM custom elements).
        # For SVG we already converted in ATTR_RENAME above.

        # Escape value: turn " into &quot; using JSX-safe form. Use JSX expression string.
        # We'll embed as a JS string via single-quoted, escaping single quotes and backslashes.
        # Then use ={'value'} so we don't worry about HTML entity decoding twice.
        s_safe = decoded.replace('\\', '\\\\').replace("'", "\\'").replace('\n', '\\n')
        # If value is empty and it's a placeholder like data-mps-gallery, render as boolean true
        # else keep as string.
        parts.append(f"{jsx_name}={{'{s_safe}'}}")
    return (' ' + ' '.join(parts)) if parts else ''


def jsx_serialize(html_str: str, img_map: dict[str, str], used_imports: set[str]) -> str:
    """Serialize HTML fragment into JSX-safe text."""
    # Tokenize: text, tags, comments
    out = []
    i = 0
    n = len(html_str)
    tag_re = re.compile(r'<(/?)([a-zA-Z][a-zA-Z0-9_:-]*)([^>]*?)/?\s*>', re.DOTALL)
    comment_re = re.compile(r'<!--.*?-->', re.DOTALL)

    pos = 0
    open_stack: list[str] = []
    while pos < n:
        # Comments?
        cm = comment_re.match(html_str, pos)
        if cm:
            # JSX comment: {/* ... */}
            inner = cm.group(0)[4:-3].replace('*/', '* /')
            out.append('{/*' + inner + '*/}')
            pos = cm.end()
            continue
        if html_str[pos] == '<':
            tm = tag_re.match(html_str, pos)
            if tm:
                closing = tm.group(1) == '/'
                name = tm.group(2)
                attrs_blob = tm.group(3) or ''
                # Was it self-closing in source?
                self_closing_src = tm.group(0).rstrip('>').rstrip().endswith('/')
                if closing:
                    out.append(f'</{name}>')
                    if open_stack and open_stack[-1] == name:
                        open_stack.pop()
                    pos = tm.end()
                    continue
                attrs_parsed = parse_attrs(attrs_blob)
                attr_text = render_attrs(name, attrs_parsed, img_map, used_imports)
                # Decide self-close
                if name.lower() in VOID_ELEMENTS or self_closing_src:
                    out.append(f'<{name}{attr_text} />')
                else:
                    out.append(f'<{name}{attr_text}>')
                    open_stack.append(name)
                pos = tm.end()
                continue
            else:
                # Stray <, treat as text
                out.append('&lt;')
                pos += 1
                continue
        # Text run
        nxt = html_str.find('<', pos)
        if nxt == -1:
            text = html_str[pos:]
            pos = n
        else:
            text = html_str[pos:nxt]
            pos = nxt
        # JSX-escape text: { } must be escaped, and we keep entities as-is (React decodes).
        text_jsx = text.replace('{', '&#123;').replace('}', '&#125;')
        out.append(text_jsx)

    return ''.join(out)


def main() -> int:
    if not HTML_PATH.exists():
        print(f'ERROR: {HTML_PATH} not found', file=sys.stderr)
        return 1
    doc = load_html()
    img_map = collect_image_assets()
    used_imports: set[str] = set()

    blocks = []
    for sid in SECTION_IDS_ORDERED:
        block = find_section_block(doc, sid)
        if not block:
            print(f'WARN: section {sid} not found', file=sys.stderr)
            blocks.append(f'<div id="{sid}" data-missing="true"></div>')
            continue
        # Remove scripts & external stylesheet links (CSS is imported separately).
        block = strip_scripts(block)
        block = replace_link_stylesheet(block)
        # Inline <style> blocks: keep them rendered via dangerouslySetInnerHTML.
        # We rewrite each <style ...>...</style> into a placeholder before JSX serialization.
        styles: list[str] = []
        def style_repl(m: re.Match[str]) -> str:
            css = m.group(1)
            idx = len(styles)
            styles.append(css)
            return f'__STYLEMARK_{idx}__'
        block = re.sub(r'<style\b[^>]*>(.*?)</style>', style_repl, block, flags=re.DOTALL)

        jsx = jsx_serialize(block, img_map, used_imports)

        # Substitute style markers with <style dangerouslySetInnerHTML={{__html: '...'}} />
        for i, css in enumerate(styles):
            css_safe = css.replace('\\', '\\\\').replace('`', '\\`')
            replacement = f"<style dangerouslySetInnerHTML={{{{ __html: `{css_safe}` }}}} />"
            jsx = jsx.replace(f'__STYLEMARK_{i}__', replacement)
        blocks.append(jsx)

    body = '\n\n'.join(blocks)

    # Imports needed
    import_lines = []
    for fname in sorted(used_imports):
        vn = varname_for(fname)
        import_lines.append(f"import {vn} from '@/assets/shopify-sync/{fname}';")

    OUTPUT_JSX_BODY.write_text(
        '// AUTO-EXTRACTED — see scripts/html-to-jsx.py\n\n'
        + '\n'.join(import_lines) + '\n\n'
        + body, encoding='utf-8')
    print(f'Wrote {OUTPUT_JSX_BODY} ({len(body)} chars, {len(used_imports)} images)')
    return 0


if __name__ == '__main__':
    sys.exit(main())
