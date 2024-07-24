import React from 'react'
import { Backdrop, Box, IconButton } from '@mui/material'
import { MediaModal, Icon } from '../..'
import { useResourceContext } from 'frontend-js'

export type ShowVideoModalProps = {}

const ShowVideoModal: React.FC<ShowVideoModalProps> = (props) => {
	const { openShow, setOpenShow, resource, url } = useResourceContext()

	if (!resource) return null
	return (
    <MediaModal
      open={openShow}
      handleClose={() => setOpenShow(false)}
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
