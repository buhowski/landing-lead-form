# Landing Page with Lead Form

Responsive site with client-side form validation. Submissions go to a Telegram Bot via Fetch API.

Live: https://landing-lead-form.vercel.app

Bot Receiving Data: https://t.me/TestFormDataShowcase

## Prerequisites

Node.js 20

## Quick Start

```bash
# Install dependencies
npm i

# Development (localhost:3000)
npm start

# Production Build
npm run build
```

## Structure

```bash
app/
├── css/             # Compiled and minified styles
├── fonts/           # Project fonts
├── images/          # Project images
├── js/              # Webpack-bundled scripts
├── parts/           # HTML components (SSI)
├── styles/sass/     # SCSS source files
├── utils/           # Helper scripts & JSONs
└── index.html       # Main entry point
gulpfile.js          # Build config
```
