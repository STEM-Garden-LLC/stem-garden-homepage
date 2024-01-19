import { lazy, Suspense, Fragment  } from 'react'
import { Routes, Route, Outlet } from "react-router-dom"

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
const ResourcesPage = lazy(() => import('../pages/resources/ResourcesPage'))
const ResourcesIndex = lazy(() => import('../pages/resources/ResourcesIndex'))
const PuzzlesPage = lazy(() => import('../pages/resources/PuzzlesPage'))
const FluencyDrillsPage = lazy(() => import('../pages/resources/FluencyDrillsPage'))
const LessonPlansPage = lazy(() => import('../pages/resources/LessonPlansPage'))
const DivisibilityPlaygroundPage = lazy(() => import('../pages/resources/DivisibilityPlayground'))


// Math Games
const GamesPage = lazy(() => import('../pages/games/GamesPage'))
const GamesIndex = lazy(() => import('../pages/games/GamesIndex'))
const ConnectFourGame = lazy(() => import('../pages/games/connect-four'))

// Fifteen Game
const FifteenGamePage = lazy(() => import('@/pages/games/fifteen-game/FifteenGamePage'))
const FifteenGameWelcome = lazy(() => import('../pages/games/fifteen-game/Welcome'))
const FifteenGameVsFriend = lazy(() => import('../pages/games/fifteen-game/PlayVsFriend'))
const FifteenGameVsBot = lazy(() => import('../pages/games/fifteen-game/PlayVsBot'))

const renderLoader = () => <ThreeCircles />


export default function MainRouter() {
  return (
    <Suspense fallback={renderLoader()}>
      <Routes>
        <Route path="/" element={<LandingPage />} />

        <Route path="our-story" element={<OurStoryPage />} />
        <Route path="contact" element={<ContactPage />} />

        {/*  SERVICES  */}
        <Route path="tutoring" element={<TutoringPage />} />   
        <Route path="chess" element={<ChessPage />} />
        <Route path="test-prep" element={<TestPrepPage />} />
        {/* <Route path="teacher-training" element={<TeacherTrainingPage />} /> */}
        {/* <Route path="web-development" element={<WebDevelopmentPage />} /> */}
        
        {/*  RESOURCES  */}
        <Route path="/resources" element={<ResourcesPage />} >
          <Route index element={<ResourcesIndex />} />
          <Route path="/resources/puzzles" element={<PuzzlesPage />} />
          <Route path="/resources/drills"  element={<FluencyDrillsPage />} />
          <Route path="/resources/lessons"  element={<LessonPlansPage />} />
          <Route path="/resources/divisibility-playground"  element={<DivisibilityPlaygroundPage />} />
        </Route>

        {/*  GAMES  */}
        <Route path="/games" element={<GamesPage />} >
          <Route index element={<GamesIndex />} />
          <Route path="/games/connect-four" element={<ConnectFourGame />} />
          <Route path="/games/the-15-game" element={<FifteenGamePage />} >
            <Route index element={<FifteenGameWelcome/>} />
            <Route path="/games/the-15-game/play-vs-friend" element={<FifteenGameVsFriend />} />
            <Route path="/games/the-15-game/play-vs-bot" element={<FifteenGameVsBot />} />
          </Route>
        </Route>


          {/* <Route path="people" element={<People />} >
          <Route path="nigel" element={<Nigel />} />  
          <Route path="join" element={<Join />} /> */}
      </Routes>
    </Suspense>
  );
}