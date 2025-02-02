'use client'

import React from 'react'
import { cn, User as NextUser } from '@nextui-org/react'
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

  const avatarSizeProps = {
    sm: 'w-6 h-6 text-sm',
    md: 'w-10 h-10 text-base',
    lg: 'w-12 h-12 text-lg',
    xl: 'w-20 h-20 text-xl',
  }

	return (
		<NextUser
			avatarProps={{
				src: user?.avatar?.url,
				name: getInitials(user?.name),
				alt: user?.name,
				radius,
				isBordered,
				className: cn(
          isBordered && 'mr-1',
          avatarSizeProps[size],
        ),
				size,
			}}
			name={user?.name}
			description={user?.email}
			className={className}
		/>
	)
}

export default User
