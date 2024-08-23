import React from 'react'
import { Avatar, Box } from '@mui/material'

export type AvatarImageProps = {
  image: string
  alt: string
  height?: number
  enableGradient?: boolean
  enableOverlay?: boolean
  slots?: {
    image?: any
  }
}

const AvatarImage: React.FC<AvatarImageProps> = (props) => {

  const {
    image,
    alt,
    height = 64,
    enableGradient = false,
    enableOverlay = false,
    slots={
      image: {}
    }
  } = props

  return(
    <Avatar
      sx={{
        ...sx.avatar,
        ...(enableGradient && sx.gradient),
        ...(enableOverlay && sx.overlay),
        height: `${height}px`,
        width: `${height}px`,
      }}
      src={image}
      alt={alt}
      { ...slots.image }
    >
      <Box />
    </Avatar>
  )
}

export default AvatarImage

const sx = {
  avatar: {
		height: '64px',
		width: '64px',
		backgroundImage: 'linear-gradient(45deg, #888888, #222222,#000000)',
	},
  gradient: {
		'&::after': {
			content: '""',
			borderRadius: '50%',
			position: 'absolute',
			bottom: 0,
			left: 0,
			width: '100%',
			height: '100%',
			background: 'linear-gradient(to top, rgb(0,0,0,0.5), transparent)',
		},
	},
	overlay: {
		'&::after': {
			content: '""',
			borderRadius: '50%',
			position: 'absolute',
			bottom: 0,
			left: 0,
			width: '100%',
			height: '100%',
			background: 'rgb(0,0,0,0.5)',
		},
	},
}