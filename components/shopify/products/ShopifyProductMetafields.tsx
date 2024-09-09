import React from 'react'
import {
	getMetafieldValue,
	getMetafieldType,
	ShopifyMetafieldType,
	ShopifyProductType,
} from 'frontend-shopify'
import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	Box,
	Typography,
} from '@mui/material'
import { ShopifyMetafieldRichText } from '../../shopify'
import { Icon } from '../../ui'

const PLAIN_TEXT_TYPES = ['single_line_text_field', 'multi_line_text_field']

const RICH_TEXT_TYPES = ['rich_text_field']

const SUPPORTED_METAFIELD_TYPES = [...PLAIN_TEXT_TYPES, ...RICH_TEXT_TYPES]

type ShopifyProductMetafieldsProps = {
	product: ShopifyProductType
	metafields: ShopifyMetafieldType[]
}

const ShopifyProductMetafields: React.FC<ShopifyProductMetafieldsProps> = (
	props
) => {
	const { product, metafields } = props

	return (
		<Box sx={sx.root}>
			{metafields?.map((metafield, index) => {
				const type = getMetafieldType(product, metafield.name)
				const value = getMetafieldValue(product, metafield.name)
				if (!SUPPORTED_METAFIELD_TYPES.includes(type)) return null
				return (
					<Accordion sx={sx.accordion} elevation={0} key={index}>
						<AccordionSummary expandIcon={<Icon name="ChevronDown" />}>
							<Typography variant="subtitle2" color="text.primary">
								{metafield.label}
							</Typography>
						</AccordionSummary>
						<AccordionDetails>
							{PLAIN_TEXT_TYPES.includes(type) && (
								<Typography variant="body1" color="text.secondary">
									{value}
								</Typography>
							)}
							{RICH_TEXT_TYPES.includes(type) && (
								<ShopifyMetafieldRichText value={value} />
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
	},
	accordion: {
		borderTop: '1px solid',
		borderColor: 'divider',
		my: '0px !important',
	},
}
