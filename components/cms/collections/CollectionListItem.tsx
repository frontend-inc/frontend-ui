import React from 'react'
import {
	ListCard,
	Card,
	CoverCard,
	AvatarCard,
	ChipCard,
	TextCard,
	TableCard,
} from '../..'
import { SecondaryFields, SocialButtons, ButtonActions } from '../..'
import { ButtonType, DisplayFieldType } from '../../../types'
import { Box } from '@mui/material'
import { buildActions } from '../../../helpers'

type CardStyleTypes = 'list' | 'avatar' | 'card' | 'cover' | 'text'

type CollectionListItemProps = {
	buttons: ButtonType[]
	style: CardStyleTypes
	displayFields: DisplayFieldType[]
	resource: any & {
		label?: string
		title?: string
		subtitle?: string
		image?: string
		video?: string
		description: string
	}
	buttonText?: string
	href?: string
	handleClick: () => void
	handleEdit?: (item: any) => void
	handleDelete?: (item: any) => void
	enableBorder?: boolean
	enableGradient?: boolean
	enableOverlay?: boolean
	enableEdit?: boolean
	enableDelete?: boolean
	enableUsers?: boolean
	enableComments?: boolean
	enableFavorites?: boolean
  enableAddReference?: boolean
	enableLikes?: boolean
	enableRatings?: boolean
}

const CollectionListItem: React.FC<CollectionListItemProps> = (props) => {
	
  const {
		buttons,
		resource,
		displayFields = [],
		href,
		handleClick,
    enableEdit = false,
    enableDelete = false,
    handleEdit,
    handleDelete,
		enableGradient = false,
		enableOverlay = false,
		enableComments = false,
		enableFavorites = false,
    enableAddReference = false,
		enableLikes = false,
		enableRatings = false,
		enableUsers = false,
		style = 'card',
		...rest
	} = props

	const COMPONENTS = {
		card: Card,
		avatar: AvatarCard,
		cover: CoverCard,
		chip: ChipCard,
		table: TableCard,
		text: TextCard,
		list: ListCard,
	}

	const itemProps =
		{
			card: {},
			avatar: {},
			cover: {},
			chip: {},
			table: {},
			text: {},
			list: {},
		}[style] || {}

	let Component = COMPONENTS[style] || Card

	return (
		<Component
			{...rest}
			label={resource?.label}
			image={resource?.image?.url}
			primary={resource?.title}
			secondary={
				<SecondaryFields
					enableRatings={enableRatings}
					enableUsers={enableUsers}
					fields={displayFields}
					resource={resource}
				/>
			}
			actions={
				<Box>
					<SocialButtons
						spacing={0}
						variant="icon"
						justifyContent="flex-start"
						resource={resource}
						enableLikes={enableLikes}
						enableFavorites={enableFavorites}
						enableComments={enableComments}
            enableAddReference={enableAddReference}
					/>
				</Box>
			}
			secondaryAction={
				<ButtonActions 
          numVisible={0} 
          buttons={buildActions({
            enableEdit,
            enableDelete,
            handleEdit,
            handleDelete,
            buttons,
          })}
          resource={resource} 
        />
			}
			slots={{
				image: {
					enableGradient,
					enableOverlay,
				},
			}}
			{...itemProps}
		/>
	)
}

export default CollectionListItem
