'use client'

import React from 'react'
import AvatarUser from './AvatarUser'

type UserAvatarProps = {
	user: any
	variant?: 'circular' | 'rounded'
	size?: 'sm' | 'md' | 'lg'
	enableGradient?: boolean
	className?: string
}

const UserAvatar: React.FC<UserAvatarProps> = (props) => {
	const { user, size = 'md', className } = props

	return (
		<AvatarUser 
			radius={size}
			isBordered
			title={user?.name}
      subtitle={user?.email}
			size={size}
			image={user?.avatar?.url}
			className={className}
		/>
	)
}

export default UserAvatar
