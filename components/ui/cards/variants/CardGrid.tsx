import React, { useContext } from 'react'
import { AppContext } from '../../../../context'
import { Box, Stack, Typography } from '@mui/material'
import { Image, AvgRating, DisplayFields, FavoriteButton } from '../../..'
import { truncate } from '../../../../helpers'
import { useRouter } from 'next/router'
import { CardProps } from '../../../../types'
import { Actions } from '../../../../components'

const CardGrid: React.FC<CardProps> = (props) => {
	const { clientUrl } = useContext(AppContext)
	const {
		actions,
		resource,
		displayFields = [],
		href,
		handleClick,
		objectFit = 'cover',
		height = 240,
		enableBorder = false,
		enableGradient = false,
		enableOverlay = false,
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
			spacing={1}
			sx={{
				...sx.root,
				...(enableBorder && sx.rootBorder),
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
					disableBorderRadius={enableBorder}
					enableOverlay={enableOverlay}
					handleClick={handleItemClick}
				/>
			</Box>
			<Stack
				spacing={0}
				sx={{
					...sx.content,
					...(enableBorder && sx.contentBorder),
				}}
			>
				<Stack sx={sx.contentArea} direction="row" spacing={0}>
					<Typography sx={sx.title} color="textPrimary" variant="subtitle2">
						{truncate(title)}
					</Typography>
					<Stack direction="row" justifyContent="flex-end">
						{enableFavorites && <FavoriteButton handle={resource?.handle} />}
						<Actions numVisible={0} actions={actions} resource={resource} />
					</Stack>
				</Stack>
        { enableRatings && (
          <AvgRating resource={resource} size="small" />
        )}
        { displayFields?.length > 0 && (
				  <DisplayFields fields={displayFields} resource={resource} />
        )}
			</Stack>
		</Stack>
	)
}

export default CardGrid

const sx = {
	root: {
		borderRadius: 1,
		width: '100%',
		minWidth: 300,
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
	},
	contentArea: {
		width: '100%',
	},
	contentBorder: {
		px: 1,
		pb: 1,
		pt: 0,
	},
	title: {
		width: '100%',
	},
	description: {
		maxWidth: '320px',
	},
}
