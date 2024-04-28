import React from 'react'
import Avatar from './Avatar'

type UserAvatarProps = {
	user: any
	size?: number
}

const UserAvatar: React.FC<UserAvatarProps> = (props) => {
	const { user, size = 24 } = props
	return (
    <Avatar size={size} src={ user?.avatar?.url } />		
	)
}

export default UserAvatar
