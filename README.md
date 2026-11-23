# Lucas Lamounier Faria — Personal Portfolio

Source code for my personal portfolio website hosted on GitHub Pages at **[lucaslamounier08.github.io](https://lucaslamounier08.github.io/)**.

## Highlights

- **Pure static architecture** — Zero build step, zero frameworks, and zero runtime dependencies (`HTML5`, `CSS3`, vanilla `JS`), built specifically for fast, reliable hosting on GitHub Pages.
- **Bilingual (EN / PT-BR)** — Instant client-side language switching (persisted in `localStorage` and supported via `?lang=en` / `?lang=pt`), including language-aware links to [FalconApps](https://falconapps.org/en).
- **Light & Dark themes** — Editorial light palette by default, respecting `prefers-color-scheme` with manual toggle and no flash of unstyled theme.
- **Accessible & print-ready** — Semantic HTML5, WCAG AA contrast, keyboard navigation, structured JSON-LD metadata, and a dedicated `@media print` stylesheet.

## Project Structure

```text
.
├── index.html                    # Main page & semantic structure
├── .nojekyll                     # Disables Jekyll processing on GitHub Pages
├── favicon.ico                   # Legacy favicon fallback
├── assets/
│   ├── css/styles.css            # Design tokens, layout, responsive & print styles
│   ├── js/main.js                # EN/PT i18n, theme toggle, scroll spy & reveal
│   └── images/
│       ├── favicon.svg           # Minimalist SVG monogram favicon
│       └── portrait.jpg          # Optimized portrait (1000×1206)
└── c/
    ├── Lucas_Lamounier_Faria_CV.pdf
    └── *.pdf                     # Scrum.org & technical certificates
```

## Local Preview

Because the site is 100% static, any local HTTP server works:

```bash
python -m http.server 8080
```

Then open `http://localhost:8080`.

## Links

- **Website:** [lucaslamounier08.github.io](https://lucaslamounier08.github.io/)
- **LinkedIn:** [linkedin.com/in/lucaslamounier08](https://www.linkedin.com/in/lucaslamounier08/)
- **Independent Projects:** [falconapps.org](https://falconapps.org/en)
