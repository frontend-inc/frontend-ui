import React from 'react'
import { Avatar } from '@mui/material'
import { User } from 'lucide-react'
import { useAuth } from 'frontend-js'
import { useTheme } from '@mui/material/styles'

type AuthAvatarProps = {
	size?: number
}

const AuthAvatar: React.FC<AuthAvatarProps> = (props) => {
	const { size = 20 } = props
	const { currentUser } = useAuth()
	const theme = useTheme()

	return (
		<Avatar variant="circular" src={currentUser?.avatar?.url} sx={sx.avatar}>
			<User size={size} color={theme.palette.text.primary} />
		</Avatar>
	)
}

export default AuthAvatar

const sx = {
	avatar: {
		height: '28px',
		width: '28px',
		bgcolor: 'accent.main',
		color: 'text.primary',
	},
}
