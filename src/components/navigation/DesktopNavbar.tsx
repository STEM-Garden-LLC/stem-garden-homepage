import { useState } from 'react'

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
    Typography,
    Menu, 
    Button
} from "@mui/material"

// MENU STRUCTURE
import { navigationMenuData as navData } from '../../data/navbarData'

// ASSETS
import stemGardenLogo from '/sg-logo-transparent-bg.png'

// ICONS
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import { IconDefinition, IconLookup, faBars } from '@fortawesome/free-solid-svg-icons'
import { useTheme } from '@emotion/react';


// TYPES
import { TextColorEnum } from '../../@types/TypographyProps';
import { LinkTypeEnum } from '../../@types/Cards';
import { NavigationSectionProps, ListItemStyleEnum } from './ResponsiveNavbar'




/////////////////////////
//   DESKTOP Version   //
/////////////////////////

export function DesktopNavbar() {
  const navbarHeight = 96

  return (
    <AppBar
      position="fixed"
      elevation={3}
      sx={{ 
        height: navbarHeight,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
      }}
    >
      <Box 
        width={theme.breakpoints.values.md}
        display='flex'
        flexDirection='row'
        justifyContent='space-between'
      >
        <Logo dimensions={navbarHeight} />
        <DesktopCompanyName />
        <DesktopMenus />
      </Box>
    </AppBar>
  );
}

function DesktopCompanyName() {
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
      STEM<br />Garden
    </Box>
  )
}

function DesktopMenus() {
  const menus = navData.sections
 
  return (
    <Box 
      flexGrow='1' 
      pl={8}
      pr={0}
      display='flex'
      flexDirection='row'
      justifyContent='right'
      alignItems='flex-end'
    >
      {menus.map((section, index) => {
            return (
              <DesktopMenuPopover 
                key={index}
                sectionName={section.name} 
                items={section.items} 
              />
            )
          })}
      {/* <DesktopMenuPopover
        sectionName={aboutMenu.sectionName}
        items={aboutMenu.items}
      />
      <DesktopMenuPopover
        sectionName={servicesMenu.sectionName}
        items={servicesMenu.items}
      />
      <DesktopMenuPopover
        sectionName={resourcesMenu.sectionName}
        items={resourcesMenu.items}
      /> */}
    </Box>
  )
}

function DesktopMenuPopover(props: NavigationSectionProps) {
    let { sectionName, items } = props
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const id = open ? `${name} popover` : undefined;
  
    const capitalize = (string: string) => {
      return  string[0].toUpperCase() + string.slice(1).toLowerCase()
    }
    const handleClick = (event: any) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    return (
      <>
        <Button
          onClick={handleClick}
          variant="text"
          sx={{
            paddingLeft: 8,
            paddingBottom: '0.5rem',
            color: "white",
            textTransform: "none",
            textAlign: 'center',
          }}
          aria-controls={open ? 'menu-list-grow' : undefined}
          aria-haspopup="true"
          aria-describedby={id}  
        >
            <Typography variant="h5" children={capitalize(sectionName)} />
        </Button>
        
        <Menu
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
          MenuListProps={{
            autoFocusItem: open, 
            sx: { 
              backgroundColor: "primary.main",
              color: 'common.white',
              py: 1,
              px:2,
              boxSizing: 'border-box',
              borderRadius: 1,
              border: 'solid white 1px',
            } 
          }}
        >
          {
            items.map((item, index) => {
              const { label, icon, linkType, linkTo } = item
              return (
                <NavMenuItem 
                  key={index}
                  label={label}
                  icon={icon}
                  linkType={linkType}
                  linkTo={linkTo}
                  style={ListItemStyleEnum.desktop}
                />
              )
            })
          }
        </Menu>
      </>
    )
  }
  
  