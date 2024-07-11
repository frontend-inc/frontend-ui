import React, { useContext } from 'react'
import { AppContext } from '../../../context'
import { Box, Stack, Typography } from '@mui/material'
import {
	Image,
	UserChip,
	AvgRating,
	DisplayFields,
	FavoriteButton,
	CommentButton,
} from '../..'
import { truncate } from '../../../helpers'
import { useRouter } from 'next/router'
import { CardProps } from '../../../types'
import { Actions } from '../../../components'

const Card: React.FC<CardProps> = (props) => {
	const { clientUrl } = useContext(AppContext)
	const {
		ref,
		actions,
		resource,
		displayFields = [],
		href,
		handleClick,
		objectFit = 'cover',
		height = 240,
		enableUsers = false,
		enableGradient = false,
		enableOverlay = false,
		enableComments = false,
		enableFavorites = false,
		enableRatings = false,
	} = props || {}

	const { label, title, image } = resource || {}

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
			ref={ref}
			spacing={0}
			sx={{
				...sx.root,
				width: '100%',
				minHeight: height + 80,
			}}
		>
			<Box sx={sx.imageContainer}>
				<Image
					src={image?.url}
					height={height}
					objectFit={objectFit}
					alt={title}
					label={label}
					enableGradient={enableGradient}
					enableOverlay={enableOverlay}
					handleClick={handleItemClick}
				/>
			</Box>
			<Stack spacing={0} sx={sx.cardContent}>
				<Box sx={sx.content}>
					<Typography sx={sx.title} color="textPrimary" variant="subtitle2">
						{truncate(title)}
					</Typography>
					{enableRatings && <AvgRating resource={resource} size="small" />}
					{displayFields?.length > 0 && (
						<DisplayFields fields={displayFields} resource={resource} />
					)}
				</Box>
				<Stack direction="row" justifyContent="space-between">
					<Stack direction="row" spacing={1}>
						{resource?.user && <UserChip user={resource?.user} />}
					</Stack>
					<Stack direction="row" spacing={0}>
						{enableFavorites == true && (
							<FavoriteButton handle={resource?.handle} />
						)}
						{enableComments == true && <CommentButton resource={resource} />}
						{actions?.length > 0 && (
							<Actions numVisible={0} actions={actions} resource={resource} />
						)}
					</Stack>
				</Stack>
			</Stack>
		</Stack>
	)
}

export default Card

const sx = {
	root: {
		overflow: 'hidden',
		borderRadius: 1,
		width: '100%',
		minWidth: 280,
		bgcolor: 'background.default',
		transition: 'box-shadow 0.3s',
		border: '1px solid',
		borderColor: 'divider',
		'&:hover': {
			boxShadow: 2,
		},
	},
	imageContainer: {
		height: 230,
		minHeight: 230,
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
	cardHeaderBorder: {
		px: 1,
	},
	cardContent: {
		p: 1,
		width: '100%',
		display: 'flex',
		height: '100%',
		justifyContent: 'space-between',
		alignItems: 'space-between',
	},
	content: {
		height: '100%',
	},
	title: {
		width: '100%',
	},
}
