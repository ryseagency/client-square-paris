# Lessons — Square

> Fichier vivant. À chaque correction d'une erreur récurrente, ajouter une ligne ici.
> Importé automatiquement par `CLAUDE.md` du projet via `@lessons.md`.
> Format : `- {YYYY-MM-DD} — {règle actionnable, courte, spécifique}`
> Une bonne entrée est : **spécifique, réutilisable, actionnable, datée**.
> Mauvais candidats : best practices génériques (→ CLAUDE.md), one-shot qui ne se reproduira pas.

## Liquid / Shopify


## CSS / styling


## Schema / éditeur


## SEO / structured data


## Workflow / déploiement

- 2026-07-16 — Ne jamais armer auto-merge avant qu'un verdict de revue >= 9 soit constaté localement (fichier `.claude/review-verdicts/`). Advisory ne tient pas : escalader en hook.
- 2026-07-16 — Ne jamais pusher après avoir armé auto-merge. Le marqueur `.claude/auto-merge-armed/` bloque ; désarmer d'abord si push nécessaire.
- 2026-07-16 — Branch-guard sur git push : parser le refspec uniquement (isoler le segment `git push` puis ses args positionnels), jamais grep sur la commande entière (commit messages = faux positifs).
- 2026-07-16 — `pre-edit-protect.sh` doit skip `*/hooks/*` : les scripts hooks contiennent légitimement `print()` (python inline pour JSON deny).


## Spécifique client


---

## Consolidation hebdo

Tous les vendredis : passer en revue les 7 derniers jours, supprimer les obsolètes, regrouper les doublons. Si une lesson devient universelle (vraie sur tous projets) → la promouvoir dans le `~/.claude/CLAUDE.md` global et la retirer d'ici.
