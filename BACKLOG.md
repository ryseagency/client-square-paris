# BACKLOG — Square Paris (Shopify theme client)

> Source unique du reste-à-faire de ce repo (convention RYSE : un backlog par projet, `~/.claude/rules/backlog-hygiene.md`). Statut canonique en fin de ligne : `— **OPEN**` / `— **DONE**` / `— **STALE**` / `— **DUPLICATE**`.

## 2026-07-14 — Metafield image « Nos essentiels » (demande client Beytulah via Nolwenn)

## 2026-07-16 — Hooks review verdicts + auto-merge guards (handoff Nolwenn)

- **SQUARE-HOOKS-VERDICT-GATE** — auto-merge armé avant verdict de revue. Cause racine : le verdict mourrait avec le sous-agent, rien de constatable pour le gater. Fix : `write-review-verdict.sh` écrit le verdict en local (`.claude/review-verdicts/`), `pre-enable-auto-merge-gate.sh` bloque l'armement sans score >= 9. Verdict aussi posté en commentaire PR greppable (`<!-- RYSE-VERDICT:N -->`). — **DONE**

- **SQUARE-HOOKS-PUSH-AFTER-ARM** — push après armement auto-merge = merge sur code non revu. Cause racine : aucun garde déterministe n'empêchait le push post-arm. Fix : `pre-enable-auto-merge-gate.sh` pose un marqueur `.claude/auto-merge-armed/` à l'armement, `pre-git-push-guard.sh` bloque tout push sur une branche armée. Désarmement = `disable_pr_auto_merge` + `rm` du marqueur. — **DONE**

- **SQUARE-HOOKS-BRANCH-GUARD-FP** — faux positif branch-guard : nom de branche protégée dans un message de commit + git push bloquait à tort. Cause racine : la garde cherchait la branche dans toute la commande au lieu du seul refspec du push. Fix : `pre-git-push-guard.sh` isole le segment `git push` via grep, parse uniquement les args positionnels (skip flags), extrait le refspec. 10/10 tests mutation. — **DONE**

- **SQUARE-HOOKS-PROTECT-SKIP** — `pre-edit-protect.sh` bloquait l'écriture de scripts hooks (pattern `print(` dans python inline). Cause racine : `hooks/` pas dans la liste skip des fichiers non-livrables. Fix : ajout `*/hooks/*` au case skip. — **DONE**

- **SQUARE-METAFIELD-IMAGE-ESSENTIELS — le client (Beytulah, WhatsApp 13/07) voulait, sur la section « Nos essentiels » de la home, une photo dédiée par produit SANS toucher la galerie produit.** Section = `featured-products.liquid`, store `udjskw-up.myshopify.com`, thème live « Square Ryse » #198831964502. Architecture retenue (tranchée Nolwenn) = **metafield-read** (`product.metafields[custom][image_accueil]`, clé configurable via 2 settings section, fallback `featured_image`), design identique, remplissage auto depuis la collection conservé. Garde anti-régression `.value.width` (ne bascule que sur vraie image — couvre fichier supprimé / metafield non-image ; finding bloquant de la revue adversariale corrigé). Anti-drift RYSE appliqué : `theme pull` du live d'abord (drift détecté : le live avait déjà retiré l'affichage type produit + nom h3 + fond #fbfaf8 + round_swatches) → feature ré-appliquée sur la base LIVE. Theme Check 0 erreur. Push `--allow-live` sur #198831964502 vérifié par re-pull identique. Commit `158c3ce`. Rollback = `rollback/featured-products.live-2026-07-14.liquid`. **RESTE côté admin (action Nolwenn, pas du code)** : nommer le metafield produit `custom.image_accueil` OU ajuster le setting « Clé du metafield image », puis renseigner l'image par produit (vide = image produit par défaut). — **DONE**
