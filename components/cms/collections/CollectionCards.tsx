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
	style: 'list' | 'card' | 'avatar' | 'cover' | 'table' | 'text'
	buttonText?: string
	enableBorder?: boolean
	enableGradient?: boolean
	enableOverlay?: boolean
	enableEdit?: boolean
	enableDelete?: boolean
	enableUsers?: boolean
	enableComments?: boolean
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
		style = 'card',
		enableBorder = false,
		enableGradient = false,
		enableOverlay = false,
		enableEdit = false,
		enableDelete = false,
		enableUsers = false,
		enableComments = false,
		enableFavorites = false,
		enableRatings = false,
	} = props

	const VARIANTS = {
		list: 'list',
		card: 'grid',
		avatar: 'list',
		cover: 'grid',
		chip: 'list',
		text: 'list',
		table: 'table',
	}

	let variant = VARIANTS[style]

	return (
		<Box
			sx={{
				...sx.root,
				...(variant == 'grid' ? sx.grid : sx.list),
			}}
		>
			{resources?.map((resource, index) => (
				<CollectionCard
					key={index}
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
					enableUsers={enableUsers}
					enableComments={enableComments}
					enableFavorites={enableFavorites}
					enableRatings={enableRatings}
					enableBorder={enableBorder}
					enableGradient={enableGradient}
					enableOverlay={enableOverlay}
				/>
			))}
		</Box>
	)
}

export default CollectionCards

const sx = {
	root: {
		width: '100%',
		overflowX: 'scroll',
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
		pb: 1,
	},
}
