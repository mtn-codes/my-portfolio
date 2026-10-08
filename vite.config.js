import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
//
// We use `loadEnv(mode, root, '')` with an EMPTY prefix so we can read
// `KIMCHI_API_KEY` (no VITE_ prefix) from `.env` for the dev-server proxy.
// If we left it `VITE_`-prefixed, Vite would inline its value into the
// client bundle at build time — leaking the key to every visitor. The
// dev server reads it via `process.env` instead, keeping the value
// server-side only.
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const baiApiKey = env.BAI_API_KEY
  const kimchiApiKey = env.KIMCHI_API_KEY

  return {
    plugins: [
      tailwindcss(),
      react()
    ],
    server: {
      host: true,
      allowedHosts: true,
      cors: true,
      proxy: {
        // OpenRouter LLM proxy (Active provider)
        '/api/openrouter': {
          target: 'https://openrouter.ai/api/v1',
          changeOrigin: true,
          secure: true,
          rewrite: (path) => path.replace(/^\/api\/openrouter/, ''),
          configure: (proxy) => {
            proxy.on('proxyReq', (proxyReq) => {
              const currentEnv = loadEnv(mode, process.cwd(), '')
              const key = process.env.OPENROUTER_API_KEY || currentEnv.OPENROUTER_API_KEY
              if (key) {
                proxyReq.setHeader('Authorization', `Bearer ${key}`)
              }
              proxyReq.setHeader('HTTP-Referer', 'https://tahanaghdi.me')
              proxyReq.setHeader('X-Title', 'Taha Naghdi Portfolio')
            })
            proxy.on('error', (err, _req, res) => {
              console.error('[vite /api/openrouter proxy error]:', err?.message)
              if (res && !res.headersSent) {
                res.writeHead(502, { 'Content-Type': 'application/json' })
                res.end(JSON.stringify({ error: err?.message || 'Proxy error' }))
              }
            })
          },
        },
        // B.AI LLM proxy (Retained for fallback)
        '/api/bai': {
          target: 'https://api.b.ai/v1',
          changeOrigin: true,
          secure: true,
          rewrite: (path) => path.replace(/^\/api\/bai/, ''),
          configure: (proxy) => {
            proxy.on('proxyReq', (proxyReq) => {
              const currentEnv = loadEnv(mode, process.cwd(), '')
              const key = process.env.BAI_API_KEY || currentEnv.BAI_API_KEY
              if (key) {
                proxyReq.setHeader('Authorization', `Bearer ${key}`)
              }
            })
            proxy.on('error', (err, _req, res) => {
              console.error('[vite /api/bai proxy error]:', err?.message)
              if (res && !res.headersSent) {
                res.writeHead(502, { 'Content-Type': 'application/json' })
                res.end(JSON.stringify({ error: err?.message || 'Proxy error' }))
              }
            })
          },
        },
        // Kimchi proxy (Retained for inert fallback)
        '/api/kimchi': {
          target: 'https://llm.kimchi.dev/openai/v1',
          changeOrigin: true,
          secure: true,
          rewrite: (path) => path.replace(/^\/api\/kimchi/, ''),
          configure: (proxy) => {
            proxy.on('proxyReq', (proxyReq) => {
              if (kimchiApiKey) {
                proxyReq.setHeader('Authorization', `Bearer ${kimchiApiKey}`)
              }
            })
          },
        },
      },
    },
    build: {
      target: 'esnext',
      minify: 'esbuild',
      cssCodeSplit: true,
      chunkSizeWarningLimit: 650,
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('node_modules')) {
              if (id.includes('react') || id.includes('react-dom') || id.includes('react-router-dom')) {
                return 'vendor-react'
              }
              if (id.includes('framer-motion')) {
                return 'vendor-motion'
              }
              if (id.includes('chart.js') || id.includes('react-chartjs-2')) {
                return 'vendor-charts'
              }
              if (id.includes('i18next') || id.includes('react-i18next')) {
                return 'vendor-i18n'
              }
              if (id.includes('react-icons') || id.includes('@react-icons')) {
                return 'vendor-icons'
              }
            }
          },
        },
      },
    },
  }
})