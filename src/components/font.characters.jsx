import styled from '@emotion/styled'
import React from 'react'
import { CharacterTitle } from './font.title'

const Characters = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890¿?¡!&@‘’“”«»%*^#$£€¢/()[]{}.,®©`

const CharacterWrapper = styled.div`
  font-size: 27px;
  line-height: 1.48;
  color: #333333;
`

const CharacterBlock = styled.div`
  letter-spacing: 4px;
  margin-top: 19px;
`

export const FontCharacters = ({ title, fontWeight }) => {
  const fontArray = Characters.split('')
  return (
    <CharacterWrapper>
      <CharacterTitle fontWeight={fontWeight}>{title}</CharacterTitle>
      <CharacterBlock>{fontArray}</CharacterBlock>
    </CharacterWrapper>
  )
}
