import { useState, createContext } from "react";

// Custom Hooks
import { useColorTheme } from "../hooks"

import { ColorThemeEnum, ColorThemeContextType } from '../@types/ColorTheme'
 
const initialColorThemeContext = {
  colorTheme: ColorThemeEnum.dark,
  setColorTheme: () => {},
}

export const ColorThemeContext = createContext<ColorThemeContextType>(initialColorThemeContext)

export const ColorThemeContextProvider = (props: any) => {
  const browserDefaultColorTheme = useColorTheme()
  const [colorTheme, setColorTheme] = useState(browserDefaultColorTheme)
  
  const colorThemeContext = {
    colorTheme,
    setColorTheme
  }

  return (
    <ColorThemeContext.Provider 
      value={colorThemeContext} 
      children={props.children}
    />
  )
};