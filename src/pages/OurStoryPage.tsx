// CUSTOM COMPONENTS
// import TopLandingSection from "./TopLandingSection";
// import OurStorySection from "./OurStorySection";
// import WhatWeGrowSection from "./WhatWeGrowSection";
// import { Footer, ScrollToTopButton } from "../../components/navigation";

export default function OurStoryPage() {
    return (
      <>
        <BackgroundSection bg="leafy" id="top" sectionHeight={sectionHeight}  >
        <Box id="title" 
          display='flex'
          flexDirection='column'
          paddingY={{ xs: '2.0rem', sm: '3.0rem' }} 
        >
          <PageTitle text="Sowing seeds of" />
          <PageTitle text="life-long learning" />
          <PageTitle text="and DIY-spirit" gutterBottom />
          <PageSubtitle text="The STEM Garden is a micro-farm in the heart of New Orleans. We sell organic banana, papaya, fig, turmeric, and more. We also offer tutoring services and free resources for learning math." align="justify" gutterBottom />
  
        </Box>
        <Box 
          id='landing-card-row'
          height={cardRowHeight}
          display='flex' 
          justifyContent='space-evenly'
          alignItems="stretch"
        > 
          <HashLink to="#what-we-grow" smooth  > {/*  ref={ref} */}
            <LandingCard 
              title="What We Grow" 
              imgUrl={banana_papaya_turmeric_flower} 
              cardWidth={cardWidth}
            />
          </HashLink>
          <RouterLink to="services"  >
            <LandingCard 
              title="Teaching Services" 
              shortTitle="Services"
              imgUrl={practicing_math_facts} 
              cardWidth={cardWidth}
            />
          </RouterLink>
          <Box display={ hideThirdCard ? 'none' : 'block' } > 
            <RouterLink to="resources/math-games"  >
              <LandingCard 
                title="Math Games" 
                imgUrl={girls_playing_connect_four} 
                cardWidth={cardWidth}
              />
            </RouterLink>
          </Box>
        </Box>
      </BackgroundSection>
        {/* <OurStorySection /> */}
        {/* <WhatWeGrowSection /> */}
        {/* <ScrollToTopButton /> */}
        <Footer />
      </>
    )
  }