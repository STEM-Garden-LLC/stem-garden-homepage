// Source --> https://www.youtube.com/watch?v=ad9f-EYtWPo&ab_channel=WebDevEducation
import { useContext } from "react";
import "./LightDarkModeToggle.css";

import { Box } from '@mui/material';

import { ColorThemeContext } from '../../context/ColorThemeContext';

// TYPES
import { ColorThemeEnum } from '../../@types/ColorTheme'

export default function LightDarkModeToggle() {
  const { colorTheme, setColorTheme } = useContext(ColorThemeContext)

  const toggleColorTheme = () => { colorTheme === 'dark' ? setColorTheme(ColorThemeEnum.light) : setColorTheme(ColorThemeEnum.dark)}
  
  let toggled = (colorTheme === ColorThemeEnum.dark) ? true : false

  // console.log(`Color Theme: ${(colorTheme === "dark") ? "Dark Theme" : "Light Theme"}`)

  return (
    <Box width='50px' >
      <div onClick={toggleColorTheme} className={`toggle${toggled ? " night" : ""}`}>
        <div className="notch">
          <div className="crater" />
          <div className="crater" />
        </div>
        <div>
          <div className="shape sm" />
          <div className="shape sm" />
          <div className="shape md" />
          <div className="shape lg" />
        </div>
      </div>
    </Box>
  );
}