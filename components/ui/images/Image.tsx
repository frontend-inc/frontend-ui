import React from 'react'
import { NoImage } from '../../../components'
import { Box, useTheme } from '@mui/material'
import NextImage from 'next/image'

type ImageProps = {
	src?: string
	height: number
	objectFit?: 'cover' | 'contain'
	alt?: string
	bgcolor?: string
	opacity?: number
	enableBorder?: boolean
	enableGradient?: boolean
	enableOverlay?: boolean
	disableBorderRadius?: boolean
}

const Image: React.FC<ImageProps> = (props) => {
	const {
		src = null,
		height,
		objectFit = 'cover',
		enableBorder = false,
		alt = 'image',
		bgcolor = '#000000',
		opacity = 0.5,
		enableOverlay = false,
		enableGradient = false,
		disableBorderRadius = false,
	} = props

	const theme = useTheme()

	return (
		<Box
			sx={{
				...sx.root,
				height: `${height}px`,
				borderRadius: !disableBorderRadius && `${theme.shape.borderRadius}px`,
				'&::after': {
					...sx.afterBase,
					...(enableOverlay && sx.overlay),
					...(!enableOverlay && enableGradient && sx.gradient),
					...(!enableOverlay && !disableBorderRadius && enableGradient && sx.gradientBorderRadius),
					...(enableBorder && sx.border),
					bgcolor,
					opacity,
				},
			}}
		>
			{src ? (
				<NextImage
					src={src}
					alt={alt}
					height={1600}
					width={1600}
					style={{
						height: `${height}px`,
						minHeight: `${height}px`,
						objectFit,
						borderRadius: !disableBorderRadius && `${theme.shape.borderRadius}px`,
					}}
					layout={'responsive'}
				/>
			) : (
				<NoImage height={height} />
			)}
		</Box>
	)
}

export default Image

const sx = {
	root: {
    position: 'relative',
		width: '100%',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		overflow: 'hidden',
	},
	afterBase: {
		content: '""',
		position: 'absolute',
		bottom: 0,
		left: 0,
		width: '100%',
		bgcolor: 'transparent',
		opacity: 0,
	},
	overlay: {
		height: '100%',
	},
	gradient: {
		height: '50%',
		background: 'linear-gradient(to top, rgb(0,0,0,1.0), transparent)',
	},
	gradientBorderRadius: {
		height: '50%',
		background: 'linear-gradient(to top, rgb(0,0,0,1.0), transparent)',
		borderRadius: (theme) => `${theme.shape.borderRadius}px`,
	},
	border: {
		border: '1px solid',
		borderColor: 'divider',
	},
}
