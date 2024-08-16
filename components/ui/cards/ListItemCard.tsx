import React, { useContext } from 'react'
import { AppContext } from '../../../context'
import { Box, Stack, Typography } from '@mui/material'
import {
	Image,
	DisplayFields,
	TouchableOpacity,
	CommentButton,
	FavoriteButton,
	LikeButton,
	AvgRating,
	UserChip,
} from '../..'
import { truncate } from '../../../helpers'
import { useRouter } from 'next/router'
import { CardProps } from '../../../types'
import { ActionButtons } from '../..'

const CardList: React.FC<CardProps> = (props) => {
	const { clientUrl } = useContext(AppContext)
	const {
		buttons,
		resource,
		displayFields = [],
		href,
		height = 180,
		handleClick,
		enableGradient = false,
		enableOverlay = false,
		enableComments = false,
		enableFavorites = false,
		enableLikes = false,
		enableRatings = false,
	} = props || {}

	const router = useRouter()

	const { label, title, image } = resource || {}

	const handleItemClick = () => {
		if (handleClick) {
			return handleClick()
		} else if (href) {
			router.push(`${clientUrl}${href}`)
		}
	}

	return (
		<Box sx={sx.root}>
			<Stack
				sx={sx.container}
				spacing={1}
				flexDirection={{ xs: 'column', sm: 'row' }}
			>
				<Box sx={sx.image}>
					<TouchableOpacity handleClick={handleItemClick}>
						<Image
							label={label}
							src={image?.url}
							height={height}
							alt={title}
							enableGradient={enableGradient}
							enableOverlay={enableOverlay}
						/>
					</TouchableOpacity>
				</Box>
				<Stack direction="row" spacing={1} sx={sx.contentArea}>
					<Stack direction="column" sx={sx.content}>
						<Stack direction="column" spacing={0.5}>
							<Typography color="text.primary" variant="subtitle2">
								{truncate(title)}
							</Typography>
							{enableRatings == true && (
								<AvgRating resource={resource} size="small" />
							)}
							<DisplayFields fields={displayFields} resource={resource} />
							<UserChip user={resource?.user} />
						</Stack>
						<Stack direction="row" justifyContent="flex-end">
							{enableLikes == true && <LikeButton handle={resource?.handle} />}
							{enableFavorites == true && (
								<FavoriteButton handle={resource?.handle} />
							)}
							{enableComments == true && <CommentButton resource={resource} />}
						</Stack>
					</Stack>
					<Stack direction="row" justifyContent="flex-end">
						<ActionButtons numVisible={0} buttons={buttons} resource={resource} />
					</Stack>
				</Stack>
			</Stack>
		</Box>
	)
}

export default CardList

const sx = {
	root: {
		width: '100%',
		display: 'flex',
		flexDirection: 'row',
		pt: 1,
		pb: 2,
		overflow: 'hidden',
		borderBottom: '1px solid',
		borderColor: 'divider',
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
	container: {
		width: '100%',
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
		minWidth: {
			sm: 220,
			xs: '100%',
		},
		height: '100%',
	},
	contentArea: {
		width: '100%',
	},
	contentAreaBorder: {
		pr: 1,
	},
	content: {
		width: '100%',
		justifyContent: 'space-between',
		alignItems: 'flex-start',
		height: '100%',
		py: {
			sm: 0,
			xs: 1,
		},
	},
	contentBorder: {
		px: {
			sm: 0,
			xs: 2,
		},
	},
	description: {
		maxWidth: '320px',
	},
	buttons: {
		display: 'flex',
		flexDirection: 'column',
	},
	buttonsBorder: {
		px: 1,
		pb: {
			sm: 0,
			xs: 1,
		},
	},
}
