import { lazy, Suspense  } from 'react'
import { Routes, Route } from "react-router-dom"

import { ThreeCircles } from 'react-loader-spinner';


// PAGES
import LandingPage from '../pages/landing-page/LandingPage'

const ContactPage = lazy(() => import('../pages/contact-form/ContactForm'))


// ABOUT
const OurStoryPage = lazy(() => import('../pages/OurStoryPage'))
// const WhatWeGrowPage = lazy(() => import('./pages/WhatWeGrowPage'))
// const GetInvolvedPage = lazy(() => import('./pages/GetInvolvedPage'))

// // SERVICES
const TutoringPage = lazy(() => import('../pages/services/TutoringPage'))
const ChessPage = lazy(() => import('../pages/services/ChessPage'))
const TestPrepPage = lazy(() => import('../pages/services/TestPrepPage'))
// const TeacherTrainingPage = lazy(() => import('./pages/services/TeacherTrainingPage'))
// const WebDevelopmentPage = lazy(() => import('./pages/services/WebDevelopmentPage'))

// // RESOURCES
const ResourcesIndexPage = lazy(() => import('../pages/resources/ResourcesIndexPage'))
const PuzzlesPage = lazy(() => import('../pages/resources/PuzzlesPage'))
const FluencyDrills = lazy(() => import('../pages/resources/FluencyDrillsPage'))
const LessonPlansPage = lazy(() => import('../pages/resources/LessonPlansPage'))
const DivisibilityPlaygroundPage = lazy(() => import('../pages/resources/DivisibilityPlayground'))


// // Math Games
const GamesIndexPage = lazy(() => import('../pages/games/GamesIndexPage'))
const ConnectFourRoot = lazy(() => import('../pages/games/connect-four'))
const FifteenGameRoutes = lazy(() => import('../pages/games/magic-square-games/fifteen-game/FifteenGameRoutes'))
const TicTacToeRoutes = lazy(() => import('../pages/games/magic-square-games/tic-tac-toe/TicTacToeRoutes'))

const renderLoader = () => <ThreeCircles />


export default function MainRouter() {
  return (
    <Suspense fallback={renderLoader()}>
      <Routes>
        <Route path="/" element={<LandingPage />} />

        <Route path="our-story" element={<OurStoryPage />} />
        <Route path="contact" element={<ContactPage />} />

        {/*  SERVICES  */}

        {/* <Route path="services"  > */}
          {/* <Route index element={<ServicesIndexPage />} /> */}
          <Route path="tutoring" element={<TutoringPage />} />   
          <Route path="chess" element={<ChessPage />} />
          <Route path="test-prep" element={<TestPrepPage />} />
          {/* <Route path="teacher-training" element={<TeacherTrainingPage />} /> */}
          {/* <Route path="web-development" element={<WebDevelopmentPage />} /> */}
        {/* </Route> */}
        
        {/*  RESOURCES  */}

        <Route path="resources" element={<ResourcesIndexPage />} >
          <Route path="puzzles" element={<PuzzlesPage />} />
          <Route path="fluency-drills"  element={<FluencyDrills />} />
          <Route path="lesson-plans"  element={<LessonPlansPage />} />
          <Route path="divisibility-playground"  element={<DivisibilityPlaygroundPage />} />
        </Route>

        {/*  GAMES  */}

        <Route path="games"  >
          <Route index element={<GamesIndexPage />} />
          <Route path="connect-four" element={<ConnectFourRoot />} />
          <Route path="tic-tac-toe/*" element={<TicTacToeRoutes />} />
          <Route path="the-15-game/*" element={<FifteenGameRoutes />} />
        </Route>


          {/* <Route path="people" element={<People />} >
          <Route path="nigel" element={<Nigel />} />  
          <Route path="join" element={<Join />} /> */}
      </Routes>
    </Suspense>
  );
}