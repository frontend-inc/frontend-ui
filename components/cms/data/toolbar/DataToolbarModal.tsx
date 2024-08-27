import React from 'react'
import { Paper, Collapse, Box, Stack, IconButton } from '@mui/material'
import { Icon } from '../../..'
import DataToolbarButtons from './DataToolbarButtons'
import { ResourceButtonType } from '../../../../types'
import { useResourceContext } from 'frontend-js'

type DataToolbarModalProps = {  
  children: React.ReactNode
}

const DataToolbarModal: React.FC<DataToolbarModalProps> = (props) => {

  const { 
    selected=[],
    handleClear 
  } = useResourceContext()

  const {         
    children,
  } = props || {}

  const open = selected.length > 0
  const handleClose = () => {
    handleClear()
  }

  return(
    <Collapse in={open}>
      <Paper elevation={0} sx={ sx.root }>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          width="100%"
        >            
          <Box width="100%">
            { children }
          </Box>
          <Box sx={ sx.iconButton}>
            <IconButton 
              onClick={ handleClose }
            >
              <Icon name="X" size={20} />
            </IconButton>
          </Box>   
        </Stack>
      </Paper>
    </Collapse>
  )
}

export default DataToolbarModal

const sx = {
  root: {
    mb: 1,
  },
  appBar: {
    m: 0,
    top: '-10px',    
  },
  iconButton: {
    width: '40px',
    height: '40px',        
  }
}
