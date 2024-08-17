import React from 'react'
import {
	ListItemCard,
	Card,
	CoverCard,
	AvatarCard,
	ChipCard,
	TextCard,
	TableCard,
} from '../..'
import { ButtonType, DisplayFieldType } from '../../../types'

type CardStyleTypes = 'list' | 'card' | 'avatar' | 'cover' | 'table' | 'text'

type DataListItemProps = {
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
	enableCreate?: boolean
	enableDelete?: boolean
	enableUsers?: boolean
	enableComments?: boolean
	enableFavorites?: boolean
	enableLikes?: boolean
	enableRatings?: boolean
}

const DataListItem: React.FC<DataListItemProps> = (props) => {
	const { style = 'card', ...rest } = props

	const COMPONENTS = {
		card: Card,
		avatar: AvatarCard,
		cover: CoverCard,
		chip: ChipCard,
		table: TableCard,
		text: TextCard,
		list: ListItemCard,
	}

	let Component = COMPONENTS[style] || Card

	return <Component {...rest} />
}

export default DataListItem
