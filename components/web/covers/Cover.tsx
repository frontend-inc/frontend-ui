import React from 'react'
import { Box, Stack, Typography, Button } from '../../../tailwind'
import { Image } from '../..'
import { useRouter } from 'next/router'
import { useApp } from '../../../hooks'

export type CoverProps = {
	editing?: boolean
	title?: string | React.ReactNode
	description?: string
	buttonText?: string
	textVariant?: 'h1' | 'h2' | 'h3'
	image?: string
	height?: number
	width?: number
	alignItems?: 'flex-start' | 'center' | 'flex-end'
	alt?: string
	handleClick?: () => void
	enableGradient?: boolean
	enableOverlay?: boolean
	opacity?: number
	overlayColor?: string
	path?: string
}

const Cover: React.FC<CoverProps> = (props) => {
	const router = useRouter()
	const { clientUrl } = useApp()

	const {
		title,
		description,
		textVariant = 'h3',		
		handleClick,
		image,
		height = 520,
		alt = 'image',
		enableGradient = false,
		enableOverlay = false,
		opacity = 0.65,
		alignItems = 'center',
		overlayColor = '#000000',
    buttonText,
		path,
	} = props

	const handleItemClick = () => {
		if (handleClick) {
			return handleClick()
		} else if (path) {
			router.push(`${clientUrl}${path}`)
		}
	}

	return (
		<Box className="dark relative w-full">
			<Image
				disableBorderRadius
				src={image}
				alt={alt}
				height={height}
				bgcolor={overlayColor}
				enableGradient={enableGradient}
				enableOverlay={enableOverlay}
				opacity={opacity}
			/>
			<Stack
        className={`h-[${height}px] absolute top-0 left-0 w-full h-full justify-center items-center px-3 sm:px-0`}				
			>
				<Stack
					direction="column"
					spacing={1}
					alignItems={alignItems}
				>
					{title && (
						<Typography
							variant={textVariant}
              textAlign={ alignItems === 'center' ? 'center' : 'left'}							
						>
							{title}
						</Typography>
					)}
					{description && (
						<Typography
							variant="subtitle2"
							color="text.primary"
              textAlign={ alignItems === 'center' ? 'center' : 'left'}							
						>
							{description}
						</Typography>
					)}
					{buttonText && (
						<Box className='py-2'>
							<Button
								size="large"
								onClick={handleItemClick}
								variant="contained"
							>
								{buttonText}
							</Button>
						</Box>
					)}
				</Stack>
			</Stack>
		</Box>
	)
}

export default Cover

const sx = {
	root: {
		p: 0,
		width: '100%',
		position: 'relative',
	},
	stack: {
		position: 'absolute',
		top: 0,
		left: 0,
		width: '100%',
		justifyContent: 'center',
		alignItems: 'center',
		px: {
			sm: 0,
			xs: 3,
		},
	},
	content: {
		maxWidth: '720px',
	},
}
