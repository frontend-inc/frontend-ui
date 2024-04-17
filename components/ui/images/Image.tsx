import React from 'react'
import { Label, NoImage } from '../../../components'
import { Box, useTheme } from '@mui/material'
import NextImage from 'next/image'

export type ImageProps = {
	src?: string
	height: number
	width?: number
	objectFit?: 'cover' | 'contain'
	label?: string
	alt?: string
	bgcolor?: string
	opacity?: number
	enableGradient?: boolean
	enableOverlay?: boolean
  disableBorder?: boolean
	disableBorderRadius?: boolean
}

const Image: React.FC<ImageProps> = (props) => {
	const {
		src = null,
		height,
		width,
		objectFit = 'cover',
		alt = 'image',
		label,
		bgcolor = '#000000',
		opacity = 0.5,
		enableOverlay = false,
		enableGradient = false,
    disableBorder = false,
		disableBorderRadius = false,
	} = props

	const theme = useTheme()

	return (
		<Box
			sx={{
				...sx.root,
				height: `${height}px`,
				'&::after': {
					...sx.afterBase,
					...(enableOverlay && sx.overlay),
					...(!enableOverlay && enableGradient && sx.gradient),
					...(!disableBorderRadius && sx.borderRadius),
					...(!enableOverlay &&
						!disableBorderRadius &&
						enableGradient &&
						sx.gradientBorderRadius),
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
						width: width ? `min(${width}px, 100vw)` : '100%',
						minHeight: `${height}px`,
						objectFit,
						borderRadius: !disableBorderRadius
							? `${theme.shape.borderRadius}px`
							: '0px',
					}}
				/>
			) : (        
				<NoImage
          darkMode
					height={height}
					width={width}
          disableBorder={disableBorder}
					disableBorderRadius={disableBorderRadius}
				/>
			)}
			{label && (
				<Box sx={sx.label}>
					<Label color="common.white" label={label} />
				</Box>
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
	label: {
		position: 'absolute',
		right: 15,
		top: 15,
	},
	borderRadius: {
		borderRadius: 1,
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
		borderRadius: 1,
	},
}
