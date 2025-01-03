'use client'

import React from 'react'
import { User as NextUser } from '@nextui-org/react'
import { getInitials } from '../../../helpers'

type UserProps = {
	user: any
	isBordered?: boolean
	radius?: 'sm' | 'md' | 'lg' | 'full'
	size?: 'sm' | 'md' | 'lg'
	enableGradient?: boolean
	className?: string
}

const User: React.FC<UserProps> = (props) => {
	const { isBordered, user, size = 'md', radius, className } = props

	return (
		<NextUser
			avatarProps={{
				src: user?.avatar?.url,
				name: getInitials(user?.name),
				alt: user?.name,
				radius,
				isBordered,
				className: isBordered ? 'mr-1' : '',
				size,
			}}
			name={user?.name}
			description={user?.email}
			className={className}
		/>
	)
}

export default User
