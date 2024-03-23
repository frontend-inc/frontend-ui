import React, { useEffect } from 'react'
import {
	getMetafieldValue,
	getMetafieldType,
	MetafieldIdentifierType,
} from 'frontend-shopify'
import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	Box,
	Typography,
} from '@mui/material'
import { MetafieldRichText } from '../../../shopify'
import { Icon } from '../../../ui'
import { useProducts } from 'frontend-shopify'

const PLAIN_TEXT_TYPES = ['single_line_text_field', 'multi_line_text_field']
const RICH_TEXT_TYPES = ['rich_text_field']

type ProductMetafieldsProps = {
	handle: string
	metafields: MetafieldIdentifierType[]
}

const ProductMetafields: React.FC<ProductMetafieldsProps> = (props) => {
	const { handle, metafields } = props

	const { product, findProduct } = useProducts()

	useEffect(() => {
		if (handle && metafields) {
			findProduct(handle, metafields)
		}
	}, [handle, metafields])

	if (!product || !metafields) return null
	return (
		<Box sx={sx.root}>
			{product &&
				metafields?.map((metafield, index) => {
					const { label, key } = metafield
					const type = getMetafieldType(product, key)
					const value = getMetafieldValue(product, key)
					return (
						<Accordion sx={sx.accordion} elevation={0}>
							<AccordionSummary expandIcon={<Icon name="Plus" />}>
								<Typography variant="subtitle2">{label}</Typography>
							</AccordionSummary>
							<AccordionDetails>
								{PLAIN_TEXT_TYPES.includes(type) && (
									<Typography variant="body1" color="textSecondary">
										{value}
									</Typography>
								)}
								{RICH_TEXT_TYPES.includes(type) && (
									<MetafieldRichText value={value} />
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

export default ProductMetafields

const sx = {
	root: {
		my: 2,
	},
	accordion: {
		borderTop: '1px solid',
		borderColor: 'divider',
		my: '0px !important',
	},
}
