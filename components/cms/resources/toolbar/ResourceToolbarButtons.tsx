import React from 'react'
import { Stack, Button } from '@mui/material'
import ResourceButton from './ResourceButton'
import { MultiselectButtonType } from '../../../../types'

type ResourceToolbarButtonsProps = {
  selected: any[]
  selectedIds: number[] | string[]
  buttons: MultiselectButtonType[]  
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
      { buttons?.map((button, index) => (
        <ResourceButton
          key={ index }
          button={ button }
          selected={ selected }
        />
      ))}      
    </Stack>
  )
}

export default ResourceToolbarButtons