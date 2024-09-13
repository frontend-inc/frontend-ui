import React from 'react'
import { ButtonType, DisplayFieldType } from '../../../types'
import { PDP } from '../..'
import { useForms } from '../../../hooks'
import { useResourceContext } from 'frontend-js'
import {
	ProductRating,
	DisplayFields,
	ButtonActions,
	SocialButtons,
	ExpandableText,
  AddToCartButton
} from '../..'
import { buildActions } from '../../../helpers'
import { Box, Stack } from '@mui/material'

export type ProductDetailsProps = {
	handle?: string
	buttons: ButtonType[]
	displayFields: DisplayFieldType[]
	product: any
	enableEdit?: boolean
	enableCreate?: boolean
	enableFavorites?: boolean
	enableLikes?: boolean
	enableSharing?: boolean
	enableRatings?: boolean
	enableAddToList?: boolean
	enableUsers?: boolean
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
		enableEdit,
		enableFavorites,
		enableLikes,
		enableSharing,
		enableRatings,
		enableAddToList,
		enableGradient,
		enableOverlay,
		slots: defaultSlots = {
			image: {},
			content: {},
		},
	} = props || {}

	const { resource: product } = useResourceContext()

	const { handleEdit } = useForms()

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
						{displayFields?.length > 0 && (
							<DisplayFields fields={displayFields} resource={product} />
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
					enableAddToList={enableAddToList}
				/>
			}
      addToCart={
        <Box sx={ sx.addToCart }>
          <AddToCartButton 
            availableForSale
            productId={ product?.id } 
          />
        </Box>
      }
			secondaryAction={
				(buttons || enableEdit) && (
					<Box sx={sx.buttons}>
						<ButtonActions
							justifyContent={'flex-end'}
							buttons={buildActions({
								enableEdit,
								handleEdit: () => handleEdit(product),
								buttons,
							})}
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
  }
}
