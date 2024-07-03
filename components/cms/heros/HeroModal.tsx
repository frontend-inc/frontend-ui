import React from 'react'
import { 
  Box, 
} from '@mui/material'
import {
  Comments,
  Modal,
	SocialButtons,
  HeroSnippet
} from '../..'
import { HeroProps } from './Hero'

export type HeroModalProps = HeroProps & {
  open: boolean  
  handleClose: () => void
  url: string
  enableComments?: boolean
}

const HeroModal: React.FC<HeroModalProps> = (props) => {

	const {
    open,
    handleClose,
		resource,
    url,
    actions=[],
    displayFields=[],
    enableComments,
    enableRatings,
    enableLikes,
    enableFavorites,
    enableSharing,
    enableEdit,
    handleEdit 
	} = props || {}

  const { image, label, title } = resource || {}

	if (!resource) return null
	return (
    <Modal 
      disablePadding
      open={open}
      handleClose={ handleClose }
      maxWidth="md"
    >
      <Box px={3} pb={2}>
        <HeroSnippet 
          resource={resource}
          enableEdit={enableEdit}
          handleEdit={handleEdit}
          actions={actions}
          displayFields={displayFields}
          enableRatings={enableRatings}
        />         
        {(enableLikes || enableFavorites || enableSharing) && (
          <SocialButtons
            justifyContent="center"
            handle={resource?.handle}
            enableLikes={enableLikes}
            enableFavorites={enableFavorites}
            enableSharing={enableSharing}
          />
        )}  
        { enableComments && (
          <Comments 
            url={url}
            handle={resource?.handle}
          />
        )}
      </Box>
    </Modal>
	)
}

export default HeroModal

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
	},
	imageContainer: {
		borderRadius: 1,
		width: 240,
    minWidth: 240
	},
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    bgcolor: 'rgb(0,0,0,0.5)',
  },
  paper: {
    mb: 2
  }
}

