'use client'

import React from 'react'
import { User } from '@nextui-org/react'
import { getInitials } from '../../../helpers'

type AvatarUserProps = {
	image?: string
  name?: string
  description?: string
	isBordered?: boolean
	radius?: 'sm' | 'md' | 'lg' | 'full'
	size?: 'sm' | 'md' | 'lg'	
	className?: string
}

const AvatarUser: React.FC<AvatarUserProps> = (props) => {
	const { image, name, description, isBordered, size = 'md', radius, className } = props

	return (
		<User
			avatarProps={{        
				src: image,
				name: getInitials(name),
				alt: name,
				radius,
				isBordered,
				className: isBordered ? 'mr-1' : '',
				size,
			}}
			name={name}
			description={description}
			className={className}
		/>
	)
}

export default AvatarUser
