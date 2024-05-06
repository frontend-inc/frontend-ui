import React from 'react'
import { Avatar, Typography } from '@mui/material'
import { Icon } from '../..'

type UserAvatarProps = {
	src: string
  label?: string
	size?: number
  color?: string
}

const UserAvatar: React.FC<UserAvatarProps> = (props) => {
	const { src, color, label, size = 40 } = props
	return (
		<Avatar
			variant="circular"
			src={src}
			sx={{
				...sx.avatar,
				height: size,
				width: size,
        bgcolor: src ? 'common.white' : color
			}}
		>      
      { label ? (
        <Typography variant="button" color="background.default">RB</Typography>			
      ): (
        <Icon name="User" color="secondary.contrastText" />    
      )}
		</Avatar>
	)
}

export default UserAvatar

const sx = {
	avatar: {
    display: 'flex',
    pt: '2px',
		bgcolor: 'secondary.main',
	},
}
