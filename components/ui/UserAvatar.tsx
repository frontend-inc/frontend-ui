import React from 'react'
import { Avatar } from '@mui/material'
import { User } from 'lucide-react'
import { useTheme } from '@mui/material'

type UserAvatarProps = {
	src: string
	size?: number
}

const UserAvatar: React.FC<UserAvatarProps> = (props) => {
	const { src, size = 24 } = props
	const theme = useTheme()
	return (
		<Avatar variant="circular" src={src} sx={sx.avatar}>
			<User size={size} color={theme.palette.text.primary} />
		</Avatar>
	)
}

export default UserAvatar

const sx = {
	avatar: {
		bgcolor: 'transparent',
		height: '28px',
		width: '28px',
	},
}
