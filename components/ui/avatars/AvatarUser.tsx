'use client'

import React from 'react'
import { User } from '@nextui-org/react'
import { getInitials } from '../../../helpers'

type AvatarUserProps = {
	image?: string
  title?: string
  subtitle?: string
	isBordered?: boolean
	radius?: 'sm' | 'md' | 'lg' | 'full'
	size?: 'sm' | 'md' | 'lg'	
	className?: string
}

const AvatarUser: React.FC<AvatarUserProps> = (props) => {
	const { image, title, subtitle, isBordered, size = 'md', radius, className } = props

	return (
		<User
			avatarProps={{        
				src: image,
				name: getInitials(title),
				alt: title,
				radius,
				isBordered,
        showFallback: true, 
				className: isBordered ? 'mr-1' : '',
				size,
			}}
			name={title}
			description={subtitle}
			className={className}
		/>
	)
}

export default AvatarUser
