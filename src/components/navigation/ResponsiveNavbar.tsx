import { useContext } from 'react'
import { AppContext } from '../../context/AppContext';

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
import { FontWeightEnum } from '../../@types/TypographyProps';

export type NavigationSectionProps = {
  sectionName: string;
  items: NavigationListItemProps[];
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
  const { label, icon, style, linkType, linkTo } = props

  const paddingY = style === ListItemStyleEnum.mobile ? 1 : '6px'
  const paddingX = style === ListItemStyleEnum.mobile ? 1 : 0

  const contents = (
    <Box display='flex' alignItems='center' >
      <Box width={24} paddingRight={2} >
        <FontAwesomeIcon
          icon={icon} 
          color='white'
          size='lg'
        />
      </Box>
      <ButtonLabel text={label} fontWeight={FontWeightEnum.normal} />
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