import React from 'react'
import { ProductCollectionCard } from '../..'

type ProductCollectionListItemProps = {
	resource: any
	href?: string
	handleClick: () => void
	enableBorder?: boolean
	enableGradient?: boolean
	enableOverlay?: boolean
}

const ProductCollectionListItem: React.FC<ProductCollectionListItemProps> = (props) => {
	
	const {
		resource,
		href,
		handleClick,
		enableGradient = false,
		enableOverlay = false,
		...rest
	} = props

	return (
		<ProductCollectionCard
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

export default ProductCollectionListItem
