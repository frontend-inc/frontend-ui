import React, { useContext } from 'react'
import { AppContext } from '../../../context'
import { Box, Button, Stack, Typography } from '@mui/material'
import { Image, TouchableOpacity } from '../../../components'
import { truncate } from '../../../helpers'
import { useRouter } from 'next/router'
import { CARD_HORIZ_HEIGHT, CARD_HORIZ_WIDTH } from '../../../constants/index'
import { CardProps } from '../../../types'

const CardHoriz: React.FC<CardProps> = (props) => {
	const { clientUrl } = useContext(AppContext)
	const {
		editing = false,
		label,
		title,
		description,
		image = '',
		href,
		height = CARD_HORIZ_HEIGHT,
		width = CARD_HORIZ_WIDTH,
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
        width: '100%'				
			}}
		>
			<Stack flexDirection="row">
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
				<Stack spacing={2} sx={sx.content}>
					<Box>
						<Typography color="textPrimary" variant={textVariant}>
							{truncate(title)}
						</Typography>
						<Typography
							color="textSecondary"
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
								variant="outlined"
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
		mr: 2,
		width: 120,
		height: '100%',
	},
	content: {
		justifyContent: 'center',
		alignItems: 'flex-start',
		height: '100%',
	},
	description: {
		maxWidth: '320px',
	},
}
