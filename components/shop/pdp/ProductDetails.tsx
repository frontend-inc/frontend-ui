import React from 'react'
import { ButtonType, DisplayFieldType } from '../../../types'
import { PDP } from '../..'
import { useCollectionForms } from '../../../hooks'
import { useResourceContext } from 'frontend-js'
import {
	ProductRating,
	DisplayMetafields,
	ButtonActions,
	SocialButtons,
	AddToCartButton,
} from '../..'
import { Box, Stack } from '@mui/material'

export type ProductDetailsProps = {
	handle?: string
	buttons: ButtonType[]
	displayFields: DisplayFieldType[]
	product: any
	enableFavorites?: boolean
	enableLikes?: boolean
	enableSharing?: boolean
	enableRatings?: boolean
	enableGradient?: boolean
	enableOverlay?: boolean
	handleEdit?: (res: any) => void
}

export type ProductProps = ProductDetailsProps & {
	slots?: {
		image?: any
		content?: any
	}
}

const ProductDetails: React.FC<ProductProps> = (props) => {
	const {
		displayFields = [],
		buttons,
		enableFavorites,
		enableLikes,
		enableSharing,
		enableRatings,
		enableGradient,
		enableOverlay,
		slots: defaultSlots = {
			image: {},
			content: {},
		},
	} = props || {}

	const { resource: product } = useResourceContext()

	const { handleEdit } = useCollectionForms()

	let slots = {
		image: {
			enableGradient,
			enableOverlay,
			...defaultSlots.image,
		},
		content: {
			...defaultSlots.content,
		},
	}

	if (!product?.id) return null
	return (
		<PDP
			image={product?.image?.url}
			primary={product?.title}
			price={product?.display_price}
			compareAtPrice={product?.display_compare_at_price}
			description={product?.description}
			secondary={
				<Stack spacing={2} sx={{ width: '100%' }}>
					<Stack spacing={2} sx={{ width: '100%' }} alignItems="flex-start">
						{enableRatings == true && (
							<ProductRating resource={product} enableTotal />
						)}
					</Stack>
				</Stack>
			}
			actions={
				<SocialButtons
					size="large"
					justifyContent={'center'}
					resource={product}
					product={product}
					enableProductLikes={enableLikes}
					enableProductFavorites={enableFavorites}
					enableSharing={enableSharing}
				/>
			}
			addToCart={
				<Stack spacing={2}>
					<AddToCartButton availableForSale productId={product?.id} />
          {displayFields?.length > 0 && (
          <DisplayMetafields 
            fields={displayFields} 
            resource={product} 
          />
        )}
				</Stack>
			}
			secondaryAction={
				buttons && (
					<Box sx={sx.buttons}>
						<ButtonActions
							justifyContent={'flex-end'}
							buttons={buttons}
							resource={product}
						/>
					</Box>
				)
			}
			slots={slots}
		/>
	)
}

export default ProductDetails

const sx = {
	buttons: {
		width: '100%',
	},
	addToCart: {
		width: '100%',
		maxWidth: '300px',
	},
}
