import { useState } from 'react'

import theme from '../../theme';

// COMPONENTS
import { ButtonLabel } from '../typography';
import { Logo, NavMenuItem } from './ResponsiveNavbar'

// MUI
import { 
    AppBar,
    Box, 
    Menu, 
    Button
} from "@mui/material"

// MENU STRUCTURE
import { navData } from '../../data/navigationData'

// TYPES
import { ColorsEnum } from '../../@types/Colors';
import { FontWeightEnum } from '../../@types/TypographyProps';
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
  const sections = ['About', 'Services', 'Resources']

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
      {sections.map((section, index) => {
        return (
          <DesktopMenuPopover 
            key={index}
            sectionName={section} 
          />
        )
      })}
    </Box>
  )
}

function DesktopMenuPopover(props: NavigationSectionProps) {
    let { sectionName } = props

    const sectionData = navData.filter(items => sectionName === items.section)
    // console.log(`Section Data: ${JSON.stringify(sectionData, null, 4)}`)
    
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
        <Box paddingLeft={8} >
          <Button
            onClick={handleClick}
            variant="text"
            sx={{
              paddingBottom: '0.5rem',
              color: "white",
              textTransform: "none",
              textAlign: 'center',
            }}
            aria-controls={open ? 'menu-list-grow' : undefined}
            aria-haspopup="true"
            aria-describedby={id}  
          >
                    
            <ButtonLabel 
              text={capitalize(sectionName)} 
              textColor={ColorsEnum.white} 
              fontWeight={FontWeightEnum.bold}
            />
          </Button>
        </Box>
        
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
            sectionData.map((item, index) => {
              const { label, icon, linkType, linkTo } = item
              return (
                <Box 
                  key={index}
                  onClick={() => handleClose()} 
                >
                  <NavMenuItem 
                    label={label}
                    icon={icon}
                    linkType={linkType}
                    linkTo={linkTo}
                    style={ListItemStyleEnum.desktop}
                    textColor={ColorsEnum.white}
                  />
                </Box>
                
              )
            })
          }
        </Menu>
      </>
    )
  }
  
  