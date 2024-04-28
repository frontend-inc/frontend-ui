import React from 'react'
import { Avatar } from '@mui/material'
import { Icon } from '../..'

type UserAvatarProps = {
	src: string
	size?: number
}

const UserAvatar: React.FC<UserAvatarProps> = (props) => {
	const { src, size = 20 } = props	
	return (
		<Avatar 
      variant="circular" 
      src={src} 
      sx={{ 
        ...sx.avatar,
        height: size + 10,
        width: size + 10
      }}
    >
			<Icon name="User" size={size} color='secondary.contrastText' />
		</Avatar>
	)
}

export default UserAvatar

const sx = {
	avatar: {
		bgcolor: 'secondary.main',
	},
}
