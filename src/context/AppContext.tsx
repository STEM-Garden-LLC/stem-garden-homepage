import { useState, createContext } from "react";

// Custom Hooks
import { useScreenWidth, useScreenHeight } from "../hooks"

export const AppContext = createContext({
    navbarStyle: "desktop",

});

export const AppContextProvider = (props: any) => {
  // COLOR THEME
  const [colorTheme, setColorTheme] = useState("dark")


  // SCREEN LAYOUT
  let screenHeight = useScreenHeight()
  let screenWidth = useScreenWidth()
  let narrowScreen = screenWidth < 900


  // NAVBAR CUSTOMIZATIONS
  let navbarStyle = narrowScreen ? 'mobile' : 'desktop'
  let navbarHeightPx = navbarStyle === 'mobile' ? 48 : 96


  // I think the following are only used by Connect Four. They are not yet needed and likely 
  // would be better off in a Context thst only applied to that part of the app. 
  // let availableHeight = screenHeight - navbarHeightPx
  // let availableWidth = (screenWidth < 900) ? screenWidth : 900
  // let maxSquareSideLength = (availableHeight < availableWidth) ? availableHeight : availableWidth
  
  const layoutAndColorContext = {
    // screenWidth,
    // screenHeight,
    // narrowScreen,
    
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