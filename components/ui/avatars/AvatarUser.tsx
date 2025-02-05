'use client'

import React from 'react'
import { User } from '@nextui-org/react'
import { getInitials } from '../../../helpers'
import { cn } from '@nextui-org/react'

type AvatarUserProps = {
	avatar?: string
	name?: string
	description?: string
	isBordered?: boolean
	radius?: 'sm' | 'md' | 'lg' | 'full'
	size?: 'sm' | 'md' | 'lg'
	className?: string
}

const AvatarUser: React.FC<AvatarUserProps> = (props) => {
	const {
		avatar,
		name,
		description,
		isBordered,
		size = 'md',
		radius,
		className,
	} = props

	return (
		<div className="flex flex-row items-start justify-start">
			<User
				avatarProps={{
					src: avatar,
					name: getInitials(name),
					alt: name,
					radius,
					isBordered,
					className: cn(isBordered && 'mr-1'),
					size,
				}}
				name={name}
				description={description}
				className={cn('items-start justify-start', className)}
			/>
		</div>
	)
}

export default AvatarUser
