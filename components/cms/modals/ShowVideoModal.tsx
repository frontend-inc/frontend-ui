import React from 'react'
import { Backdrop, Box, IconButton } from '@mui/material'
import { MediaModal, Icon } from '../..'
import { useList } from 'frontend-js'

export type ShowVideoModalProps = {
	open: boolean
	handleClose: () => void
}

const ShowVideoModal: React.FC<ShowVideoModalProps> = (props) => {
	const { resource, url } = useList()

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

export default ShowVideoModal
