const axios = require('axios')
const createNodeHelpers = require('gatsby-node-helpers').default

const { createNodeFactory } = createNodeHelpers({
  typePrefix: 'fontsData',
})

const FONTS = createNodeFactory('FONTS')

exports.sourceNodes = async ({ actions }) => {
  const { createNode } = actions
  const KEY = process.env.GATSBY_FONTS_API_KEY

  const fetchFontData = () =>
    axios.get(
      `https://www.googleapis.com/webfonts/v1/webfonts?key=${KEY}&sort=popularity`
    )

  const res = await fetchFontData()

  const fontNode = FONTS(res.data)

  createNode(fontNode)

  return
}
