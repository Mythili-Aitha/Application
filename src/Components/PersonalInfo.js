import { Box, Button, TextField } from '@mui/material'
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import React, { useState } from 'react'

export default function PersonalInfo({user}) {
    
   
  return (
    <>
    <Box sx={{display:"flex", flexDirection:"column", gap:1}}>
        <TextField id = "fullName" label="Full Name" onChange={user}/>
        <TextField id = "email" label="Email" onChange={user}/>
        <TextField id = "phone" label="Phone" onChange={user}/>
        <TextField id = "linkedIn" label="LinkedIn" onChange={user}/>
        <Button variant="contained" tabIndex={-1} startIcon={<CloudUploadIcon />}>Import Resume</Button>
    </Box>
    </>
  )
}
