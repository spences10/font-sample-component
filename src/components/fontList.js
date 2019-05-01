import axios from 'axios'
import React, { useState } from 'react'
import { Dump } from './dump'

export const Fonts = () => {
  const [fonts, setFonts] = useState(null)
  const KEY = process.env.FONTS_API_KEY
  console.log('=====================')
  console.log(KEY)
  console.log('=====================')
  axios
    .get(
      `https://www.googleapis.com/webfonts/v1/webfonts?key=${KEY}&sort=popularity`
    )
    .then(res => {
      console.log(res.data)
      setFonts(res.data)
    })
  return (
    <>
      <Dump props={fonts} />
      {fonts}
    </>
  )
}
