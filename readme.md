# VS Dance Studios

Website for VS Dance Studios - a contemporary dance studio. The site features a full-screen hero carousel, a filterable class catalogue, and a responsive layout.

Live demo: https://www.uniotek.net/dance

## Tech stack

- HTML5
- Tailwind CSS (loaded via CDN)
- Custom CSS (`css/custom.css`)
- Vanilla JavaScript (`js/app.js`)

No build step, bundler, or dependencies are required yet.

## Project structure

```
.
├── index.html          # Single page markup
├── css/
│   └── custom.css      # All custom styles
├── js/
│   └── app.js          # Carousel, filters, menu, back-to-top logic
└── assets/             # Images, logos, carousel and class photos
```

## Run locally

The project is fully static, so you can open `index.html` directly. However, some browsers restrict local file access for assets and embedded content, so serving it over HTTP is recommended:

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000 in your browser.

Alternatives:

```bash
npx serve .
# or
npx http-server .
```

```ftp
Files can be uploaded via FTP
```

You can also use the "Live Server" extension in VS Code.

## Customization

- Class list and filters data: `js/app.js` (`trainings` array: `gender`, `age`, `style`).
- Hero carousel slides: `js/app.js` (`heroSlides` array).
- Styles and theme colors: `css/custom.css` (`:root` variables).
- Images `assets/` folder.
