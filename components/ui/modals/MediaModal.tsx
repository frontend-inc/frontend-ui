import React from 'react'
import { Box, Backdrop, IconButton } from '@mui/material'
import { Icon } from '../../../components'

export type CollectionImageModalProps = {
	open: boolean
	handleClose: () => void
  children: React.ReactNode
}

const MediaModal: React.FC<CollectionImageModalProps> = (props) => {

	const {
		open,
		handleClose,
    children 
	} = props || {}

	return (
		<Backdrop 
      open={open} 
      onClick={handleClose} 
      sx={ sx.root }
    >			
      <Box sx={sx.imageContainer}>
        { children  }
      </Box>
      <IconButton 
        sx={ sx.closeButton }
        onClick={handleClose}
      >
        <Icon name="X" color='common.white' />
      </IconButton>
    </Backdrop>
	)
}

export default MediaModal

const sx = {
	root: {
    zIndex: 9999,
	},
	closeButton: {
		position: 'absolute',
		top: 20,
		right: 20,
		bgcolor: 'rgb(0,0,0,0.5)',
	},
  imageContainer: {
    borderRadius: 1,
    overflow: 'hidden',
    maxWidth: 'calc(100vw - 50px)',
    maxHeight: 'calc(100vh - 50px)',
    position: 'relative',    
    zIndex: 999
  }	
}
