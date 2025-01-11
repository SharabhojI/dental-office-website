# Example Dental Website Project

A responsive, multi-page website developed using modern web development practices and vanilla JavaScript.

Site is live at [https://sharabhoji.github.io/dental-office-website/](https://sharabhoji.github.io/dental-office-website/)

## Technologies & Features

### Core Technologies
- HTML5 
- CSS3
- Vanilla JavaScript

### CSS Implementation
- Mobile-first responsive design with three breakpoints:
  - Desktop (1024px+)
  - Tablet (481px-1024px)
  - Mobile (≤480px)
- Custom animations and transitions
- Modular architecture:
  - `reset.css`: CSS reset/normalize
  - `styles.css`: Core styles
  - `mobile.css`: Mobile/Tablet-specific styles
  - `form.css`: Form component styles
  - `table.css`: Table component styles
  - `media.css`: Styling for images and video

### JavaScript Features
- Real-time office hours tracker
- Form validation
- Time-based content display
- Image carousel for site navigation

## Project Structure
```
project/
├── css/
│   ├── form.css
│   ├── media.css
│   ├── mobile.css
│   ├── reset.css
│   ├── styles.css
│   └── table.css
├── js/
│   └── script.js
├── media/
│   └── [image and video assets]
└── html/
    ├── index.html
    ├── about.html
    ├── dentists.html
    ├── team.html
    ├── services.html
    ├── general-dentistry.html
    ├── childrens-dentistry.html
    ├── cosmetic-dentistry.html
    ├── dental-implants.html
    ├── dental-sedation.html
    ├── emergency-dentistry.html
    ├── contact.html
    └── booking.html
```

## Key Components
- Responsive navigation with dropdowns
- Contact and booking form with validation
- Dynamic office hours display
- Grid-based service cards with hover effects
- Mobile-friendly collapsible menu
- Responsive images and video content
- Embedded OpenStreetMap

## Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge - latest versions)
- Mobile browsers
