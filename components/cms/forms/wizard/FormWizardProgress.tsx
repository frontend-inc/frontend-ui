import React from "react"
import {
  Box,
  LinearProgress
} from '@mui/material'
import { Label } from '../../../../components'

type FormWizardProgressProps = {
  currentStep: number
  totalSteps: number
}

const FormWizardProgress: React.FC<FormWizardProgressProps> = (props) => {  

  const { currentStep, totalSteps } = props

  return(
    <>
      <LinearProgress 
        sx={ sx.linearProgress }
        variant="determinate"
        value={ (currentStep / totalSteps) * 100 }
      />     
      <Box sx={ sx.label }>
        <Label 
          label={`Step ${currentStep} of ${totalSteps}`} 
        />
      </Box> 
    </>   
  )
}

export default FormWizardProgress 

const sx = {
  linearProgress: {
    width: '100%',
    height: '10px'
  },
  label: {
    m: 2
  }
}