import React from 'react'
import { ListCard, ListLayout } from '../..'
import { ActionType, DisplayFieldType } from '../../../types'
import { buildActions } from '../../../helpers'
import { flattenDocument } from 'frontend-js'

type ListCardsProps = {
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
  enableLikes?: boolean
	enableRatings?: boolean
	handleClick: (item: any) => void
	handleEdit?: (item: any) => void
	handleDelete?: (item: any) => void
}

const ListCards: React.FC<ListCardsProps> = (props) => {
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
    enableLikes = false,
		enableRatings = false,
	} = props

  let grid = false 

	const LAYOUTS = {
		list: false,
		card: true,
		avatar: false,
		cover: true,
		chip: false,
		text: false,
		table: false,
	}
  
	grid = LAYOUTS[style]

	return (
    <ListLayout grid={grid}>
			{resources?.map((resource, index) => (
				<ListCard
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
          enableLikes={enableLikes}
					enableRatings={enableRatings}
					enableBorder={enableBorder}
					enableGradient={enableGradient}
					enableOverlay={enableOverlay}
				/>
			))}
		</ListLayout>
	)
}

export default ListCards
