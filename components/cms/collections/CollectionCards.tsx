import React from 'react'
import { Stack, Box } from '@mui/material'
import { CollectionCard } from '../..'
import { ActionType, DisplayFieldType } from '../../../types'
import { buildActions } from '../../../helpers'
import { flattenDocument } from 'frontend-js'

type CollectionCardsProps = {
	resources: any
	displayFields?: DisplayFieldType[]
	actions?: ActionType[]
	variant: 'list' | 'grid'
	style: 'card' | 'avatar' | 'cover' | 'chip' | 'text' | 'image'
	buttonText?: string
	enableBorder?: boolean
	enableGradient?: boolean
	enableOverlay?: boolean
	enableEdit?: boolean
	enableDelete?: boolean
	enableFavorites?: boolean
  enableRatings?: boolean
	handleClick: (item: any) => void
	handleEdit?: (item: any) => void
	handleDelete?: (item: any) => void
}

const CollectionCards: React.FC<CollectionCardsProps> = (props) => {
	const handleNull = () => null

	const {
		resources,
		displayFields = [],
		actions = [],
		handleClick,
		handleEdit = handleNull,
		handleDelete = handleNull,
		variant = 'grid',
		style = 'card',
		enableBorder = false,
		enableGradient = false,
		enableOverlay = false,
		enableEdit = false,
		enableDelete = false,
		enableFavorites = false,
    enableRatings = false,
	} = props

	return (
		<Stack spacing={2}>
			<Box
				sx={{
					...sx.root,
					...(variant == 'grid' ? sx.grid : sx.list),
					...(style == 'chip' && sx.listDense),
				}}
			>
				{resources?.map((resource, index) => (
					<CollectionCard
						key={index}
						variant={variant}
						style={style}
						resource={flattenDocument(resource)}
						displayFields={displayFields}
						handleClick={() => handleClick(resource)}
						actions={buildActions({
							enableEdit,
							enableDelete,
							handleEdit: () => handleEdit(resource),
							handleDelete: () => handleDelete(resource),
							actions,
						})}
						enableFavorites={enableFavorites}
            enableRatings={enableRatings}
						enableBorder={enableBorder}
						enableGradient={enableGradient}
						enableOverlay={enableOverlay}
					/>
				))}
			</Box>
		</Stack>
	)
}

export default CollectionCards

const sx = {
	root: {
		width: '100%',
	},
	list: {
		display: 'flex',
		flexDirection: 'column',
		gap: '16px',
	},
	listDense: {
		gap: '8px',
	},
	grid: {
		display: 'grid',
		gridTemplateColumns: {
			md: '1fr 1fr 1fr',
			xs: '1fr',
		},
		gap: '16px',
	},
}
