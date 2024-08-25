import React from 'react'
import { Stack, Button } from '@mui/material'
import { ResourceButtonType } from '../../../../types'

type ResourceToolbarButtonsProps = {
  selected?: any[]
  selectedIds?: number[] | string[]
  buttons: ResourceButtonType[]  
}

const ResourceToolbarButtons: React.FC<ResourceToolbarButtonsProps> = (props) => {

  const { 
    selected,  
    buttons,
  } = props || {}  

  return(
    <Stack
      direction="row"
      spacing={1}
    >
      { buttons?.map((button, index) => {        
        const { 
          onClick,
          variant = 'contained',
          label = 'Click me',
          color = 'primary',
        } = button || {}
        return (
          <Button 
            key={ index }
            variant={ variant }
            color={ color }
            onClick={
              selected ? () => onClick(selected) : undefined 
            }
          >
            { label }
          </Button>  
        )})}      
    </Stack>
  )
}

export default ResourceToolbarButtons