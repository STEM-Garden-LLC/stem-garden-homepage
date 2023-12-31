import { useContext } from 'react'
import { AppContext } from '../../context/AppContext';
import { ColorThemeContext } from '../../context/ColorThemeContext';

// ROUTER LINKS
import { Link as RouterLink } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

// COMPONENTS
import { ButtonLabel } from '../typography';
import { MobileNavbar } from './MobileNavbar';
import { DesktopNavbar } from './DesktopNavbar'

// MUI
import { Box } from "@mui/material"

// ASSETS
import stemGardenLogo from '/sg-logo-transparent-bg.png'

// ICONS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons'

// TYPES
import { LinkTypeEnum } from '../../@types/Links';
import { ColorThemeEnum } from '../../@types/ColorTheme';
import { ColorsEnum } from '../../@types/Colors';
import { FontWeightEnum } from '../../@types/TypographyProps';

export type NavigationSectionProps = {
  sectionName: string;
  // items: NavigationListItemProps[];
}

export enum ListItemStyleEnum {
  mobile = 'mobile',
  desktop = 'desktop'
}

export type NavigationListItemProps = {
  label: string;
  icon: IconDefinition;
  linkType?: LinkTypeEnum;
  linkTo: string;
  style?: ListItemStyleEnum;
  textColor?: ColorsEnum;
}

export default function Navbar() {
    const { navbarStyle } = useContext(AppContext)

    return (
        <Box 
          height="0rem"
          children={ (navbarStyle === 'mobile') ? <MobileNavbar /> : <DesktopNavbar /> } 
        />
    )
}

//////////////////////////////////////////////////////
//   Parts Used by Both Mobile & Desktop Versions   //
//////////////////////////////////////////////////////

export function Logo(props: {dimensions: number}) {
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

export function NavMenuItem(props: NavigationListItemProps) {
  const { label, icon, textColor, style, linkType, linkTo } = props
  const { colorTheme } = useContext(ColorThemeContext)


  const paddingY = style === ListItemStyleEnum.mobile ? 1 : '6px'
  const paddingX = style === ListItemStyleEnum.mobile ? 1 : 0

  const color = textColor ? textColor : (colorTheme === ColorThemeEnum.dark) ? ColorsEnum.white : ColorsEnum.black

  const contents = (
    <Box display='flex' alignItems='center' >
      <Box width={24} paddingRight={2} display='flex' justifyContent='center' >
        <FontAwesomeIcon
          icon={icon} 
          color='white'
          size='lg'
        />
      </Box>
      <ButtonLabel text={label} textColor={color} fontWeight={FontWeightEnum.normal} />
    </Box>
  )

  return (
    <Box display='flex' alignItems='center' px={paddingX} py={paddingY} >
      {linkType === 'RouterLink' ? 
        <RouterLink to={linkTo} children={contents} /> : 
        <HashLink smooth to={linkTo} children={contents} /> 
      }
    </Box>
  )
}