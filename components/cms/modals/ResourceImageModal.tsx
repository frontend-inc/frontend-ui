'use client'

import React from 'react'
import { ImageModal } from '../..'

export type ImageModalProps = {
	open: boolean
	handleClose: () => void
	resource: any
	enableGradient?: boolean
}

const CmsImageModal: React.FC<ImageModalProps> = (props) => {
	const { open, handleClose, resource, enableGradient } = props || {}

  if(!resource?.image?.url) return null
	return (
    <ImageModal 
      open={open}
      handleClose={handleClose}
      src={resource?.image?.url}
      title={resource?.title}
      enableGradient={enableGradient}
    />		
	)
}

export default CmsImageModal
