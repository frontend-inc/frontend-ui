import React, { useContext } from 'react'
import { AppContext } from '../../../context'
import { Box, Button, Stack, Typography } from '@mui/material'
import { Image, Icon, TouchableOpacity } from '../../../components'
import { truncate } from '../../../helpers'
import { useRouter } from 'next/router'
import { COVER_VERT_HEIGHT, COVER_VERT_WIDTH } from '../../../constants/index'
import { CardProps } from '../../../types'

const CoverVert: React.FC<CardProps> = (props) => {
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
		height = COVER_VERT_HEIGHT,
		width = COVER_VERT_WIDTH,
		enableGradient = false,
		enableOverlay = false,
		icon,
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
			}}
		>
			<TouchableOpacity handleClick={handleItemClick}>
				<Image
          label={label}
					src={image}
					height={height}
					objectFit={objectFit}
					alt={title}
					enableGradient={enableGradient}
					enableOverlay={enableOverlay}
				/>
			</TouchableOpacity>
			<Stack spacing={1} sx={sx.cover}>
				<Stack spacing={1} direction={'row'} alignItems="center">
					{icon && (
						<Box>
							<Icon size={20} name={icon} color="common.white" />
						</Box>
					)}
					<Box sx={sx.content}>
						<Typography color="common.white" variant={textVariant}>
							{truncate(title, 40)}
						</Typography>
						{label && (
							<Typography color="common.white" variant="caption">
								{label}
							</Typography>
						)}
					</Box>
				</Stack>
				{buttonText && (
					<Box>
						<Button
							variant="contained"
							sx={sx.button}
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

export default CoverVert

const sx = {
	root: {
		position: 'relative',
		flexDirection: 'column',
		overflow: 'hidden',
		width: '100%',
		borderRadius: 1,
	},
	cover: {
		position: 'absolute',
		bottom: '10px',
		left: '10px',
		zIndex: 1,
	},
	description: {
		maxWidth: '320px',
	},
	button: {
		bgcolor: 'common.white',
		color: 'common.black',
		'&:hover': {
			color: 'common.black',
			bgcolor: 'common.white',
			opacity: 0.9,
		},
	},
	content: {
		height: '50px',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'flex-start',
	},
}
