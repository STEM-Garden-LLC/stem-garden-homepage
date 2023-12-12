import { useState, createContext } from "react";

// Custom Hooks
import { useScreenWidth, useScreenHeight, useColorTheme } from "../hooks"

export const AppContext = createContext({
    colorTheme: "dark",
    setColorTheme: null,

    
    narrowScreen: true,
    navbarStyle: "desktop",
    navbarHeightPx: 96,

    availableHeight: 900,
    screenWidth: 900,
    containerWidth: 900,

});

export const AppContextProvider = (props: any) => {
  // COLOR THEME
  const browserDefaultColorTheme = useColorTheme()
  const [colorTheme, setColorTheme] = useState(browserDefaultColorTheme)
  // const [colorTheme, setColorTheme] = useState('dark')
  

  // SCREEN LAYOUT
  let screenHeight = useScreenHeight()
  let screenWidth = useScreenWidth()
  let narrowScreen = screenWidth < 900


  // NAVBAR CUSTOMIZATIONS
  let navbarStyle = narrowScreen ? 'mobile' : 'desktop'
  let navbarHeightPx = navbarStyle === 'mobile' ? 48 : 96

  let availableHeight = screenHeight - navbarHeightPx
  let containerWidth = (screenWidth < 900) ? screenWidth : 900
  
  const layoutAndColorContext = {
    screenWidth,
    containerWidth,
    screenHeight,
    availableHeight,
    narrowScreen,
    
    colorTheme,
    setColorTheme,

    navbarStyle,
    navbarHeightPx,
    
  }

  // console.log(`ROOT PAGE LAYOUT CONTEXT: ${JSON.stringify(layout, null, 4)}`);
  
  return (
    <AppContext.Provider 
      value={layoutAndColorContext} 
      children={props.children}
    />
  )
};