import { useState, useContext } from 'react'
import { AppContext } from '../../context/AppContext';

import theme from '../../theme';

import { Link as RouterLink } from "react-router-dom";


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

// ASSETS & LOCAL DATA
import stemGardenLogo from '/sg-logo-transparent-bg.png'
import { aboutListData, servicesListData, resourcesListData } from './navigationListData';

// ICONS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { useTheme } from '@emotion/react';




export default function Navbar() {
    const { navbarStyle } = useContext(AppContext)

    return (
        <Box 
            height="0rem"
            children={ (navbarStyle === 'mobile') ? <MobileNavbar /> : <DesktopNavbar /> } 
        />
    )
}

function Logo(props: {dimentions: number}) {
    const { dimentions } = props
    return (
        <RouterLink to='/' >
            <Box sx={{
                height: dimentions,
                width: dimentions,
                backgroundImage: `url(${stemGardenLogo})`,
                backgroundPosition: 'left bottom',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'auto 95%',
            }}/>
        </RouterLink>
    );
}
  

// MOBILE Version

function MobileNavbar() {
//   const { navbarHeightPx } = useContext(AppContext)
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
      <Box display='flex' 
        justifyContent='space-between' 
        alignItems='center' 
        width="100%" 
      >
        <Logo dimentions={navbarHeightPx} />
        <Box 
            sx={{ 
                paddingTop: 2,
                textAlign: 'left',
                fontSize: '2rem',
                fontFamily: 'Special Elite',
                lineHeight: '1.2',
            }
        }>
            STEM Garden
        </Box>
        <MobileMenu />
      </Box>
    </AppBar>
  );
}


function MobileMenu() {
  const theme = useTheme()
  const [open, setOpen] = useState(false)

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
          color={theme.palette.white}
          bgcolor={theme.palette.primary.main}
        >
          <Typography variant='h3' children='About' />
          <MobileMenuList listData={aboutListData}  />

          <Typography variant='h3' children='Services' />
          <MobileMenuList listData={servicesListData}  />
          
          <Typography variant='h3' children='Resources' />
          <MobileMenuList listData={resourcesListData}  />
        </Box>
      </Drawer>
    </>
    );
}

function MobileMenuList(props) {
    const { listData, handleClose } = props
      
    return (
      <List >
        {listData.map((item, index) => {
          const { label, linkTo, icon } = item
          return (
            <ListItem
              key={index}
              button
              onClick={handleClose}
              component={RouterLink}
              to={linkTo}
            >
              <Box  width={24} pr={2} display='flex' justifyContent='center' >
                <FontAwesomeIcon
                  icon={icon} 
                  color='white'
                  size='lg'
                />
              </Box>
              <ListItemText
                primary={label}
                primaryTypographyProps={{ 
                  variant: 'h5',
                  paddingLeft: 1 
                }}
              />
            </ListItem>
          )
        })}
      </List>
    )
  }

// DESKTOP VERSION

function DesktopNavbar() {
  const navbarHeight = 96
  //   const { navbarHeight } = useContext(AppContext)

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
        <Logo dimentions={navbarHeight} />
        <Box sx={{ 
            paddingTop: 2,
            textAlign: 'left',
            fontSize: '2rem',
            fontFamily: 'Special Elite',
            lineHeight: '1.2',
        }}>
            STEM<br />Garden
        </Box>
        <DesktopMenus />
      </Box>
    </AppBar>
  );
}

function DesktopMenus() {
 
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
          <DesktopMenuPopover
            name="about"
            listData={aboutListData}
          />
          <DesktopMenuPopover
            name="services"
            listData={servicesListData}
          />
          <DesktopMenuPopover
            name="resources"
            listData={resourcesListData}
          />
          {/* <ContactPageLink />  */}
        </Box>
    )
}

function DesktopMenuPopover(props) {
    let { name, listData } = props
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const id = open ? `${name} popover` : undefined;
  
    const capitalize = (string) => {
      return  string[0].toUpperCase() + string.slice(1).toLowerCase()
    }
    const handleClick = (event) => {
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
            <Typography variant="h5" children={capitalize(name)} />
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
              pb: 1,
              boxSizing: 'border-box',
              borderRadius: 1,
              border: 'solid white 1px',
            } 
          }}
        >
          {
            listData.map((item, index) => {
              const { label, linkTo, icon } = item
              return (
                <ListItem
                  key={index}
                  button
                  onClick={handleClose}
                //   component={RouterLink}
                  to={linkTo}
                >
                  <Box  width={24} pr={2} display='flex' justifyContent='center' >
                    <FontAwesomeIcon
                      icon={icon} 
                      color='white'
                      size='lg'
                    />
                  </Box>
                  <ListItemText
                    primary={label}
                    primaryTypographyProps={{ 
                      variant: 'h5',
                      paddingLeft: 1 
                    }}
                  />
                </ListItem>
              )
            })
          }
        </Menu>
      </>
    )
  }
  
  
