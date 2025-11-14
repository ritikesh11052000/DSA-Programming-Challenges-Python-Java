# UI Redesign and Theme Toggle Implementation

## Phase 1: Setup and Configuration
- [x] Install next-themes package for theme switching
- [x] Update tailwind.config.js: Add darkMode: 'class', define light and dark color palettes
- [x] Update globals.css: Import Inter font, set body font to Inter, code to JetBrains Mono, add CSS variables for themes
- [x] Create styles/prism-light.css for light theme syntax highlighting (grayscale)

## Phase 2: Theme Provider and Toggle
- [x] Update app/layout.js: Wrap with ThemeProvider, add theme toggle button in top-right
- [x] Ensure theme preference saves to localStorage

## Phase 3: Component Updates
- [x] Update components/FileList.jsx: Apply dark: classes, new color scheme, animations, indentation, hover effects
- [x] Update components/CodeView.jsx: Add breadcrumb navigation, copy code button, apply dark: classes, updated styling
- [x] Update app/page.js: Responsive layout with mobile drawer toggle, new border colors
- [x] Update app/file/[...path]/page.js: Responsive layout, new border colors

## Phase 4: Syntax Highlighting
- [x] Update styles/prism-dark.css: Ensure grayscale highlighting for dark theme
- [x] Implement dynamic Prism.js theme switching based on theme

## Phase 5: Interactions and Animations
- [x] Add smooth expand/collapse animations in FileList
- [x] Add fade-in animations for code viewer and breadcrumbs
- [x] Add hover scale effects (scale-[1.01]) on sidebar items
- [x] Ensure 0.2s smooth transitions for theme switch

## Phase 6: Testing and Verification
- [ ] Test theme toggle functionality and persistence
- [ ] Verify responsive behavior on mobile (drawer)
- [ ] Test copy code button functionality
- [ ] Ensure all animations and interactions work smoothly
