import { createContext } from "react";

// Custom Hooks
import { useScreenWidth, useScreenHeight } from "../hooks"

export const AppContext = createContext({
  narrowScreen: true,
  navbarStyle: "desktop",
  navbarHeightPx: 96,

  availableHeight: 900,
  screenWidth: 900,
  containerWidth: 900,

});

export const AppContextProvider = (props: any) => {
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

    navbarStyle,
    navbarHeightPx,
  }
  
  return (
    <AppContext.Provider 
      value={layoutAndColorContext} 
      children={props.children}
    />
  )
};