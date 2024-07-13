import React from 'react'
import { Backdrop, Box, IconButton } from '@mui/material'
import { MediaModal, Icon } from '../../..'
import { useCollection } from 'frontend-js'

export type CollectionVideoModalProps = {
	open: boolean
	handleClose: () => void
}

const CollectionVideoModal: React.FC<CollectionVideoModalProps> = (props) => {
	const { resource, url } = useCollection()

	const {
		open,
		handleClose,
	} = props || {}

	if (!resource) return null
	return (
    <MediaModal
      open={open}
      handleClose={handleClose}
    >
      <video 
        src={resource?.video?.url} 
        controls 
        height={600} 
        width='100%'
      />
    </MediaModal>
	)
}

export default CollectionVideoModal
