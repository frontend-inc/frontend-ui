import React, { useEffect } from 'react'
import {
	getMetafieldValue,
	getMetafieldType,
	ShopifyMetafieldType,
} from 'frontend-shopify'
import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	Box,
	Typography,
} from '@mui/material'
import { ShopifyMetafieldRichText } from '../../../shopify'
import { Icon } from '../../../ui'
import { useProducts } from 'frontend-shopify'

const PLAIN_TEXT_TYPES = ['single_line_text_field', 'multi_line_text_field']
const RICH_TEXT_TYPES = ['rich_text_field']

export type ShopifyProductMetafieldsProps = {
	shopifyProduct: any
	metafields: ShopifyMetafieldType[]
}

const ShopifyProductMetafields: React.FC<ShopifyProductMetafieldsProps> = (
	props
) => {
	const { shopifyProduct, metafields } = props

	const { product, findProduct } = useProducts()

	useEffect(() => {
		if (shopifyProduct && metafields) {
			const metafieldIdentifiers = metafields?.map((metafield) => ({
				namespace: metafield.name.split('.')[0],
				key: metafield.name.split('.')[1],
			}))
			findProduct(shopifyProduct?.handle, metafieldIdentifiers)
		}
	}, [shopifyProduct, metafields])

	if (!product || !metafields) return null
	return (
		<Box sx={sx.root}>
			{product &&
				metafields?.map((metafield, index) => {
					const { label, name } = metafield
					const key = name.split('.')[1]
					const type = getMetafieldType(product, key)
					const value = getMetafieldValue(product, key)

					return (
						<Accordion sx={sx.accordion} elevation={0} key={index}>
							<AccordionSummary
								sx={sx.accordionSummary}
								expandIcon={<Icon name="Plus" />}
							>
								<Typography variant="subtitle2">{label}</Typography>
							</AccordionSummary>
							<AccordionDetails>
								{PLAIN_TEXT_TYPES.includes(type) && (
									<Typography variant="body1" color="textSecondary">
										{value}
									</Typography>
								)}
								{RICH_TEXT_TYPES.includes(type) && (
									<ShopifyMetafieldRichText value={value} />
								)}
								{!value && (
									<Typography variant="body1" color="textSecondary">
										Information coming soon.
									</Typography>
								)}
							</AccordionDetails>
						</Accordion>
					)
				})}
		</Box>
	)
}

export default ShopifyProductMetafields

const sx = {
	root: {
		my: 2,
		borderRadius: 0,
	},
	accordionSummary: {
		borderTop: '1px solid',
		borderColor: 'divider',
	},
	accordion: {
		borderColor: 'divider',
		my: '0px !important',
	},
}
