import React from 'react'
import {
	CardVert,
	CardHoriz,
	CoverVert,
	CoverHoriz,
	AvatarVert,
	AvatarHoriz,
} from '../..'

type CollectionCardProps = {
	layout: 'list' | 'grid'
	style: 'card' | 'avatar' | 'cover'
	title?: string
	image?: string
	video?: string
	description: string
	buttonText?: string
	href?: string
	handleClick: () => void
	enableBorder?: boolean
	enableGradient?: boolean
	enableOverlay?: boolean
}

const CollectionCard: React.FC<CollectionCardProps> = (props) => {
	const { ...rest } = props
  const layout = 'list'
  const style = 'card'

	const COMPONENTS = {
		list: {
			card: CardHoriz,
			avatar: AvatarHoriz,
			cover: CoverHoriz,
		},
		grid: {
			card: CardVert,
			avatar: AvatarVert,
			cover: CoverVert,
		},
	}

	let Component = COMPONENTS[layout][style] || CardVert

	return <Component {...rest} />
}

export default CollectionCard
