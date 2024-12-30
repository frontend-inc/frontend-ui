'use client'

import React from 'react'
import { Avatar } from '@nextui-org/react'
import { getInitials } from '../../../helpers'

type UserAvatarProps = {
	user: any
	variant?: 'circular' | 'rounded'
	size?: number
	enableGradient?: boolean
	className?: string
}

const UserAvatar: React.FC<UserAvatarProps> = (props) => {
	const {
		user,
		size = 36,
		className,
	} = props
  
	return (
		<Avatar
      radius='md'
      isBordered
      showFallback
			name={getInitials(user?.name)}
			size={size}
			src={user?.avatar?.url}
			className={className}
		/>
	)
}

export default UserAvatar
