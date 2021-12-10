const allPosts = {}
const allPostsCTX = require.context('./posts', true, /index.tsx$/)
allPostsCTX.keys().forEach((key) => {
  allPosts[key.replace(/.*test-(\d{3}).*/g, '$1')] = allPostsCTX(key).default
})

export default allPosts
