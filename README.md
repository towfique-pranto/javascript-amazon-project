# JavaScript Amazon Project

A multi-page Amazon-style storefront built with Vanilla JavaScript, HTML, and CSS.

This project is part of the broader coursework in:
`https://github.com/towfique-pranto/javascript-course-work`

## Pages

- `amazon.html`: Product listing, search, and add-to-cart flow
- `checkout.html`: Checkout page with order summary and payment summary
- `orders.html`: Order history and "Buy it again" actions
- `tracking.html`: Delivery progress tracking for ordered items

## Features

- Product rendering from API data (`https://supersimplebackend.dev/products`)
- Search by product name and keywords
- Cart management with `localStorage`
- Checkout calculations (items, shipping, tax, total)
- Place order flow and saved orders in `localStorage`
- Order tracking UI with progress states (Preparing, Shipped, Delivered)
- OOP practice with `Product`, `Clothing`, and `Appliance` models
- Unit/integration-style tests using Jasmine

## Tech Stack

- HTML5
- CSS3
- Vanilla JavaScript (ES Modules)
- Jasmine (browser-based test runner)
- Day.js (loaded from CDN)

## Project Structure

- `scripts/`: Page logic and checkout modules
- `data/`: Cart, products, orders, and data utilities
- `styles/`: Shared and page-specific styles
- `images/`: Product and UI assets
- `tests/`: Jasmine test suites and runner
- `backend/products.json`: Local product dataset copy for practice/reference

## Getting Started

Since this project uses ES modules, run it with a local static server (recommended).

1. Open the project in your editor.
2. Start a local server from the project root.
3. Open `amazon.html` in your browser.

Example using VS Code Live Server:

1. Install the Live Server extension.
2. Right-click `amazon.html`.
3. Click `Open with Live Server`.

## Running Tests

1. Start the project with a local server.
2. Open `tests/SpecRunner.html` in your browser.
3. Check Jasmine results in the browser test runner.

## Learning Focus

This project practices:

- DOM manipulation
- Modular JavaScript architecture
- Async data loading with `fetch` and `Promise.all`
- State persistence with `localStorage`
- Basic testing with Jasmine
- Multi-page frontend application flow

## Notes

- Some data is loaded from `supersimplebackend.dev`, so an internet connection is required for full functionality.
- Cart and orders are stored in your browser's `localStorage`.
