import React from 'react'
import { Card, Cover, AvatarCard, AvatarChip } from '../..'

type CollectionCardProps = {
	layout: 'list' | 'grid'
	style: 'card' | 'avatar' | 'cover'
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
    layout = 'list', 
    style = 'card', 
    ...rest 
  } = props

	const COMPONENTS = {
		card: Card,
		avatar: AvatarCard,
		cover: Cover,
	}

	let Component = COMPONENTS[style] || Card

	return (
		<Component direction={layout === 'list' ? 'column' : 'row'} {...rest} />
	)
}

export default CollectionCard
