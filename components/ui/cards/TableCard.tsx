import React from 'react'
import { Box, Stack, Typography } from '@mui/material'
import {
	Image,
	TouchableOpacity,
} from '../..'
import { CardProps } from './Card'

const TableCard: React.FC<CardProps> = (props) => {

  const {
		label,
    primary,
    secondary,
    secondaryAction,
		handleClick,
    image,
		height = 240,
    slots={
      item: {},
      image: {}
    }
	} = props || {}

	return (
		<Stack direction="row" spacing={1} sx={sx.root} { ...slots.item }>
			<Box sx={sx.grid}>
				<Box sx={sx.imageItem}>
					<Box sx={sx.image}>
						<TouchableOpacity handleClick={handleClick}>
							<Image
								src={image}
								height={height}
								alt={primary}
								{ ...slots.image }
							/>
						</TouchableOpacity>
					</Box>
				</Box>
				<Box sx={sx.item}>
					<Typography color="text.primary" variant="body1">
						{ primary }
					</Typography>
				</Box>
				{ secondary }
			</Box>
			<Stack direction="row" justifyContent="flex-end">
				{ secondaryAction }
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
