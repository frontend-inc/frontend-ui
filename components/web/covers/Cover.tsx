import React, { useContext } from 'react'
import { Box, Stack, Typography, Button } from '@mui/material'
import { Image } from '../..'
import { useRouter } from 'next/router'
import { AppContext } from '../../../context'

export type CoverProps = {
	editing?: boolean
	title?: string
	description?: string
	buttonText?: string
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
	href?: string
}

const Cover: React.FC<CoverProps> = (props) => {
	const router = useRouter()
	const { clientUrl } = useContext(AppContext)

	const {
		title,
		description,
		buttonText,
		handleClick,
		image,
		height = 520,
		alt = 'image',
		enableGradient = false,
		enableOverlay = false,
		opacity = 0.65,
		alignItems = 'center',
		overlayColor = '#FFFFFF',
		href,
	} = props

	const handleItemClick = () => {
		if (handleClick) {
			return handleClick()
		} else if (href) {
			router.push(`${clientUrl}${href}`)
		}
	}

	return (
		<Box sx={sx.root}>
			<Image
				src={image}
				alt={alt}
				height={height}
				objectFit={'cover'}
				disableBorderRadius
				bgcolor={overlayColor}
				enableGradient={enableGradient}
				enableOverlay={enableOverlay}
				opacity={opacity}
			/>
			<Stack
				sx={{
					...sx.stack,
					height: `${height}px`,
				}}
			>
				<Stack
					direction="column"
					spacing={1}
					alignItems={alignItems}
					sx={sx.content}
				>
					{title && (
						<Typography
							variant={'h3'}
							color="text.primary"
							sx={{
								textAlign: alignItems === 'center' ? 'center' : 'left',
							}}
						>
							{title}
						</Typography>
					)}
					{description && (
						<Typography
							variant="subtitle2"
							color="text.primary"
							sx={{
								textAlign: alignItems === 'center' ? 'center' : 'left',
							}}
						>
							{description}
						</Typography>
					)}
					{buttonText && (
						<Box py={2}>
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
		maxWidth: '540px',
	},
}
