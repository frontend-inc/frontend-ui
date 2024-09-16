import React from 'react'
import { ProductCard, ProductListCard } from '../..'
import { useResourceContext } from 'frontend-js'
import { SecondaryFields, SocialButtons, ButtonActions } from '../..'
import { ButtonType, DisplayFieldType } from '../../../types'
import { Box } from '@mui/material'
import { buildActions } from '../../../helpers'
import { AddToCartButton } from '../../../components'

type CardStyleTypes = 'list' | 'card'

type ProductListItemProps = {
	buttons: ButtonType[]
	style: CardStyleTypes
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
}

const ProductListItem: React.FC<ProductListItemProps> = (props) => {
	const { selectedIds, handleSelect } = useResourceContext()

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
		style = 'card',
		...rest
	} = props

	const COMPONENTS = {
		card: ProductCard,
		list: ProductListCard,
	}

	let Component = COMPONENTS[style] || ProductCard

	return (
		<Component
			label={resource?.label}
			image={resource?.image?.url}
			primary={resource?.title}
			price={resource?.display_price}
			compareAtPrice={resource?.display_compare_at_price}
			handleClick={handleClick}
			selected={selectedIds?.includes(resource?.id)}
			handleSelect={() => handleSelect(resource)}
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
						size="small"
						justifyContent="flex-start"
						resource={resource}
						product={resource}
						enableProductLikes={enableLikes}
						enableProductFavorites={enableFavorites}
					/>
				</Box>
			}
			secondaryAction={
				<ButtonActions
					numVisible={0}
					buttons={buttons}
					resource={resource}
				/>
			}
			addToCart={
				<Box>
					<AddToCartButton availableForSale productId={resource?.id} />
				</Box>
			}
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
