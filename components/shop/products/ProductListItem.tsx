'use client'

import React from 'react'
import { ProductCard } from '../..'
import { DisplayFields, SocialButtons } from '../..'
import { ButtonType, DisplayFieldType } from '../../../types'
import { AddToCartButton } from '../../../components'

type ProductListItemProps = {
	buttons: ButtonType[]
	displayFields: DisplayFieldType[]
	resource: any
	buttonText?: string
	href?: string
	handleClick: () => void
	enableBorder?: boolean
	enableGradient?: boolean
	enableOverlay?: boolean
	enableUsers?: boolean
	enableFavorites?: boolean
	enableLikes?: boolean
	enableRatings?: boolean
	disableBorder?: boolean
}

const ProductListItem: React.FC<ProductListItemProps> = (props) => {
	const {
		buttons,
		resource,
		displayFields = [],
		href,
		handleClick,
		enableGradient = false,
		enableOverlay = false,
		enableFavorites = false,
		enableLikes = false,
		enableRatings = false,
		enableUsers = false,
		disableBorder = false,
	} = props

	return (
		<ProductCard
			label={resource?.label}
			image={resource?.image?.url}
			primary={resource?.title}
			price={resource?.display_price}
			compareAtPrice={resource?.display_compare_at_price}
			handleClick={handleClick}
			secondary={
				<div className="flex flex-col space-y-2">
					<DisplayFields fields={displayFields} resource={resource} />
				</div>
			}
			actions={
				<div>
					<SocialButtons
						size="small"
						justifyContent="flex-start"
						resource={resource}
						product={resource}
						enableProductLikes={enableLikes}
						enableProductFavorites={enableFavorites}
					/>
				</div>
			}
			addToCart={
				<AddToCartButton
					availableForSale
					fullWidth
					productId={resource?.id}
					size="lg"
				/>
			}
			disableBorder={disableBorder}
			slots={{
				image: {
					enableGradient,
					enableOverlay,
				},
			}}
		/>
	)
}

export default ProductListItem
