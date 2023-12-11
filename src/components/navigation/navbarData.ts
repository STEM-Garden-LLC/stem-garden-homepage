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
  // faCalculator,
  // faBrain,
  // faHeadSideBrain  PRO
  // faFlask,
  // faScaleBalanced,
 } from '@fortawesome/free-solid-svg-icons'

// TYPES
import { LinkTypeEnum } from '../../@types/Links';


export const aboutMenu = {
  sectionName: 'About',
  items: [
    {
      label: "Our Story",
      icon: faSeedling,
      linkType: LinkTypeEnum.HashLink,
      linkTo: "/#our-story",
    },
    {
      label: 'What We Grow',
      icon: faCarrot,
      linkType: LinkTypeEnum.HashLink,
      linkTo: "/#what-we-grow",
    },
    // {
    //   label: 'Get Involved',
    //   icon: faPeopleCarry,
    //   linkTo: "get-involved",
    // },
  ]
 }

export const servicesMenu = {
  sectionName: 'Services',
  items: [
    {
      label: "Math Tutoring",
      icon: faGraduationCap,
      linkTo: "/services/tutoring",
    },
    {
      label: "Chess Clubs",
      icon: faChessKnight,
      linkTo: "/services/chess-clubs",
    },
    {
      label: 'Test Prep',
      icon: faGraduationCap,
      linkTo: '/services/test-prep',
    },
    // {
    //   label: "Teacher Training",
    //   icon: faSchool,
    //   linkTo: "/services/teacher-training",
    // },
    // {
    //   label: "Web Development",
    //   icon: faLaptopCode,
    //   linkTo: "services/web-development",
    // },
  ]
}


export const resourcesMenu = {
  sectionName: 'Resources',
  items: [
    {
      label: "Math Games",
      icon: faDice,
      linkTo: "resources/math-games",
    },
    {
      label: "Puzzles",
      icon: faPuzzlePiece,
      linkTo: "resources/puzzles",
    },
    {
      label: "Printable Resources",
      icon: faCopy,  // faHeadSideBrain
      linkTo: "resources",
    },
    // {
    //   label: "Divisibility Playground",
    //   icon: faDivide,
    //   linkTo: "resources/divisibility-playground",
    // },
  ]
}

// UNIFIED OBJECT

export const navigationMenuData = {
  sections: [
    {
      name: 'About',
      items: [
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
      ]
    },
    {
      name: 'Services',
      items: [
        {
          label: "Math Tutoring",
          icon: faGraduationCap,
          linkTo: "services/tutoring",
        },
        {
          label: "Chess Clubs",
          icon: faChessKnight,
          linkTo: "services/chess-clubs",
        },
        {
          label: 'Test Prep',
          icon: faGraduationCap,
          linkTo: 'services/test-prep',
        },
        {
          label: "Teacher Training",
          icon: faSchool,
          linkTo: "services/teacher-training",
        },
        // {
        //   label: "Web Development",
        //   icon: faLaptopCode,
        //   linkTo: "services/web-development",
        // },
      ]
    },
    {
      name: 'Resources',
      items: [
        {
          label: "Math Games",
          icon: faDice,
          linkTo: "resources/math-games",
        },
        {
          label: "Puzzles",
          icon: faPuzzlePiece,
          linkTo: "resources/puzzles",
        },
        {
          label: "Printable Resources",
          icon: faCopy,  // faHeadSideBrain
          linkTo: "resources",
        },
        // {
        //   label: "Divisibility Playground",
        //   icon: faDivide,
        //   linkTo: "resources/divisibility-playground",
        // },
      ]
    }
  ]
}
