import { Outlet } from 'react-router-dom'

import { ThemedBackground } from '@/components/backgrounds';


export default function GamesPage() {
  return (
    <>
      <ThemedBackground>
        <Outlet />
      </ThemedBackground>
    </>
  )
}
