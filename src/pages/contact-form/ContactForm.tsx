// WARNING 
// This contact form must reflect the settings in ./formspree.json
// Any changes must be deployed by running 'formspree deploy'

import { useState } from 'react'

import { useForm } from '@formspree/react';

import { 
  Box, 
  Container, 
  Grid,
  Stack, 
  Paper,
  Typography, 
  TextField, 
  Button, 
  FormControlLabel, 
  RadioGroup, 
  Radio 
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

// My Components
import { Subtitle, Heading } from "../../components/typography";
import { LeafyBackground } from "../../components/backgrounds";

import bamboo from '../../assets/contact-form/bamboo.jpg'

export default function ContactForm() {
  return (
    <LeafyBackground >
      <Container maxWidth='md' id='landing' >
        <FormWrapperPaper>
          <FormspreeContactForm />
        </FormWrapperPaper>
      </Container>
    </LeafyBackground>
  )
}

function FormspreeContactForm() {
  const [state, handleSubmit] = useForm("contact");

  const [reasonForContacting, setReasonForContacting] = useState("")
  const [name, setName] = useState("")
  const [emailAddress, setEmailAddress] = useState("")
  const [message, setMessage] = useState("")


  const isValidEmail = (emailAddress: string) => {
    return (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(emailAddress))
  }


  if (state.succeeded) {
    return (
      <Stack minHeight="500px" justifyContent='center' >
        <Typography variant="h5" color='black' gutterBottom >
          Your message sent successfully!
        </Typography>
        <Typography variant="h5" color='black' >
          Thanks for reaching out!
        </Typography>
      </Stack>
    )
  }
  else {
    return (
      <Stack>
        <form onSubmit={handleSubmit} >
          <Subtitle text="What can we do for you?" textColor='black' />
          <RadioGroup 
            id="reason-for-contact"
            name="reason-for-contact"
            value={reasonForContacting}
            onChange={(event) => { setReasonForContacting(event.target.value) }}
            aria-labelledby="reason-for-reaching-out-radio-buttons"
          >
            <Grid container sx={{ '& *': {display: 'flex', justifyContent: 'flex-start'} }} >
              <Grid item xs={12} sm={6} >
                <FormControlLabel value="garden" control={<Radio />} label="It's about the Garden" />
              </Grid>
              <Grid item xs={12} sm={6} >
                <FormControlLabel value="tutor" control={<Radio />} label="Math Tutoring" />
              </Grid>
              <Grid item xs={12} sm={6} >
                <FormControlLabel value="web-dev" control={<Radio />} label="Build me a Website" />
              </Grid>
              <Grid item xs={12} sm={6} >
                <FormControlLabel value="other" control={<Radio />} label="Something Else" />
              </Grid>
            </Grid>
          </RadioGroup>

          <Stack id="garden-follow-up-question" display={(reasonForContacting === "garden") ? "flex" : "none"} >
            <Subtitle text="I want to..." textColor='black' />
            <RadioGroup 
              name="garden-follow-up"
              sx={{ width: '100%', justifyContent: 'space-between'}}
              row
              aria-labelledby="garden-follow-up-radio-buttons"
            >
              <FormControlLabel value="buy-produce" control={<Radio  />} label="Buy Produce" />
              <FormControlLabel value="volunteer" control={<Radio  />} label="Volunteer" />
              <FormControlLabel value="plan-a-field-trip" control={<Radio  />} label="Plan a Field Trip" />
            </RadioGroup>
          </Stack>

          <Stack id="tutor-follow-up-question" display={(reasonForContacting === "tutor") ? "flex" : "none"} >
            <Typography children="I need help with..." paddingTop={2}  variant="h4"  align='left'  />
            <RadioGroup 
              name="tutor-follow-up"
              sx={{ width: '100%', justifyContent: 'space-between'}}
              row
              aria-labelledby="tutor-follow-up-radio-buttons"
            >
              <Stack width="40%" >
                <FormControlLabel value="class-work" control={<Radio  />} label="A specific class" />
                <FormControlLabel value="general-math" control={<Radio  />} label="Math in general" />
              </Stack>
              <Stack width="60%" >
                <FormControlLabel value="test-prep" control={<Radio  />} label="Standardized test prep" />
                <FormControlLabel value="stem-enrichment" control={<Radio  />} label="STEM Enrichment" />
              </Stack>
            </RadioGroup>
          </Stack>

          <FormRowWrapper 
            label="Your Name" 
            errorMessage={(message.length > 0 && name.length === 0) ? "What shall I call you?" : ""}
          >
            <TextField
              id="name"
              name="name"
              value={name}
              onChange={(event) => { setName(event.target.value) }}
              fullWidth 
            />
          </FormRowWrapper>
          <FormRowWrapper 
            label="Your Email Address" 
            errorMessage={(message.length > 0 && !isValidEmail(emailAddress)) ? "I need a valid email address so I can reply to your inquiry." : ""}
          >
            <TextField
              id="email"
              name="email"
              value={emailAddress}
              onChange={(event) => { setEmailAddress(event.target.value) }}
              fullWidth 
            />
          </FormRowWrapper>

          <FormRowWrapper label="Message" >
            <TextField
              id="message"
              name="message"
              value={message}
              onChange={(event) => { setMessage(event.target.value) }}
              fullWidth 
              multiline minRows={4} maxRows={4}
            />
          </FormRowWrapper>

          {/* <div className="g-recaptcha" data-sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY} ></div>  */}

          <Button 
            type="submit"
            disabled={state.submitting || !isValidEmail(emailAddress) || name.length === 0 || message.length === 0  }
            children="Send" 
            variant="contained" 
            endIcon={<SendIcon />} 
            sx={{ 
              margin: '1rem 0 0', 
              maxHeight: '2.5rem' 
            }} 

            />
          </form>
        </Stack>
    )
  }
}


function FormWrapperPaper(props: any) {
  const bgURL = `url(${bamboo})`
  return (
    <Paper sx={{
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'stretch',
      width: "100%",
      height: "auto",
      borderRadius: 4,
      overflowX: "hidden"
    }}>
      <Box 
        id="picture-container" 
        width={{ xs: '0', sm: '25%', md: '35%' }}
        position='relative'
      >
        <Box id="picture" 
          width="100%"
          height='100%'
          position='absolute'
          top={0}
          left={0}
          sx={{ 
            backgroundColor: 'primary.main',
            backgroundImage: bgURL,
            backgroundSize: 'cover',
          }}
        />
      </Box>
      <Stack 
        id="form-container"
        children={props.children}
        padding={4}
        width={{ xs: '100%', sm: '75%', md: '65%' }}
      />
    </Paper>
  )
}

function FormRowWrapper(props) {
  let { label, children, errorMessage } = props
  return (
    <Stack 
      id="form_row"
      marginTop={2}
      width="100%"
      display='flex'      
      alignItems='flex-start'
    >
      <Typography children={label}  />
      { children }
      <Typography children={errorMessage} color="error" />
    </Stack>
  )
}