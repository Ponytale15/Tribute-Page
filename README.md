# Ntokozo Mbambo — Voice of a Nation

A responsive tribute webpage celebrating South African gospel artist Ntokozo Mbambo. The project combines a cinematic hero section, biography, career timeline, awards, quotation section, and external reference link in a polished editorial-style design.

## Overview

This project is a static front-end tribute page built with HTML, CSS, and vanilla JavaScript.

The page presents:

- A full-screen hero section featuring Ntokozo Mbambo
- Biography and career information
- A quotation section
- A chronological career timeline
- Awards and honours
- Responsive styling
- Smooth scrolling
- Timeline reveal animations
- Interactive award cards
- Image error handling
- A link to the artist's Wikipedia entry

The HTML identifies the page as **“Ntokozo Mbambo — Voice of a Nation”** and structures the content into semantic sections. fileciteturn3file0L1-L14

## Features

### Hero Section

The hero introduces Ntokozo Mbambo with:

- Artist name
- Birth information
- Place of birth
- Short descriptive tagline
- Full-width background image
- Image attribution

The image is sourced from Wikimedia Commons and includes alternative text describing the image. fileciteturn3file0L19-L53

### Biography

The biography section provides information about her early life, musical upbringing, Joyous Celebration career, solo career, albums, television appearances, awards, and national performances. fileciteturn3file0L77-L141

### Career Timeline

The timeline presents selected milestones from 2001 through 2024, including:

- *Bambelela*
- Joining Joyous Celebration
- *Keep On Believing*
- *Filled*
- *Spirit and Life*
- *Moments in Time*
- *Lavish Worship*
- Lifetime Honorary Award in Ghana
- Performing the South African national anthem for the Springboks

These milestones are structured as individual timeline cards. fileciteturn3file0L146-L312

### Awards & Recognition

The page includes a dedicated awards section showing recognition such as:

- South African Music Awards
- African Gospel Music & Media Awards
- Crown Gospel Music Awards
- Metro FM Music Awards
- Praise Achievement Awards
- Lifetime Honorary Award — Ghana
- Views for “Jehovah Is Your Name”

fileciteturn3file0L315-L390

## Technologies

- **HTML5** — semantic page structure and content
- **CSS3** — layout, typography, responsive design, animations, and visual styling
- **Vanilla JavaScript** — interactions and dynamic effects
- **Google Fonts** — Cormorant Garamond and Inter
- **Intersection Observer API** — timeline reveal animation

The project uses Cormorant Garamond for major editorial headings and Inter for supporting interface text. fileciteturn3file0L9-L14

## Project Structure

```text
Ntokozo-Mbambo-Tribute/
├── index.html
├── style.css
├── script.js
├── jsconfig.json
└── README.md
```

### `index.html`

Contains the main page structure, including:

```text
Hero
│
├── Image
├── Image caption
├── Artist name
└── Tagline

Quote
│
└── Blockquote

Biography
│
└── Career background

Timeline
│
└── Career milestones

Awards
│
└── Recognition cards

Footer
│
└── Wikipedia reference
```

The page also loads `style.css` and `script.js`. fileciteturn3file0L393-L420

### `style.css`

The stylesheet defines the complete visual identity of the page.

The primary design palette includes:

- Deep purple
- Plum
- Gold
- Light gold
- Cream
- Fog
- White
- Dark text

The stylesheet also establishes typography, spacing, hero overlays, cards, timeline layouts, award cards, and responsive behaviour. fileciteturn3file3L1-L19

### `script.js`

The JavaScript provides lightweight interactive behaviour.

It handles:

1. DOM initialization
2. Image loading errors
3. Smooth scrolling for internal links
4. Timeline animation
5. Award-card selection
6. Console confirmation when the page loads

fileciteturn3file2L1-L13 fileciteturn3file2L37-L72

### `jsconfig.json`

The project includes a JavaScript configuration using:

- ESNext modules
- Bundler module resolution
- ES2024 target
- React JSX configuration
- Strict type-checking options

It excludes `node_modules`. fileciteturn3file1L1-L16

## Design System

The visual design intentionally uses a premium editorial/gospel-inspired aesthetic.

### Typography

**Cormorant Garamond**

Used for:

- Main artist heading
- Section headings
- Timeline event titles
- Quotation styling

**Inter**

Used for:

- Body text
- Labels
- Metadata
- Navigation/reference content

The hero title uses responsive sizing through CSS `clamp()`. fileciteturn3file3L69-L100

### Colour Palette

| Variable | Purpose |
|---|---|
| `--deep` | Deep purple background |
| `--plum` | Timeline and secondary sections |
| `--gold` | Primary accent |
| `--gold-lt` | Highlighted gold text |
| `--cream` | Main content background |
| `--fog` | Awards background |
| `--text` | Main text |
| `--white` | Light text and surfaces |

fileciteturn3file3L3-L11

## Responsive Design

The layout adapts to smaller screens.

The timeline uses a responsive CSS grid and automatically adjusts the number of columns based on available width. The stylesheet also includes a mobile breakpoint at 460px that adjusts the hero title and hero height. fileciteturn3file3L191-L205 fileciteturn3file3L287-L290

## JavaScript Behaviour

### Image Error Handling

If the main image cannot load, JavaScript changes its opacity to hide the failed image gracefully. fileciteturn3file2L3-L10

### Smooth Scrolling

Internal anchor links are intercepted and scrolled into view with smooth behaviour. fileciteturn3file2L13-L35

### Timeline Animation

Timeline items are observed using `IntersectionObserver`. When a timeline item enters the viewport, the `visible` class is added, allowing the CSS to control its reveal effect. fileciteturn3file2L37-L59

### Award Interaction

Award cards respond to clicks by toggling a `selected` class. fileciteturn3file2L61-L68

## Accessibility

The project already includes several useful accessibility-oriented choices:

- Semantic `figure` and `figcaption`
- Descriptive `alt` text for the main image
- Structured headings
- Semantic lists for the timeline
- External links configured with `target="_blank"` and `rel="noopener"`

The image includes the alt text **“Ntokozo Mbambo performing on stage.”** fileciteturn3file0L23-L31

### Recommended Accessibility Improvements

For a future version, consider adding:

- Visible keyboard focus states
- A skip-to-content link
- More explicit landmark labels
- Improved colour contrast checks
- Reduced-motion support for animations
- `aria-label` where interactive elements need additional context
- Keyboard-accessible behaviour for selectable award cards

## Content Sources

The footer identifies the biographical content as researched and paraphrased from Wikipedia and Koko Records. It also attributes the hero image to Wikimedia Commons under a Creative Commons licence. fileciteturn3file0L393-L412

The page also provides a direct Wikipedia reference link for readers who want additional information. fileciteturn3file0L397-L405

## Running the Project

This is a static website and does not require a build system or backend.

### Option 1 — Open Directly

Open:

```text
index.html
```

in a modern web browser.

### Option 2 — VS Code

Open the project folder in VS Code and use a local development server such as Live Server.

A local server is recommended during development because it more closely matches how the site will behave when deployed.

## Deployment

Because the project consists of static HTML, CSS, JavaScript, and externally hosted assets, it can be deployed to a static hosting platform.

Possible deployment options include:

- GitHub Pages
- Netlify
- Vercel
- Cloudflare Pages

No backend server is required for the current implementation.

## Learning Objectives

This project demonstrates practical front-end development concepts including:

- Semantic HTML
- Responsive web design
- CSS variables
- CSS Grid
- Flexbox
- Responsive typography
- Hero image overlays
- Web typography
- DOM manipulation
- Event listeners
- Intersection Observer
- Smooth scrolling
- Interactive UI states
- Image error handling
- Accessibility fundamentals
- Static website deployment

## Future Improvements

Possible improvements include:

- Add a navigation menu
- Add dedicated sections for albums and discography
- Add embedded music previews where licensing permits
- Add more interactive timeline transitions
- Add a gallery section
- Add improved keyboard navigation
- Add reduced-motion support
- Add a mobile navigation system
- Add social media/reference links
- Add structured metadata for search engines
- Add Open Graph metadata for social sharing
- Add automated accessibility testing
- Add unit tests for JavaScript interactions

## License

No explicit software license is defined in the supplied project files.

Before distributing or modifying the project publicly, consider adding an appropriate `LICENSE` file and confirming that all third-party images, fonts, text, and other assets are used according to their respective licences and attribution requirements.
