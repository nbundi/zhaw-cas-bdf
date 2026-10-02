const canonicalUrl = process.env.URL || undefined

/** @type {import('@marp-team/marp-cli').Config} */
const config = {
  allowLocalFiles: true,
  ogImage: (() => {
    if (canonicalUrl) return `${canonicalUrl}/og-image.jpg`
    if (process.env.VERCEL_URL)
      return `https://${process.env.VERCEL_URL}/og-image.jpg`
  
    return undefined
  })(),
  themeSet: 'fs25/themes',
  url: canonicalUrl,
}

export default config