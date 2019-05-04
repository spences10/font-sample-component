import { graphql, useStaticQuery } from 'gatsby'

export const useFontsData = () => {
  const { fontsDataFonts } = useStaticQuery(
    graphql`
      query FONTS_DATA {
        fontsDataFonts {
          items {
            kind
            family
            category
            version
            lastModified
            variants
            subsets
            files {
              _100
              _200
              _300
              _500
              _600
              _700
              _800
              _900
              _100italic
              _300italic
              regular
              italic
              _500italic
              _700italic
              _900italic
              _600italic
              _800italic
              _200italic
            }
          }
        }
      }
    `
  )
  return fontsDataFonts
}
