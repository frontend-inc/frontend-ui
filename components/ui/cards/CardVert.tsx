import React, { useContext } from 'react'
import { AppContext } from '../../../context'
import { Box, Button, Stack, Typography } from '@mui/material'
import { Image, TouchableOpacity } from '../../../components'
import { truncate } from '../../../helpers'
import { useRouter } from 'next/router'
import { CARD_VERT_HEIGHT, CARD_VERT_WIDTH } from '../../../constants/index'
import { CardProps } from '../../../types'

const CardVert: React.FC<CardProps> = (props) => {
	const { clientUrl } = useContext(AppContext)
	const {
		label,
		title,
		image = '',
		href,
		handleClick,
		buttonText,
		textVariant = 'subtitle1',
		objectFit = 'cover',
		height = CARD_VERT_HEIGHT,
		enableBorder = false,
		enableGradient = false,
		enableOverlay = false,
	} = props || {}

	const router = useRouter()

	const handleItemClick = () => {
		if (handleClick) {
			handleClick()
		} else if (href) {
			router.push(`${clientUrl}${href}`)
		}
	}

	return (
		<Stack
			spacing={1}
			sx={{
				...sx.root,
				...(enableBorder && sx.rootBorder),
				minWidth: `${CARD_VERT_WIDTH}px`,
				minHeight: height + 80,
			}}
		>
			<Box sx={sx.imageContainer}>
				<TouchableOpacity handleClick={handleItemClick}>
					<Image
						src={image}
						height={height}
						objectFit={objectFit}
						alt={title}
						enableGradient={enableGradient}
						disableBorderRadius={enableBorder}
						enableOverlay={enableOverlay}
					/>
				</TouchableOpacity>
			</Box>
			<Stack
				spacing={1}
				sx={{
					...sx.content,
					...(enableBorder && sx.contentBorder),
				}}
			>
				<Stack spacing={0}>
					<Typography color="textPrimary" variant={textVariant}>
						{truncate(title)}
					</Typography>
					{label && (
						<Typography color="textSecondary" variant="body2">
							{label}
						</Typography>
					)}
				</Stack>
				{buttonText && (
					<Box>
						<Button
              sx={ sx.button }							
							color="secondary"
							onClick={handleItemClick}
						>
							{buttonText}
						</Button>
					</Box>
				)}
			</Stack>
		</Stack>
	)
}

export default CardVert

const sx = {
	root: {
		width: '100%',
	},
	rootBorder: {
		border: '1px solid',
		borderColor: 'divider',
		borderRadius: (theme) => `${theme.shape.borderRadius}px`,
		overflow: 'hidden',
	},
	imageContainer: {
		width: '100%',
		position: 'relative',
		flexDirection: 'column',
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
	content: {
		minHeight: '60px',
	},
	contentBorder: {
		p: 1,
		pt: 0,
	},
	title: {
		minHeight: '50px',
	},
	description: {
		maxWidth: '320px',
	},
  button: {
    color: 'text.primary',
    bgcolor: 'tertiary.main',
    '&:hover': {
      bgcolor: 'tertiary.dark'
    }
  }
}
