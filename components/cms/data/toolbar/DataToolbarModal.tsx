import React from 'react'
import { AppBar, Toolbar, Slide } from '@mui/material'
import { Box, Stack, IconButton } from '@mui/material'
import { Icon } from '../../..'
import DataToolbarButtons from './DataToolbarButtons'
import { ResourceButtonType } from '../../../../types'
import { useResourceContext } from 'frontend-js'

type DataToolbarModalProps = {  
  buttons: ResourceButtonType[]
  component?: React.FC<any>    
}

const DataToolbarModal: React.FC<DataToolbarModalProps> = (props) => {

  const { 
    selected=[],
    selectedIds=[],
    handleClear 
  } = useResourceContext()

  const {         
    buttons=[],    
    component: Component = DataToolbarButtons,
    ...rest  
  } = props || {}

  const open = selected.length > 0
  const handleClose = () => {
    handleClear()
  }

  return(
    <Slide direction="down" in={open}>
      <AppBar position="fixed" color="secondary" sx={ sx.appBar }>
        <Toolbar>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            width="100%"
          >            
            <Box sx={ sx.iconButton}></Box>
            <Component 
              selected={selected}
              selectedIds={selectedIds}  
              buttons={ buttons }            
              { ...rest }            
            />         
            <Box sx={ sx.iconButton}>
              <IconButton 
                onClick={ handleClose }
              >
                <Icon name="X" size={20} />
              </IconButton>
            </Box>   
          </Stack>
        </Toolbar>
      </AppBar>
    </Slide>
  )
}

export default DataToolbarModal

const sx = {
  appBar: {
    m: 0,
    top: '-10px',    
  },
  iconButton: {
    width: '40px',
    height: '40px',        
  }
}
