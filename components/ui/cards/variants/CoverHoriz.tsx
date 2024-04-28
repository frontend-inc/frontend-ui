import React, { useContext } from 'react'
import { AppContext } from '../../../../context'
import { Box, Button, Stack, Typography } from '@mui/material'
import { Image, Icon, TouchableOpacity } from '../../..'
import { truncate } from '../../../../helpers'
import { useRouter } from 'next/router'
import { CardProps } from '../../../../types'

const CoverHoriz: React.FC<CardProps> = (props) => {
	const { clientUrl } = useContext(AppContext)
	const {
		label,
		icon,
		title,
		image = '',
		href,
		handleClick,
		buttonText,
		textVariant = 'subtitle1',
		objectFit = 'cover',
		height = 240,
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
		<Stack sx={sx.root} spacing={1}>
			<TouchableOpacity handleClick={handleItemClick}>
				<Image
					label={label}
					src={image}
					objectFit={objectFit}
					alt={title}
					height={height}
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

export default CoverHoriz

const sx = {
	root: {
		width: '100%',
		position: 'relative',
		flexDirection: 'column',
		overflow: 'hidden',
		borderRadius: 1,
	},
	cover: {
		position: 'absolute',
    left: 0,
    bottom: 0,
		zIndex: 1,
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
    p: 2,
		minHeight: '60px',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'flex-start',
	},
}
