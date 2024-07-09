import React from 'react'
import { 
  ListCard, 
  Card, 
  CoverCard, 
  AvatarCard, 
  ChipCard, 
  TextCard, 
  TableCard 
} from '../..'
import { ActionType, DisplayFieldType } from '../../../types'

type CardStyleTypes = 
  'list' | 
  'card' | 
  'avatar' | 
  'cover' | 
  'table' |   
  'text'

type CollectionCardProps = {
	actions: ActionType[]
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
  enableRatings?: boolean
}

const CollectionCard: React.FC<CollectionCardProps> = (props) => {
	const { style = 'card', ...rest } = props

	const COMPONENTS = {
		card: Card,
		avatar: AvatarCard,
		cover: CoverCard,
    chip: ChipCard,
		table: TableCard,
		text: TextCard,
    list: ListCard		
	}

	let Component = COMPONENTS[style] || Card

	return <Component {...rest} />
}

export default CollectionCard
