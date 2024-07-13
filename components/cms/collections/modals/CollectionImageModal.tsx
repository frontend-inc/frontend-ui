import React from 'react'
import { Image, MediaModal } from '../../../../components'
import { useCollection } from 'frontend-js'

export type CollectionImageModalProps = {
	open: boolean
	handleClose: () => void
  enableGradient?: boolean
}

const CollectionImageModal: React.FC<CollectionImageModalProps> = (props) => {
	const { resource, url } = useCollection()

	const {
		open,
		handleClose,
    enableGradient
	} = props || {}

	if (!resource) return null
	return (
    <MediaModal
      open={open}
      handleClose={handleClose}
    >
      <Image  
        src={ resource?.image?.url }
        height={800}
        enableGradient={enableGradient}
        disableBorderRadius
      />      
    </MediaModal>
	)
}

export default CollectionImageModal

const sx = {
	root: {
    zIndex: 9999,
	},
	closeButton: {
		position: 'absolute',
		top: 10,
		right: 10,
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
