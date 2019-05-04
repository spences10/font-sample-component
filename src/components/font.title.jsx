import styled from '@emotion/styled'

export const CharacterTitle = styled.p`
  font-size: ${props => props.size || '27px'};
  font-weight: ${props => props.fontWeight || 'normal'};
  font-style: ${props => props.fontStyle || 'normal'};
  text-transform: capitalize;
`
