import React, { useContext } from 'react'
import { AppContext } from '../../../../context'
import { Box, Button, Stack, Typography } from '@mui/material'
import { Image, TouchableOpacity, MenuButton } from '../../..'
import { truncate } from '../../../../helpers'
import { useRouter } from 'next/router'
import { CARD_VERT_HEIGHT, CARD_VERT_WIDTH } from '../../../../constants/index'
import { CardProps } from '../../../../types'
import { Actions } from '../../../../components'

const CardGrid: React.FC<CardProps> = (props) => {
	const { clientUrl } = useContext(AppContext)
	const {
		actions,
		item,
		href,
		handleClick,
		objectFit = 'cover',
		height = CARD_VERT_HEIGHT,
		enableBorder = false,
		enableGradient = false,
		enableOverlay = false,
	} = props || {}

	const { label, title, image } = item || {}

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
						src={image?.url}
						height={height}
						objectFit={objectFit}
						alt={title}
						label={label}
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
				<Stack sx={sx.contentArea} direction="row" spacing={0}>
					<Typography sx={sx.title} color="textPrimary" variant="subtitle2">
						{truncate(title)}
					</Typography>
					<Actions numVisible={0} actions={actions} resource={item} />
				</Stack>
			</Stack>
		</Stack>
	)
}

export default CardGrid

const sx = {
	root: {
		width: '100%',
	},
	rootBorder: {
		border: '1px solid',
		borderColor: 'divider',
		borderRadius: 1,
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
		width: '100%',
		minHeight: '60px',
	},
	contentArea: {
		width: '100%',
	},
	contentBorder: {
		p: 1,
		pt: 0,
	},
	title: {
		width: '100%',
		minHeight: '50px',
	},
	description: {
		maxWidth: '320px',
	},
}
