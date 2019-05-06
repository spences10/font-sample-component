import React from 'react'
import { useFontsData } from '../hooks/fontsData'

export const Test = ({ fontFamily }) => {
  const items = useFontsData()

  return (
    <>
      {/* {items.map((item, index) => {
        return (
          <div key={index}>
            <p> {item.family} </p>
            <Dump props={item.files} />
          </div>
        )
      })} */}
    </>
  )
}
