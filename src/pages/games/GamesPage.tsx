import { Outlet } from 'react-router-dom'
import { ThemedBackground } from "../../components/backgrounds";
import { Footer } from '@components/index';

export default function GamesPage() {
  
  return (
    <>
      <ThemedBackground >
        <Outlet />
      </ThemedBackground>
      <Footer />
    </>
  )
}
