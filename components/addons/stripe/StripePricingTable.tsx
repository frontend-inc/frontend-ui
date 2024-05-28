import React from 'react'
import { Box } from '@mui/material'

export type StripePricingTableProps = {
	pricingTableId: string
	publishableKey: string
}

// Script tag included in html head
// <script async src="https://js.stripe.com/v3/pricing-table.js"></script>

const StripePricingTable: React.FC<StripePricingTableProps> = (props) => {
	const { pricingTableId, publishableKey } = props
	if (!pricingTableId || !publishableKey) return null
	return (
		<Box sx={sx.root}>
			{/* @ts-ignore */}
			<stripe-pricing-table
				pricing-table-id={pricingTableId}
				publishable-key={publishableKey}
			/>
		</Box>
	)
}

export default StripePricingTable

const sx = {
	root: {
		width: '100%',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
}
