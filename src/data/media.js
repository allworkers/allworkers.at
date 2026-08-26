// Resolve media assets through Vite's asset pipeline.
// - Normal build: each file becomes a hashed asset in dist/assets (cached, split).
// - Single-file build (SINGLE_FILE=1): assets are inlined as data URIs, so the
//   whole site ships as one self-contained index.html (used for the live preview).
const modules = import.meta.glob('../assets/media/*', { eager: true, query: '?url', import: 'default' })

const map = {}
for (const path in modules) {
  const name = path.split('/').pop()
  map[name] = modules[path]
}

export const media = (file) => map[file] || file
