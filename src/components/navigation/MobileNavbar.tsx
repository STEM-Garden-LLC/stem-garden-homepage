import { useState, useContext } from 'react'
import { AppContext } from '../../context/AppContext';

import theme from '../../theme';

// ROUTER LINKS
import { Link as RouterLink } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';



// COMPONENTS
import { Subtitle, Heading } from '../typography';
import { Logo, NavMenuItem } from './ResponsiveNavbar'


// MUI
import { 
    AppBar,
    Box, 
    IconButton,
    Drawer,
    Typography,
    List,
    ListItem,
    ListItemText,
    Menu, 
    Button
} from "@mui/material"

// MENU STRUCTURE
import { aboutMenu, servicesMenu, resourcesMenu, navigationMenuData as navData} from './navbarData'

// ASSETS
import stemGardenLogo from '/sg-logo-transparent-bg.png'

// ICONS
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import { IconDefinition, IconLookup, faBars } from '@fortawesome/free-solid-svg-icons'
import { useTheme } from '@emotion/react';


// TYPES
import { TextColorEnum } from '../../@types/TypographyProps';
import { NavigationSectionProps, ListItemStyleEnum } from './ResponsiveNavbar'


  
////////////////////////
//   MOBILE Version   //
////////////////////////

export function MobileNavbar() {
  const navbarHeightPx = 48

  return (
    <AppBar
      elevation={4}
      sx={{
        height: navbarHeightPx,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: "primary.main", 
        color: "white",
      }}
    >
      <Logo dimensions={navbarHeightPx} />
      <MobileCompanyName />
      <MobileMenu />
    </AppBar>
  );
}

function MobileCompanyName() {
  return (
    <Box 
      sx={{ 
        paddingTop: 2,
        textAlign: 'left',
        fontSize: '2rem',
        fontFamily: 'Special Elite',
        lineHeight: '1.2',
      }}
    >
      STEM Garden
    </Box>
  )
}

function MobileMenu() {
  const [open, setOpen] = useState(false)

  const sections = navData.sections

  const toggleDrawer = (event: any) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
    }
    setOpen((prev) => !prev)
  };
  
  return (
    <>
      <IconButton 
        onClick={() => setOpen(true)}
        aria-controls="simple-menu"
        aria-haspopup="true"
      >
        <FontAwesomeIcon
          icon={faBars} 
          color='white'
        />
      </IconButton>   
      <Drawer 
        open={open} 
        anchor='right' 
        role="navigation"
        onClick={toggleDrawer}
        onKeyDown={toggleDrawer}
      >
        <Box
          width='280px'
          height='100%'
          p={2}
          color={TextColorEnum.white}
          bgcolor={TextColorEnum.green}
        >
          {sections.map((section, index) => {
            return (
              <MobileMenuSection 
                key={index}
                sectionName={section.name} 
                items={section.items} 
              />
            )
          })}
          
        </Box>
      </Drawer>
    </>
  );
}

function MobileMenuSection(props: NavigationSectionProps) {
    const { sectionName, items } = props

    return (
      <>
        <Subtitle text={sectionName} />
        <List >
          {items.map((item, index) => {
            return (
              <NavMenuItem
                key={index}
                label={item.label}
                icon={item.icon}
                linkType={item.linkType}
                linkTo={item.linkTo}
                style={ListItemStyleEnum.mobile}
              />
            )})}
        </List>
      </>

      
  )
}  
