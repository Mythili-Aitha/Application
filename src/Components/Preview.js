import { Accordion,  AccordionDetails,  Typography } from '@mui/material'
import React from 'react'

export default function Preview({details}) {
    const {email,fullName,phone, linkedIn} = details
    console.log(details)
  return (
    <>
    <Typography>Your application details.</Typography>
    <Accordion>
        <AccordionDetails sx={{display:"flex", flexDirection:"column"}}>Full Name: {fullName}
        </AccordionDetails>
        <AccordionDetails sx={{display:"flex", flexDirection:"column"}}>Full Name: {email},
        </AccordionDetails>
    </Accordion>

    </>
  )
}
