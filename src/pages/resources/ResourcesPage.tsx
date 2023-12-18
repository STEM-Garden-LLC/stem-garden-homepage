// import { Container, Grid } from '@mui/material';

import { Outlet } from 'react-router-dom'
import { ThemedBackground } from "../../components/backgrounds";
import { Footer } from '@components/index';

export default function ResourcesPage() {
  
  return (
    <>
      <ThemedBackground>
        <Outlet />
      </ThemedBackground>
      <Footer />
    </>
  )
}
