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
import { useResourceContext } from 'frontend-js'
import { ActionType, FormFieldType, DisplayFieldType } from '../../../types'

export type ResourceModalProps =  {  
  open: boolean  
  handleClose: () => void
  handle?: string
	enableBorder?: boolean
  enableOverlay?: boolean
	actions: ActionType[]
	displayFields: DisplayFieldType[]
	fields?: FormFieldType[]
	fieldName?: string
	enableEdit?: boolean
	enableCreate?: boolean
	enableFavorites?: boolean
	enableLikes?: boolean
	enableSharing?: boolean
  enableRatings?: boolean
	enableBuyNow?: boolean
  enableUsers?: boolean
	enableStripePaymentLink?: boolean
	handleEdit?: () => void
  enableComments?: boolean
}

const ResourceModal: React.FC<ResourceModalProps> = (props) => {

  const { resource, url } = useResourceContext()

	const {
    open,
    handleClose,
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
          actions={actions}
          displayFields={displayFields}
          enableRatings={enableRatings}
          handleEdit={handleEdit}
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

export default ResourceModal

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

