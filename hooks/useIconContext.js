import {createContext, useContext} from 'react'

export const IconContext = createContext()

export const useIconContext = () => {
  const icons = useContext(IconContext)

  if (!icons) {
    throw new Error('useIconContext must be used within a IconContextProvider')
  }

  return icons
}
