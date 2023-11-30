import { useState, useContext } from 'react'
import { AppContext } from '../../context/AppContext';

import theme from '../../theme';

import { Link as RouterLink } from "react-router-dom";

// TYPES
import { LinkTypeEnum } from '../../@types/Cards';


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

// ASSETS
import stemGardenLogo from '/sg-logo-transparent-bg.png'

// ICONS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { useTheme } from '@emotion/react';

import { 
  // faLeaf,
  // faPeopleCarry,
  // faCamera,
  faSeedling, 
  faCarrot,
  faPuzzlePiece,
  faSchool,
  // faYinYang,
  // faQuestion,
  // faGuitar,
  // faGamepad,
  // faHourglass,
  faEnvelope,
  // faChalkboardTeacher,
  // faPersonChalkboard, // not free
  // faFlask,
  // faCards,  // not free
  faDice,
  faChessKnight,
  faGraduationCap,
  // faDisplayCode,  // not free
  faLaptopCode,
  faCopy,
  faDivide,
  // faCalculator,
  // faBrain,
  // faHeadSideBrain  PRO
  // faFlask,
  // faScaleBalanced,
 } from '@fortawesome/free-solid-svg-icons'


 const aboutMenu = [
  {
    label: "Our Story",
    icon: faSeedling,
    linkType: LinkTypeEnum.HashLink,
    linkTo: "#our-story",
  },
  {
    label: 'What We Grow',
    icon: faCarrot,
    linkType: LinkTypeEnum.HashLink,
    linkTo: "#what-we-grow",
  },
  // {
  //   label: 'Get Involved',
  //   icon: faPeopleCarry,
  //   linkTo: "get-involved",
  // },
  // {
  //   label: 'Philosophy',
  //   icon: faQuestion,
  //   linkTo: 'philosophy',
  // },
]


export const servicesMenu = [
  {
    label: "Math Tutoring",
    icon: faGraduationCap,
    linkType: LinkTypeEnum.RouterLink,
    linkTo: "services/tutoring",
  },
  {
    label: "Chess Clubs",
    icon: faChessKnight,
    linkType: LinkTypeEnum.RouterLink,
    linkTo: "services/chess-clubs",
  },
  {
    label: 'Test Prep',
    icon: faGraduationCap,
    linkType: LinkTypeEnum.RouterLink,
    linkTo: 'services/test-prep',
  },
  {
    label: "Teacher Training",
    linkType: LinkTypeEnum.RouterLink,
    icon: faSchool,
    linkTo: "services/teacher-training",
  },
  {
    label: "Web Development",
    icon: faLaptopCode,
    linkTo: "services/web-development",
  },
  // {
  //   label: 'STEM Enrichment',
  //   icon: faFlask,
  //   linkTo: '/services/enrichment',
  // },
  {
    label: "Contact Us",
    icon: faEnvelope,
    linkTo: "contact-us",
  },
]


export const resourcesMenu = [
  {
    label: "Math Games",
    icon: faDice,
    // icon: faCards
    linkTo: "resources/math-games",
  },
  {
    label: "Puzzles",
    icon: faPuzzlePiece,
    linkTo: "resources/puzzles",
  },
  {
    label: "Fluency Drills",
    icon: faCopy,  // faHeadSideBrain
    linkTo: "resources/fluency-drills",
  },
  {
    label: "Lesson Plans",
    icon: faCopy,
    linkTo: "resources/lesson-plans",
  },
  {
    label: "Divisibility Playground",
    icon: faDivide,
    linkTo: "resources/divisibility-playground",
  },
]




export default function Navbar() {
    const { navbarStyle } = useContext(AppContext)

    return (
        <Box 
            height="0rem"
            children={ (navbarStyle === 'mobile') ? <MobileNavbar /> : <DesktopNavbar /> } 
        />
    )
}

function Logo(props: {dimensions: number}) {
    const { dimensions } = props
    return (
        <RouterLink to='/' >
            <Box sx={{
                height: dimensions,
                width: dimensions,
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
        <Logo dimensions={navbarHeightPx} />
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
          <MobileMenuList listData={aboutMenu}  />

          <Typography variant='h3' children='Services' />
          <MobileMenuList listData={servicesMenu}  />
          
          <Typography variant='h3' children='Resources' />
          <MobileMenuList listData={resourcesMenu}  />
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
        <Logo dimensions={navbarHeight} />
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
            listData={aboutMenu}
          />
          <DesktopMenuPopover
            name="services"
            listData={servicesMenu}
          />
          <DesktopMenuPopover
            name="resources"
            listData={resourcesMenu}
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
  
  
