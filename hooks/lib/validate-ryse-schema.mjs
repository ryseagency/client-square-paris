#!/usr/bin/env node
// RYSE — Doctrine schema validator
// Scanne sections/*.liquid et blocks/*.liquid sous le dir passé en argv[2]
// (défaut: cwd) et applique 4 règles RYSE sur le bloc {% schema %}.
// Exit 0 + stdout silencieux si OK. Exit 1 + stderr formaté si violations.

import { readFileSync, readdirSync, existsSync, statSync } from 'node:fs';
import { join } from 'node:path';

const ROOT = process.argv[2] || process.cwd();

const SCHEMA_OPEN = '{% schema %}';
const SCHEMA_CLOSE = '{% endschema %}';
const TEXT_TYPES = new Set(['text', 'textarea', 'richtext', 'inline_richtext']);
const NAME_MAX = 25;
const RANGE_MAX_STEPS = 100;
const EPSILON = 1e-9;

function listLiquidFiles(dir) {
  if (!existsSync(dir)) return [];
  let entries;
  try {
    entries = readdirSync(dir);
  } catch {
    return [];
  }
  return entries
    .filter((f) => f.endsWith('.liquid'))
    .map((f) => join(dir, f))
    .filter((p) => {
      try { return statSync(p).isFile(); } catch { return false; }
    });
}

function extractSchema(content) {
  const start = content.indexOf(SCHEMA_OPEN);
  if (start === -1) return null;
  const end = content.indexOf(SCHEMA_CLOSE, start + SCHEMA_OPEN.length);
  if (end === -1) return null;
  return content.slice(start + SCHEMA_OPEN.length, end).trim();
}

function isOnStepGrid(value, min, step) {
  if (step === 0) return true;
  const diff = value - min;
  const ratio = diff / step;
  return Math.abs(ratio - Math.round(ratio)) < EPSILON;
}

function checkNameLength(name, label, violations) {
  if (typeof name === 'string' && name.length > NAME_MAX) {
    violations.push(`[RÈGLE 1] ${label} = ${name.length} caractères, max ${NAME_MAX} — "${name}"`);
  }
}

function checkSettings(settings, prefix, violations) {
  if (!Array.isArray(settings)) return;
  settings.forEach((s, i) => {
    if (!s || typeof s !== 'object') return;
    const tag = `${prefix}[${i}]`;

    if (s.type === 'range') {
      const min = Number(s.min);
      const max = Number(s.max);
      const step = Number(s.step);
      const allFinite = Number.isFinite(min) && Number.isFinite(max) && Number.isFinite(step);

      if (allFinite && step > 0) {
        const nbSteps = (max - min) / step;
        if (nbSteps - RANGE_MAX_STEPS > EPSILON) {
          violations.push(`[RÈGLE 2] ${tag} range steps=${nbSteps}, max ${RANGE_MAX_STEPS} (min=${min}, max=${max}, step=${step})`);
        }
        if (s.default !== undefined && s.default !== null) {
          const def = Number(s.default);
          if (Number.isFinite(def) && !isOnStepGrid(def, min, step)) {
            violations.push(`[RÈGLE 3] ${tag}.default=${s.default}, min=${min} step=${step} — pas sur le grid`);
          }
        }
      }
    }

    if (TEXT_TYPES.has(s.type) && s.default === '') {
      violations.push(`[RÈGLE 4] ${tag} type=${s.type}, default="" interdit`);
    }
  });
}

function validateSchema(schema) {
  const violations = [];

  checkNameLength(schema.name, 'schema.name', violations);

  if (Array.isArray(schema.blocks)) {
    schema.blocks.forEach((block, i) => {
      if (block && typeof block === 'object') {
        checkNameLength(block.name, `blocks[${i}].name`, violations);
        checkSettings(block.settings, `blocks[${i}].settings`, violations);
      }
    });
  }

  if (Array.isArray(schema.presets)) {
    schema.presets.forEach((preset, i) => {
      if (preset && typeof preset === 'object') {
        checkNameLength(preset.name, `presets[${i}].name`, violations);
      }
    });
  }

  checkSettings(schema.settings, 'settings', violations);

  return violations;
}

function relativize(file) {
  if (file.startsWith(ROOT + '/')) return file.slice(ROOT.length + 1);
  if (file === ROOT) return file;
  return file;
}

function main() {
  const files = [
    ...listLiquidFiles(join(ROOT, 'sections')),
    ...listLiquidFiles(join(ROOT, 'blocks')),
  ];

  let schemasFound = 0;
  const report = []; // [{ file, violations: [...] }]

  for (const file of files) {
    let content;
    try {
      content = readFileSync(file, 'utf8');
    } catch {
      continue;
    }

    const raw = extractSchema(content);
    if (raw === null) continue;

    schemasFound++;

    let parsed;
    try {
      parsed = JSON.parse(raw);
    } catch (e) {
      report.push({ file: relativize(file), violations: [`[JSON INVALIDE] ${e.message}`] });
      continue;
    }

    const violations = validateSchema(parsed);
    if (violations.length > 0) {
      report.push({ file: relativize(file), violations });
    }
  }

  if (report.length === 0) {
    console.log(`✓ ${schemasFound} fichiers schema validés`);
    process.exit(0);
  }

  const totalViolations = report.reduce((n, r) => n + r.violations.length, 0);
  process.stderr.write(`✗ VIOLATIONS DOCTRINE RYSE (${report.length} fichiers, ${totalViolations} violations)\n\n`);
  for (const { file, violations } of report) {
    process.stderr.write(`${file}\n`);
    for (const v of violations) {
      process.stderr.write(`  ${v}\n`);
    }
    process.stderr.write('\n');
  }
  process.stderr.write('DOC : voir docs/ryse-doctrine.md\n');
  process.exit(1);
}

main();
