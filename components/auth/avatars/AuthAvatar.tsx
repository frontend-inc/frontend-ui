import React from 'react'
import { Avatar } from '@mui/material'
import { useAuth } from 'frontend-js'
import { Icon } from '../../../components'

type AuthAvatarProps = {
	size?: number
}

const AuthAvatar: React.FC<AuthAvatarProps> = (props) => {
	const { size = 20 } = props
	const { currentUser } = useAuth()

	return (
		<Avatar variant="circular" src={currentUser?.avatar?.url} sx={sx.avatar}>
			<Icon name='User' size={size} color={'primary.contrastText'} />
		</Avatar>
	)
}

export default AuthAvatar

const sx = {
	avatar: {
		height: '32px',
		width: '32px',
		bgcolor: 'accent.main',
		color: 'text.primary',
	},
}
