import React from 'react'
import { Card, CoverCard, AvatarCard, Chip, TextCard, ImageCard } from '../..'
import { ActionType } from '../../../types'

type CardStyleTypes = 'card' | 'avatar' | 'cover' | 'chip' | 'image' | 'text'

type CollectionCardProps = {
	actions: ActionType[]
	variant: 'list' | 'grid'
	style: CardStyleTypes
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
  enableFavorites?: boolean
}

const CollectionCard: React.FC<CollectionCardProps> = (props) => {
	const { variant = 'list', style = 'card', ...rest } = props

	const COMPONENTS = {
		card: Card,
		avatar: AvatarCard,
		cover: CoverCard,
		chip: Chip,
		text: TextCard,
		image: ImageCard,
	}    

	let Component = COMPONENTS[style] || Card

	return <Component variant={variant} {...rest} />
}

export default CollectionCard
