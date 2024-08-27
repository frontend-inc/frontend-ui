import React from 'react'
import { Stack } from '@mui/material'
import { useResourceContext } from 'frontend-js'
import { ResourceButtonType, ToolbarButtonType } from '../../../../types'
import DataButton from './DataButton'

type ResourceToolbarButtonsProps = {
  buttons: ResourceButtonType[]  
}

const DataToolbarButtons: React.FC<ResourceToolbarButtonsProps> = (props) => {

  const { selected } = useResourceContext()

  const {     
    buttons,
  } = props || {}  

  return(
    <Stack
      direction="row"
      spacing={1}
    >
      { buttons?.map((button, index) => 
        <DataButton 
          key={ index }
          button={ button }
          selected={ selected }
        />
      )}       
    </Stack>
  )
}

export default DataToolbarButtons