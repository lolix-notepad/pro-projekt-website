const path = require('path')

module.exports = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')]
  },
  images: {
    loader: "imgix",
    path: "",
  },
  basePath: '/pro-projekt-website',
  assetsPrefix: '/pro-projekt-website'
}
