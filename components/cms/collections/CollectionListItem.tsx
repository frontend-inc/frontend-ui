'use client'

import React from 'react'
import { CollectionCard } from '../..'

type CollectionListItemProps = {
	resource: any
	handleClick: () => void
	enableBorder?: boolean
	enableGradient?: boolean
	enableOverlay?: boolean
}

const CollectionListItem: React.FC<CollectionListItemProps> = (
	props
) => {
	const {
		resource,
		handleClick,
		enableGradient = false,
		enableOverlay = false,
	} = props

	return (
		<CollectionCard
			label={resource?.label}
			image={resource?.image?.url}
			primary={resource?.title}
			handleClick={handleClick}
			slots={{
				image: {
					enableGradient,
					enableOverlay,
				},
			}}
		/>
	)
}

export default CollectionListItem
