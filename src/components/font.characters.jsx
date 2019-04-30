import React from "react"
import styled from "@emotion/styled"
import { CharacterTitle } from "./font.title"

const Characters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890¿ ? ¡ ! & @ ‘ ’ “ ” « » % * ^ # $ £ € ¢ / ( ) [ ] { } . , ® ©"

const CharacterWrapper = styled.div`
  font-size: 27px;
  line-height: 1.48;
  color: #333333;
`

const CharacterBlock = styled.div`
  word-break: break-all;
  margin-top: 19px;
`

export const FontCharacters = ({ title, fontWeight }) => {
  return (
    <CharacterWrapper>
      <CharacterTitle fontWeight={fontWeight}>{title}</CharacterTitle>
      <CharacterBlock>{Characters}</CharacterBlock>
    </CharacterWrapper>
  )
}
