import React from 'react'
import { OnlineStatusBadge, UserAvatar } from '../../components'

type OnlineStatusAvatarProps = {
	user: any
	size: number
}

const OnlineStatusAvatar: React.FC<OnlineStatusAvatarProps> = (props) => {
	const { user, size } = props

	return (
		<OnlineStatusBadge>
			<UserAvatar src={user?.avatar?.url} size={size} />
		</OnlineStatusBadge>
	)
}

export default OnlineStatusAvatar
