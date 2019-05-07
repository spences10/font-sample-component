import styled from '@emotion/styled'
import React from 'react'
import { FontCharacters } from './font.characters'
import { FontGlyph } from './font.glyph'

const ComponentWrapper = styled.div`
  grid-gap: 30px;
  grid-template-columns: 3fr 5fr;
  margin-top: 60px;
  font-family: ${({ family = `'Open Sans'` }) => family};
  display: block;
`

const GlyphWrapper = styled.div`
  position: relative;
`

const CharactersWrapper = styled.div`
  flex: 1 1 auto;
`

export const FontComponent = ({ family, title }) => (
  <ComponentWrapper family={family}>
    <GlyphWrapper>
      <FontGlyph>Ag</FontGlyph>
    </GlyphWrapper>
    <CharactersWrapper>
      <FontCharacters fontWeight={'700'} title={title} />
    </CharactersWrapper>
  </ComponentWrapper>
)
