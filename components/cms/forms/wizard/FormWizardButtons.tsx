import React from 'react'
import { Button, Stack } from '@mui/material'
import { Icon, ButtonLoader } from '../../../../components'

type WizardButtonsProps = {
  currentStep: number
  totalSteps: number
  loading: boolean
  buttonText: string
  handleNextStep: () => void
  handlePrevStep: () => void
  handleSubmit: () => void
}

const FormWizardButtons: React.FC<WizardButtonsProps> = (props) => {

  const {     
    buttonText,
    currentStep, 
    totalSteps, 
    handleNextStep, 
    handlePrevStep, 
    handleSubmit
  } = props

  if(currentStep == 0) return;
  return(
    <Stack direction="row" spacing={1} sx={ sx.actions }>
      <Button            
        variant="contained"
        color="secondary"
        onClick={handlePrevStep}
        disabled={currentStep == 0 }
        startIcon={
          <Icon name="ChevronLeft" color="secondary.contrastText" size={20} />
        }
      >
        Prev
      </Button>
      { currentStep != totalSteps ? (
        <Button            
          variant="contained"
          onClick={handleNextStep}
          disabled={currentStep == totalSteps }
          endIcon={
            <Icon name="ChevronRight" color="primary.contrastText" size={20} />
          }
        >
          Next 
        </Button>
      ):(
        <Button            
          variant="contained"
          onClick={handleSubmit}
          disabled={currentStep != totalSteps }          
        >
          { buttonText }
        </Button>      
      )}
    </Stack>
  )
}

export default FormWizardButtons

const sx = {
  actions: {
    width: '100%',
    justifyContent: 'flex-end',
    py: 4
  },
}