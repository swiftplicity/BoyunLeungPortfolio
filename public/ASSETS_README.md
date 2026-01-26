# Figma Assets Directory

## About Figma Assets

This project uses images exported from Figma Make. The images are referenced using the `figma:asset/` protocol in the code.

## How Figma Assets Work

When you export from Figma Make, it includes the actual image files. The `figma:asset/[hash].png` imports in the code are special imports that Figma Make's build system resolves to actual image files.

## Current State

If you see broken images when running the site, you need to:

1. **Re-export from Figma Make** with all assets included
2. Or **download the assets** from your Figma Make project
3. Or **replace the imports** with actual image files placed in this `public/` directory

## Files That Use Figma Assets

- `/pages/Home.tsx` - Project card images
- `/pages/AboutMe.tsx` - About page images
- `/pages/projects/*.tsx` - Project detail images
- `/pages/Yearbook.tsx` - Yearbook images

## Temporary Solution

The `ImageWithFallback` component will show a placeholder SVG if images fail to load, so the site will still be functional even if assets are missing.
