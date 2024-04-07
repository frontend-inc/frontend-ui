import React, { useContext } from 'react'
import { AppContext } from '../../../context'
import { Box, Button, Stack, Typography } from '@mui/material'
import { Image, TouchableOpacity } from '../../../components'
import { truncate } from '../../../helpers'
import { useRouter } from 'next/router'
import { CardProps } from '../../../types'

const CardHoriz: React.FC<CardProps> = (props) => {
	const { clientUrl } = useContext(AppContext)
	const {
		label,
		title,
		description,
		image = '',
		href,
		height = 180,
		buttonText,
		textVariant = 'subtitle1',
		handleClick,
		objectFit = 'cover',
		enableBorder = false,
		enableGradient = false,
		enableOverlay = false,
	} = props || {}

	const router = useRouter()

	const handleItemClick = () => {
		if (handleClick) {
			return handleClick()
		} else if (href) {
			router.push(`${clientUrl}${href}`)
		}
	}

	return (
		<Box
			sx={{
				...sx.root,
				...(enableBorder && sx.rootBorder),
				width: '100%',
			}}
		>
			<Stack spacing={1} flexDirection={{ xs: 'column', sm: 'row' }}>
				<Box sx={sx.image}>
					<TouchableOpacity handleClick={handleItemClick}>
						<Image
							src={image}
							height={height}
							objectFit={objectFit}
							alt={title}
							enableGradient={enableGradient}
							enableOverlay={enableOverlay}
							disableBorderRadius={enableBorder}
						/>
					</TouchableOpacity>
				</Box>
				<Stack spacing={1} sx={sx.content}>
					<Box>
						<Typography color="textPrimary" variant={textVariant}>
							{truncate(title)}
						</Typography>
						<Typography
							color="text.secondary"
							variant="body2"
							sx={sx.description}
						>
							{truncate(description, 80)}
						</Typography>
						{label && (
							<Typography color="textSecondary" variant="caption">
								{label}
							</Typography>
						)}
					</Box>
					{buttonText && (
						<Box>
							<Button
								variant="contained"
								color="secondary"
								onClick={handleItemClick}
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

export default CardHoriz

const sx = {
	root: {
		position: 'relative',
		display: 'flex',
		flexDirection: 'row',
		borderRadius: (theme) => `${theme.shape.borderRadius}px`,
		overflow: 'hidden',
	},
	gradient: {
		'&::after': {
			content: '""',
			position: 'absolute',
			bottom: 0,
			left: 0,
			width: '100%',
			height: '50%',
			background: 'linear-gradient(to top, rgb(0,0,0,0.5), transparent)',
		},
	},
	rootBorder: {
		border: '1px solid',
		borderColor: 'divider',
	},
	image: {
		pr: {
			sm: 2,
			xs: 0,
		},
		mr: {
			sm: 2,
			xs: 0,
		},
		width: {
			sm: 220,
			xs: '100%',
		},
		height: '100%',
	},
	content: {
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
		height: '100%',
		py: 1,
	},
	description: {
		maxWidth: '320px',
	},
}
