import React from 'react'
import { Box } from '@mui/material'
import {
  Comments,
  Modal,
} from '../..'

export type CommentsModalProps =  {
  open: boolean  
  handleClose: () => void
  url: string
  resource: any 
}

const CommentsModal: React.FC<CommentsModalProps> = (props) => {

	const {
    open,
    handleClose,
		resource,
    url,
	} = props || {}

	if (!resource) return null
	return (
    <Modal 
      title={resource?.title}
      disablePadding
      open={open}
      handleClose={ handleClose }
      maxWidth="md"
    >
      <Box px={3} pb={2}>
        <Comments 
          url={url}
          handle={resource?.handle}
        />
      </Box>
    </Modal>
	)
}

export default CommentsModal

const sx = {
	root: {
		width: '100%',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
    overflow: 'hidden',
    position: 'relative',
	},
	container: {
		width: '100%',
		justifyContent: 'flex-start',
		alignItems: {
			md: 'flex-start',
			xs: 'center',
		},
	},
	header: {
		width: '100%',
		textAlign: 'center',
	},
  leftPanel: {
		width: '100%',
    overflowY: 'hidden',
	},
	rightPanel: {
    p: 2,
		width: '100%',
    overflowY: 'scroll',
    '&::-webkit-scrollbar': {
      display: 'none',
    }
	},
  innerContent: {
    pr: 2,
  },
	actions: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
	},
	imageContainer: {
		transition: 'all 0.5s ease-in-out',
		borderRadius: 1,
		width: '100%',
		minWidth: {
			sm: 420,
			xs: '100%',
		},
	},
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    bgcolor: 'rgb(0,0,0,0.5)',
  },
}
