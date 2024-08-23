import React, { useContext } from 'react'
import { AppContext } from '../../../context'
import { Box, Hidden, Stack, Typography } from '@mui/material'
import {
	Image,
	DisplayField,
	TouchableOpacity,
	FavoriteButton,
	AvgRating,
	UserChip,
} from '../..'
import { truncate } from '../../../helpers'
import { useRouter } from 'next/router'
import { CardProps } from '../../../types'
import { ButtonActions } from '../..'

const TableCard: React.FC<CardProps> = (props) => {
	const { clientUrl } = useContext(AppContext)
	const {
		buttons,
		resource,
		displayFields = [],
		href,
		height = 100,
		handleClick,
		enableGradient = false,
		enableOverlay = false,
		enableFavorites = false,
		enableRatings = false,
		enableUsers = false,
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
		<Stack direction="row" spacing={1} sx={sx.root}>
			<Box sx={sx.grid}>
				<Box sx={sx.imageItem}>
					<Box sx={sx.image}>
						<TouchableOpacity handleClick={handleItemClick}>
							<Image
								src={image?.url}
								height={height}
								alt={title}
								enableGradient={enableGradient}
								enableOverlay={enableOverlay}
							/>
						</TouchableOpacity>
					</Box>
				</Box>
				<Box sx={sx.item}>
					<Typography color="text.primary" variant="body1">
						{truncate(title)}
					</Typography>
				</Box>
				{enableRatings == true && (
					<Box sx={sx.item}>
						<AvgRating resource={resource} size="small" />
					</Box>
				)}
				{displayFields?.map((field, index) => (
					<Box sx={sx.item} key={index}>
						<DisplayField key={index} field={field} resource={resource} />
					</Box>
				))}
				{enableUsers == true && (
					<Box sx={sx.item}>
						<UserChip user={resource?.user} />
					</Box>
				)}
			</Box>
			<Stack direction="row" justifyContent="flex-end">
				{enableFavorites == true && (
					<FavoriteButton handle={resource?.handle} />
				)}
				<ButtonActions numVisible={0} buttons={buttons} resource={resource} />
			</Stack>
		</Stack>
	)
}

export default TableCard

const sx = {
	root: {
		width: '100%',
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'nowrap',
		pt: 1,
		pb: 2,
		overflow: 'hidden',
		borderBottom: '1px solid',
		borderColor: 'divider',
		justifyContent: 'space-between',
	},
	grid: {
		width: '100%',
		display: {
			sm: 'grid',
			xs: 'flex',
		},
		gridTemplateColumns: 'repeat(auto-fill, 140px)',
		gap: '12px',
	},
	item: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'center',
		maxWidth: 140,
		minWidth: 140,
	},
	container: {
		width: '100%',
	},
	imageItem: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		width: '100%',
		height: '100%',
	},
	image: {
		width: 100,
		maxWidth: 100,
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
		justifyContent: 'flex-start',
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
