import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import mdx from 'vite-plugin-mdx'
import remarkAttr from 'remark-attr'

export default defineConfig({
  plugins: [
    mdx.default({
      remarkPlugins: [remarkAttr],
    }),
    react(),
  ],
})
