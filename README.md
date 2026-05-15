# Front-End Showcase

Live Demo: [https://rgbweb-showcase.vercel.app/](https://rgbweb-showcase.vercel.app/)
Form data sent directly to TG Bot: [https://t.me/TestFormDataShowcase](https://t.me/TestFormDataShowcase)

## Prerequisites

- Node.js: >=20.x

## Quick Start

```
# Install dependencies
npm i

# Development (localhost:3000)
npm start

# Production Build
npm run build
```

## Structure

app/
├── css/             # Compiled and minified styles
├── fonts/           # Project fonts
├── images/          
│   ├── src/         # Source images
│   └── dist/        # Optimized images for production
├── js/              # Webpack-bundled scripts
├── parts/           # HTML components (SSI)
├── styles/          # SCSS source files
├── utils/           # Helper scripts & JSONs
└── index.html       # Main entry point