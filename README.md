# Boyun Leung Portfolio

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. Originally created with Figma Make and deployed to GitHub Pages.

## Tech Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS + Custom CSS Variables
- **UI Components**: shadcn/ui (Radix UI primitives)
- **Routing**: React Router with Hash-based routing
- **Deployment**: GitHub Pages

## Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js**: Version 18 or higher
- **npm**: Version 9 or higher (comes with Node.js)
- **Git**: For version control

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/BoyunLeungPortfolio.git
cd BoyunLeungPortfolio
```

### 2. Install Dependencies

```bash
npm install
```

This will install all the required packages including React, TypeScript, Vite, Tailwind CSS, and all UI components.

### 3. Run Development Server

```bash
npm run dev
```

This will start the development server at `http://localhost:5173` (or another port if 5173 is busy).

The site will automatically reload when you make changes to the code.

## Available Scripts

### Development

```bash
npm run dev
```
Starts the Vite development server with hot module replacement (HMR).

### Build

```bash
npm run build
```
Creates an optimized production build in the `dist/` directory. This command:
1. Runs TypeScript compiler to check for type errors
2. Bundles and optimizes all assets
3. Generates minified HTML, CSS, and JavaScript

### Preview Production Build

```bash
npm run preview
```
Serves the production build locally at `http://localhost:4173` for testing before deployment.

### Deploy to GitHub Pages

```bash
npm run deploy
```
Builds the project and deploys it to GitHub Pages. This command:
1. Runs `npm run build` automatically (via predeploy)
2. Deploys the `dist/` folder to the `gh-pages` branch
3. GitHub Pages will automatically serve the site from that branch

## Project Structure

```
BoyunLeungPortfolio/
├── components/          # Reusable UI components
│   ├── ui/             # shadcn/ui components
│   ├── figma/          # Figma-specific components
│   └── ProjectCard.tsx # Custom components
├── pages/              # Page components
│   ├── Home.tsx
│   ├── AboutMe.tsx
│   ├── Yearbook.tsx
│   └── projects/       # Project detail pages
├── styles/             # Global styles
│   └── globals.css     # Tailwind + custom CSS
├── imports/            # SVG and asset imports
├── public/             # Static assets
│   ├── CNAME          # Custom domain configuration
│   └── ASSETS_README.md
├── App.tsx             # Main app component with routing
├── main.tsx            # Application entry point
├── index.html          # HTML template
├── vite.config.ts      # Vite configuration
├── tailwind.config.js  # Tailwind CSS configuration
├── tsconfig.json       # TypeScript configuration
└── package.json        # Project dependencies and scripts
```

## Deployment

### First-Time Deployment Setup

1. **Update the CNAME file** with your custom domain:
   ```bash
   echo "yourdomain.com" > public/CNAME
   ```
   Replace `yourdomain.com` with your actual domain.

2. **Configure GitHub Pages**:
   - Go to your repository Settings → Pages
   - Set source to: `gh-pages` branch
   - The custom domain should be automatically detected from CNAME

3. **Configure DNS** (at your domain registrar):

   For apex domain (e.g., `example.com`), add these A records:
   ```
   185.199.108.153
   185.199.109.153
   185.199.110.153
   185.199.111.153
   ```

   For subdomain (e.g., `www.example.com`), add a CNAME record:
   ```
   CNAME: yourusername.github.io
   ```

4. **Deploy**:
   ```bash
   npm run deploy
   ```

### Subsequent Deployments

After the initial setup, deploying updates is simple:

```bash
npm run deploy
```

This will:
1. Build the latest version
2. Push to the `gh-pages` branch
3. Automatically update your live site (may take 1-2 minutes)

## Custom Domain Configuration

Your custom domain is configured via the `public/CNAME` file.

**Important**:
- The CNAME file must contain ONLY your domain name, no protocol (http/https)
- Example: `example.com` (NOT `https://example.com`)
- The file will be copied to the root of your deployed site

## Development Guide

### Adding New Pages

1. Create a new component in `pages/`:
   ```tsx
   // pages/NewPage.tsx
   export function NewPage() {
     return <div>New Page Content</div>
   }
   ```

2. Add the route in App.tsx:
   ```tsx
   import { NewPage } from "./pages/NewPage";

   // In the Routes component:
   <Route path="/new-page" element={<NewPage />} />
   ```

3. Add navigation link in the nav menu

### Adding New Components

shadcn/ui components are already included. To use them:

```tsx
import { Button } from "./components/ui/button"

function MyComponent() {
  return <Button>Click me</Button>
}
```

### Styling

This project uses Tailwind CSS with custom CSS variables defined in styles/globals.css.

**CSS Variables**: Defined in `:root` for easy theming
**Tailwind Classes**: Use for utility-first styling
**Custom Animations**: Sparkle cursor effect included

### Figma Assets

The project includes special `figma:asset/` imports from Figma Make. If you see broken images:

1. These are placeholders for actual images from Figma
2. The `ImageWithFallback` component will show a placeholder if assets are missing
3. Replace with actual images or re-export from Figma Make

See public/ASSETS_README.md for more details.

## Troubleshooting

### Development server won't start
- Check if port 5173 is already in use
- Try: `npm run dev -- --port 3000` to use a different port

### Build fails
- Clear cache: `rm -rf node_modules package-lock.json && npm install`
- Check TypeScript errors: `npm run build` will show them

### Deployment fails
- Ensure you have write permissions to the repository
- Check if `gh-pages` package is installed: `npm install gh-pages --save-dev`
- Verify GitHub Pages is enabled in repository settings

### Images not loading
- Check that assets are in the `public/` folder
- Verify image paths are correct
- See Figma Assets section above

### Custom domain not working
- Verify CNAME file contains only your domain name
- Check DNS propagation (can take up to 48 hours): `dig yourdomain.com`
- Ensure GitHub Pages settings show your custom domain
- Make sure HTTPS enforcement is enabled in GitHub Pages settings

### Routes not working after deployment
- This project uses HashRouter, so URLs will have `#` in them (e.g., `yourdomain.com/#/about`)
- This is expected behavior for GitHub Pages deployment

## Performance

The site includes several optimizations:
- **Code splitting**: Automatic via Vite
- **Asset optimization**: Images and assets are optimized during build
- **CSS purging**: Unused Tailwind classes are removed in production
- **Minification**: All JS, CSS, and HTML are minified

## Browser Support

- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest 2 versions)

## Contributing

This is a personal portfolio, but if you notice any bugs:
1. Open an issue describing the problem
2. Include steps to reproduce
3. Include browser and OS information

## License

This project uses components from [shadcn/ui](https://ui.shadcn.com/) under the [MIT License](https://github.com/shadcn-ui/ui/blob/main/LICENSE.md).

Images from [Unsplash](https://unsplash.com) are used under the [Unsplash License](https://unsplash.com/license).

## Acknowledgments

- Built with [Figma Make](https://help.figma.com/hc/en-us/articles/35463818346647)
- UI components from [shadcn/ui](https://ui.shadcn.com/)
- Icons from [Lucide React](https://lucide.dev/)
- Deployed on [GitHub Pages](https://pages.github.com/)

## Support

For questions or issues:
- Check the Troubleshooting section above
- Review [Vite documentation](https://vitejs.dev/)
- Review [React Router documentation](https://reactrouter.com/)
- Check [GitHub Pages documentation](https://docs.github.com/en/pages)

---

**Made with ❤️ by Boyun Leung**