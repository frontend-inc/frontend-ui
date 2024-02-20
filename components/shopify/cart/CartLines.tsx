import React from 'react'
import { useCart } from 'frontend-shopify'
import { List } from '@mui/material'
import { CartLine } from '../../../components/shopify'

const CartLines: React.FC = (props) => {
	const { cart } = useCart()
	const lines = cart?.lines?.edges.map((e) => e.node) || []

	return (
		<List sx={sx.root} disablePadding>
			{lines?.map((line) => (
				<CartLine key={line.id} line={line} />
			))}
		</List>
	)
}

export default CartLines

const sx = {
	root: {
		width: '100%',
	},
	empty: {
		textAlign: 'center',
	},
}
