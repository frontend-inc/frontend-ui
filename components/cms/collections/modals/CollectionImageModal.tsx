import React from 'react'
import { Box, IconButton } from '@mui/material'
import { Image, Comments, Icon, Modal, SocialButtons } from '../../../../components'
import { useCollection } from 'frontend-js'

export type CollectionImageModalProps = {
	open: boolean
	handleClose: () => void
	handle?: string
	enableGradient?: boolean
	enableOverlay?: boolean
	enableEdit?: boolean
	enableCreate?: boolean
	enableFavorites?: boolean
	enableLikes?: boolean
	enableSharing?: boolean
	enableUsers?: boolean
	handleEdit?: () => void
	enableComments?: boolean
}

const CollectionImageModal: React.FC<CollectionImageModalProps> = (props) => {
	const { resource, url } = useCollection()

	const {
		open,
		handleClose,
    enableGradient,
    enableOverlay,
		enableComments,
		enableLikes,
		enableFavorites,
		enableSharing,
		enableEdit,
		handleEdit,
	} = props || {}

	if (!resource) return null
	return (
		<Modal 
      disablePadding 
      disableHeader
      open={open} 
      handleClose={handleClose} 
      maxWidth="md"
    >			
      <Box sx={sx.imageContainer}>
        <Image  
          src={ resource?.image?.url }
          height={800}
          enableGradient={enableGradient}
          enableOverlay={enableOverlay}
          disableBorderRadius
        />
      <Box sx={ sx.closeButton }>
        <IconButton 
          sx={ sx.closeButton }
          onClick={handleClose}
        >
          <Icon name="X" color='common.white' />
        </IconButton>
      </Box>
      </Box>
      <Box px={3}>
				{(enableLikes || enableFavorites || enableSharing) && (
					<SocialButtons
						justifyContent="center"
						handle={resource?.handle}
						enableLikes={enableLikes}
						enableFavorites={enableFavorites}
						enableSharing={enableSharing}
					/>
				)}
				{enableComments && <Comments url={url} handle={resource?.handle} />}
			</Box>
		</Modal>
	)
}

export default CollectionImageModal

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
	closeButton: {
		position: 'absolute',
		top: 10,
		right: 10,
		bgcolor: 'rgb(0,0,0,0.5)',
	},
  imageContainer: {
    position: 'relative',
  }	
}
