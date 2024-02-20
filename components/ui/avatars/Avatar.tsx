import React from 'react'
import { Avatar } from '@mui/material'
import { User } from 'lucide-react'

type UserAvatarProps = {
	user: any
	size?: number
}

const UserAvatar: React.FC<UserAvatarProps> = (props) => {
	const { user, size = 32 } = props
	return (
		<Avatar
			src={user?.avatar?.url}
			sx={{
				...sx.avatar,
				height: `${size}px`,
				width: `${size}px`,
			}}
		>
			<User size={size} color="black" />
		</Avatar>
	)
}

export default UserAvatar

const sx = {
	avatar: {
		height: '32px',
		width: '32px',
		bgcolor: 'background.paper',
	},
}
