import React, { useState } from 'react'
import { useFontsData } from '../hooks/fontsData'
import { SelectFont } from './selectFont'

export const FontOptions = () => {
  const items = useFontsData()

  const options = items.map((d, i) => ({
    value: i,
    label: d.family,
  }))

  const [font, setFont] = useState(options[0].value)
  return (
    <>
      <SelectFont
        value={font}
        options={options}
        onChange={setFont}
        placeholder="Select one..."
      />
    </>
  )
}
