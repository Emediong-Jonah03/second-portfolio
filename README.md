# EmedDev Portfolio

## Overview

A modern, responsive developer portfolio website built with React, Vite, and Tailwind CSS. The portfolio showcases skills, projects, and services for a Full-Stack Web Developer with a professional black and gold theme. The application is a single-page application (SPA) designed to be fast, mobile-first, and visually polished.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework**: React 19 with JSX
- Component-based architecture for modular UI development
- Single Page Application (SPA) structure with sections for About, Skills, Projects, and Contact

**Build Tool**: Vite 7
- Chosen for fast development server with hot module replacement
- Optimized production builds with code splitting
- Configured to run on port 5000 with all hosts allowed for Replit compatibility

**Styling**: Tailwind CSS 4 with Vite plugin
- Utility-first CSS approach for rapid styling
- Custom theme configuration with Inter font family
- Custom animation (wiggle) defined in theme
- Button hover effects with scale transform

### Project Structure Pattern

The project follows a standard Vite + React structure:
- `/src` - Source code with components and styles
- `/public` - Static assets (robots.txt, site verification files)
- `/dist` - Build output directory
- Root config files for Vite, ESLint, and package management

### Development Tooling

**Linting**: ESLint 9 with:
- React Hooks plugin for hook rules
- React Refresh plugin for Vite HMR compatibility
- Custom rule to ignore unused variables matching `^[A-Z_]` pattern

**Type Support**: TypeScript types installed for React (`@types/react`, `@types/react-dom`) for IDE autocompletion, though project uses JavaScript

## External Dependencies

### Email Service
- **EmailJS** (`@emailjs/browser`) - Client-side email sending for contact form functionality without backend

### PDF Viewing
- **Mescius DSPDFViewer** (`@mescius/dspdfviewer`) - PDF document viewing capability, likely for resume display

### Icon Library
- **React Icons** (`react-icons`) - Icon components for UI elements

### SEO & Verification
- Google Site Verification configured in index.html
- Open Graph and Twitter Card meta tags for social sharing
- robots.txt configured with sitemap pointing to Netlify deployment

### Deployment Target
- Configured for Netlify hosting (based on sitemap URL in robots.txt)
- Build outputs to `/dist` directory