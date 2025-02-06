import React, { useState } from 'react';
import { Box, Stepper, Step, StepLabel, Button, Card, Typography } from '@mui/material';
import PersonalInfo from './PersonalInfo';
import Preview from './Preview';
import ListEmployee from './ListEmployee';

const steps = ["Personal Information", "Job Applications", "Interview Schedule", "Preview"];

export default function VerticalStepper() {
    const [activeStep, setActiveStep] = useState(0);
    const handleNext = () => setActiveStep((prev) => prev + 1);
    const handleBack = () => setActiveStep((prev) => prev - 1);
    const [pInfo, setPInfo] = useState({fullName:"",
            email:"",
            phone:"",
            linkedIn:""
        })
    const handleChange =(event)=>{
            const {id,value} = event.target
            setPInfo({...pInfo, [id]:value})
            console.log("p",id, value)
        }

    return (
      <Box sx={{ display: "flex", flexDirection: "row", alignItems: "flex-start", gap: 3, padding:2, width: "100%", height: "100vh" }}>
        
        {/* Stepper Card */}
        <Card sx={{ display: "flex", flexDirection: "column", padding: 3}}>
          <Stepper activeStep={activeStep} orientation="vertical">
            {steps.map((label, index) => (
              <Step key={index}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </Card>
        {/* Information Card */}
        <Card sx={{ display: "flex", flexDirection: "column", padding: 3,  minWidth: 300, flexGrow:1 }}>
          <Typography variant='h6' gutterBottom>{steps[activeStep]}</Typography>
          {activeStep === 0 && <PersonalInfo user={handleChange} /> }
          {activeStep === 1 && <ListEmployee />}
          {activeStep === 2 && <Typography>Schedule and manage your interviews.</Typography>}
          {activeStep === 3 && <Preview details={pInfo} />}

        </Card>
        {/* Footer Card */}
        <Card 
          sx={{ 
            display: "flex", 
            flexDirection: "row", 
            justifyContent: "space-between",  
            padding: 3, 
            width: "100%", 
            minWidth: 300, 
            position: "fixed", 
            bottom: 10, 
            left: "50%", 
            transform: "translateX(-50%)" 
          }}
        >
          <Button 
            variant="contained" 
            color="secondary" 
            onClick={handleBack} 
            disabled={activeStep === 0} 
          >
            Back
          </Button>

          {activeStep < steps.length - 1 ? (
            <Button variant="contained" color="primary" onClick={handleNext}>
              Next
            </Button>
          ) : (
            <Button variant="contained" color="success">
              Finish
            </Button>
          )}
        </Card>

      </Box>
    );
}
