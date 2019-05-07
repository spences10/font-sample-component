import React, { createContext, useState } from 'react'

export const FontsContext = createContext({})

export const Store = ({ children }) => {
  const [state, setState] = useState({})

  return (
    <FontsContext.Provider value={[state, setState]}>
      {children}
    </FontsContext.Provider>
  )
}
