# Front-End Showcase

Responsive landing page with client-side form validation and Fetch API integration, sending submissions directly to a Telegram Bot.

- Live: [https://landing-form-showcase.vercel.app](https://landing-form-showcase.vercel.app)
- Telegram Bot receiving form data: [https://t.me/TestFormDataShowcase](https://t.me/TestFormDataShowcase)

## Prerequisites

- Node.js = 16-20

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

```
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
```
