'use client'

import React from 'react'
import { RemixIcon } from '../../../components'
import { Avatar, AvatarFallback } from 'frontend-shadcn'
import { cn } from 'frontend-shadcn'

type AttachmentImageProps = {
	icon?: string
}

const AttachmentImage: React.FC<AttachmentImageProps> = (props) => {

  const {
    icon = 'ri-file-2-fill',
  } = props

	return (
    <Avatar className="rounded-lg">
      <AvatarFallback className="bg-accent rounded-lg">
        <RemixIcon name={ icon } size="lg" className="text-accent-foreground" />
      </AvatarFallback>
    </Avatar>    
	)
}

export default AttachmentImage
