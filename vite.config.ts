import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// Plugin to handle Figma asset imports
function figmaAssetsPlugin() {
  // Mapping of figma:asset hashes to actual asset paths
  const assetMap: Record<string, string> = {
    '0118a6518dee130d65796f2ed4ea41f14048ef7b.png': '/assets/projects/support-system/ibm-skills-network-support.png',
    'd38aea7ce30b73bef56c57aad420032e2d661a54.png': '/assets/projects/ibm-watsonx-workshop-context-manager.png',
    '9ffbc07ddc6bf52e35428e8d4772190abf3bfc5e.png': '/assets/projects/mark-ai-grader.png',
    '850075cb0dd0132df73f2746e4178c604c022ce6.png': '/assets/projects/design-system/harmony-design-system.png',
    'f0912268a01740a0933ffb413e8fd9a020ac29c3.png': '/assets/profile/boyun-leung.png',
    '027f074caf782e03c58fe114ff82c5360d5987cb.png': '/assets/yearbook/spiral-staircase-1718-yearbook-cover.png',
    'c981f94a0fdb177ae6d3132fa065f1672c75f84b.png': '/assets/yearbook/2016-2017-yearbook-colour-palette-and-typography.png',
    '53dc547f58d358e0ea1a131985391f69f92eb655.png': '/assets/yearbook/student-survey-1617-layout.png',
    '0fae35070064461f19c5e92f122bb7e495e5d6d9.png': '/assets/yearbook/illustrations-from-2017-2018-yearbook.png',
    '430f1eda13d31b251f79862ff7b5e738ae7b3991.png': '/assets/yearbook/colour-palette-and-typography-for-2017-2018-yearbo.png',
    'ff2a8499adb74674da082d6d8c2017c2b1b863b9.png': '/assets/yearbook/spiral-staircase-1718-with-mlk-quote.png',
    '252f257c1492afb17b2ebeef97cf7bb1d4151b17.png': '/assets/projects/design-system/color-palette-guidelines.png',
    '33f615b056ca7d0a801fbdf523ef4b3c29f69070.png': '/assets/projects/design-system/recommended-colour-groupings.png',
    'ce5d5cad0f1289e00edbd7a6eb59b0dc402bec5d.png': '/assets/projects/design-system/grids-and-viewpoints.png',
    'a79a2d9d60fc66a09c6ef3414e900c51cd15c806.png': '/assets/projects/design-system/badges-component.png',
    '66b661ec7ac2509e9a4448f37db697afb64d6952.png': '/assets/projects/design-system/buttons-component.png',
    'eb22525e1b1ce87c9818df461e7e25ba08395609.png': '/assets/projects/design-system/calendar-component.png',
    '98bb393cf9b7ab1f94ba7b2c9d3f059560c97f0f.png': '/assets/projects/design-system/input-field-component.png',
    'f2c2347666cf71695ed378439d07c5c6a95a45c8.png': '/assets/projects/design-system/toast-notification-component.png',
    'fef403ef505d9c25646be02895ffa5d0240d6bbd.png': '/assets/projects/design-system/table-pattern.png',
    'ac0b5ec2801d873b4a4ee59dc05b41ebd0e34101.png': '/assets/projects/design-system/set-reminders-pattern.png',
    // Support System additional images
    '047e3c4aca9f6b48ceafdb26c7096a714b726e39.png': '/assets/projects/support-system/old-ticket-issues-page.jpg',
    'fd69de1621565fb3566f4621de245a8e85c7860d.png': '/assets/projects/support-system/defining-new-support-agent-flow.jpg',
    '74ed1ab8e6283b2bda1b7eeab3e652ece1dce512.png': '/assets/projects/support-system/new-ticket-issues-page.jpg',
  }

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
        // Extract the asset filename from the ID
        const assetFile = id.replace('\0figma:asset/', '')

        // Look up the actual path
        const assetPath = assetMap[assetFile]

        if (assetPath) {
          // Return the actual asset path
          return `export default "${assetPath}"`
        } else {
          // For unmapped assets, return a placeholder
          console.warn(`No mapping found for figma asset: ${assetFile}`)
          return `export default "https://placehold.co/800x600/e5e7eb/6b7280?text=Missing+Image"`
        }
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
