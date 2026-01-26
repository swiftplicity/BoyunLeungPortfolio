import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// Plugin to handle Figma asset imports
function figmaAssetsPlugin() {
  return {
    name: 'figma-assets',
    resolveId(id: string) {
      if (id.startsWith('figma:asset/')) {
        // Return a virtual module ID
        return '\0' + id
      }
    },
    load(id: string) {
      if (id.startsWith('\0figma:asset/')) {
        // Return a placeholder image URL or data URI
        // For now, return empty string which will be handled by ImageWithFallback component
        return `export default ""`
      }
    }
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), figmaAssetsPlugin()],
  base: '/', // Root path for custom domain
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './'),
    },
  },
})
