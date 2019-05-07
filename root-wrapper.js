import React from 'react'
import { Store } from './src/store/useGlobalState'

export const wrapRootElement = ({ element }) => {
  return <Store>{element}</Store>
}
