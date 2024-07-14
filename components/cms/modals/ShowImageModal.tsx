import React from 'react'
import { Image, MediaModal } from '../..'
import { useList } from 'frontend-js'
import { Box } from '@mui/material'

export type ShowImageModalProps = {
	open: boolean
	handleClose: () => void
  enableGradient?: boolean
}

const ShowImageModal: React.FC<ShowImageModalProps> = (props) => {
	const { resource } = useList()

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
      <Box sx={ sx.imageContainer }>
        <Image  
          src={ resource?.image?.url }
          height={800}
          enableGradient={enableGradient}          
        />      
      </Box>
    </MediaModal>
	)
}

export default ShowImageModal

const sx = {
  imageContainer: {
    width: "100%",
    minWidth: 'calc(50vw)',
  }
}