// ICONS 

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
  faCalculator,
  // faBrain,
  // faHeadSideBrain  PRO
  // faFlask,
  // faScaleBalanced,
 } from '@fortawesome/free-solid-svg-icons'

// TYPES
import { LinkTypeEnum } from '../@types/Links';


// UNIFIED OBJECT NOT BROKEN BY SECTIONS

const navData = [
  {
    section: 'About',
    label: 'Our Story',
    icon: faSeedling,
    linkType: LinkTypeEnum.HashLink,
    linkTo: '/#our-story',
  },
  {
    section: 'About',
    label: 'What We Grow',
    icon: faCarrot,
    linkType: LinkTypeEnum.HashLink,
    linkTo: '/#what-we-grow',
  },
  {
    section: 'About',
    label: 'Contact Us',
    icon: faEnvelope,
    linkType: LinkTypeEnum.RouterLink,
    linkTo: '/contact',
  },
  // {
  // section: 'About',
  //   label: 'Get Involved',
  //   icon: faPeopleCarry,
  //   linkTo: 'get-involved',
  // },
  {
    section: "Services",
    label: 'Math Tutoring',
    icon:   faCalculator,
    linkTo: '/tutoring',
  },
  {
    section: "Services",
    label: 'Chess Lessons',
    icon: faChessKnight,
    linkTo: '/chess',
  },
  {
    section: "Services",
    label: 'Test Prep',
    icon: faGraduationCap,
    linkTo: '/test-prep',
  },
  // {
  //   section: "Services",
  //   label: 'Teacher Training',
  //   icon: faSchool,
  //   linkTo: '/teacher-training',
  // },
  // {
  //   section: "Services",
  //   label: 'Web Development',
  //   icon: faLaptopCode,
  //   linkTo: '/web-development',
  // },
  {
    section: "Resources",
    label: 'Math Games',
    icon: faDice,
    linkTo: '/games',
  },
  {
    section: "Resources",
    label: 'Puzzles',
    icon: faPuzzlePiece,
    linkTo: 'resources/puzzles',
  },
  {
    section: "Resources",
    label: 'Printable Drills',
    icon: faCopy,  // faHeadSideBrain
    linkTo: 'resources',
  },
  // {
  //   section: "Resources",
  //   label: 'Divisibility Playground',
  //   icon: faDivide,
  //   linkTo: 'resources/divisibility-playground',
  // },

]
  
export default navData
