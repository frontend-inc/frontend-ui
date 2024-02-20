import React from 'react'
import { Box, Avatar } from '@mui/material'
import { User } from 'lucide-react'

type ProfileImageProps = {
	src: string
	size?: number
	disableRing?: boolean
}

const ProfileImage: React.FC<ProfileImageProps> = (props) => {
	const { src, disableRing = false, size = 128 } = props
	return (
		<Box
			sx={{
				...sx.outerContainer,
				...(!disableRing && sx.avatarRing),
				width: `${size + 8}px`,
				height: `${size + 8}px`,
			}}
		>
			<Box
				sx={{
					...sx.innerContainer,
					width: `${size}px`,
					height: `${size}px`,
				}}
			>
				<Avatar
					src={src}
					sx={{
						...sx.avatar,
						width: `${size - 8}px`,
						height: `${size - 8}px`,
					}}
				>
					<User size={size} color="black" />
				</Avatar>
			</Box>
		</Box>
	)
}

export default ProfileImage

const sx = {
	outerContainer: {
		p: '3px',
		border: '1px solid',
		borderColor: 'divider',
		borderRadius: '50%',
	},
	avatarRing: {
		background: `conic-gradient(
      from 0deg,
      red,
      orange,
      yellow,
      green,
      blue,
      indigo,
      violet,
      red
    )`,
	},
	innerContainer: {
		border: '4px solid',
		borderColor: 'primary.contrastText',
		borderRadius: '50%',
	},
	avatar: {
		bgcolor: 'background.paper',
	},
}
