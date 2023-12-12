// Source --> https://www.youtube.com/watch?v=ad9f-EYtWPo&ab_channel=WebDevEducation
import { useContext } from "react";
import "./LightDarkModeToggle.css";

import { Box } from '@mui/material';

import { AppContext } from '../../context/AppContext';
import { ButtonLabel } from "../typography";

export default function LightDarkModeToggle() {
  const { colorTheme, setColorTheme } = useContext(AppContext)

  const toggleColorTheme = () => { colorTheme === 'dark' ? setColorTheme('light') : setColorTheme('dark')}
  
  let toggled = (colorTheme === "dark") ? true : false
  let label = (colorTheme === "dark") ? "Dark Theme" : "Light Theme"

  return (
    // <Box width='100%' display='flex' flexDirection='row' justifyContent='start' alignItems='center' >
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
      // {/* <ButtonLabel text={label} /> */}
    // </Box>
  );
}