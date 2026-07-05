# Lead Form Landing Page

Responsive site with client-side form validation. Submissions go to a Telegram Bot via Fetch API.

Live: https://lead-form-landing.vercel.app

Bot Receiving Data: https://t.me/LeadFormData

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
