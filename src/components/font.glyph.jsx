import styled from 'styled-components'

export const FontGlyph = styled.div`
  font-weight: ${props => props.fontWeight || 'normal'};
  font-size: ${props => props.size || '150px'};
  font-style: ${props => props.fontStyle || 'normal'};
  color: #333333;
`
