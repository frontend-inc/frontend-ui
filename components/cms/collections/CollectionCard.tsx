import React from 'react'
import { Card, Cover, AvatarCard, Chip } from '../..'

type CollectionCardProps = {
	variant: 'list' | 'grid'
	style: 'card' | 'avatar' | 'cover' | 'chip'
	label?: string
	title?: string
	image?: string
	video?: string
	description: string
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
}

const CollectionCard: React.FC<CollectionCardProps> = (props) => {
	const { 
    variant = 'list', 
    style = 'card', 
    ...rest 
  } = props

	const COMPONENTS = {
		card: Card,
		avatar: AvatarCard,
		cover: Cover,
    chip: Chip
	}

	let Component = COMPONENTS[style] || Card

	return (
		<Component variant={variant} {...rest} />
	)
}

export default CollectionCard
