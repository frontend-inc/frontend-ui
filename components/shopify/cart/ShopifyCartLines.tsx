import React from 'react'
import { useCart } from 'frontend-shopify'
import { List } from '@mui/material'
import { ShopifyCartLine } from '../../../components/shopify'

const ShopifyCartLines: React.FC = (props) => {
	const { cart } = useCart()
	const lines = cart?.lines?.edges.map((e) => e.node) || []

	return (
		<List sx={sx.root} disablePadding>
			{lines?.map((line) => (
				<ShopifyCartLine key={line.id} line={line} />
			))}
		</List>
	)
}

export default ShopifyCartLines

const sx = {
	root: {
		width: '100%',
	},
	empty: {
		textAlign: 'center',
	},
}
