import styled from '@emotion/styled'
import React from 'react'
import { useFontsData } from '../hooks/fontsData'

const Select = styled.select`
  margin: 0.25rem 0rem;
  padding: 0rem 0rem;
  font-family: ${({ theme }) => theme.fontBody};
  border: 1px solid ${props => props.border};
  box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.1);
  background: ${({ theme }) => theme.foreground};
  border-radius: 2px;
`

export const SelectOpt = styled.option`
  font-family: ${({ theme }) => theme.fontBody};
`

export const Test = props => {
  const items = useFontsData()
  return (
    <>
      <Select>
        {items.map((item, index) => {
          return (
            <SelectOpt placeholder="Select font..." key={index}>
              {item.family}
            </SelectOpt>
          )
        })}
      </Select>
    </>
  )
}
