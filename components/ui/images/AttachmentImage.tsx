'use client'

import React from 'react'
import { Icon } from '../../../components'
import { Avatar, AvatarFallback } from 'frontend-shadcn'
import { cn } from 'frontend-shadcn'

type AttachmentImageProps = {
	icon?: string
	height: number
	width?: number
	className?: string
}

const AttachmentImage: React.FC<AttachmentImageProps> = ({
	height = 64,
	width = 64,
	icon = 'File',
	className,
}) => {
	return (
		<Avatar
			className={cn('rounded-md', className)}
			style={{
				height: `${height}px`,
				width: `${width}px`,
			}}
		>
			<AvatarFallback className="bg-primary">
				<Icon name={icon} size={24} className="bg-primary-foreground" />
			</AvatarFallback>
		</Avatar>
	)
}

export default AttachmentImage
