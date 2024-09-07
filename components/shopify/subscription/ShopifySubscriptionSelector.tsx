import React, { useState, useEffect } from 'react'
import { Typography, Select, FormControl, MenuItem } from '@mui/material'
import { getSellingPlanDescription } from 'frontend-shopify'
import { ProductType } from 'frontend-shopify'

type ShopifySubscriptionSelectorProps = {
	product: ProductType
	handleChange: any
	activeSellingPlanId?: string
}

const ShopifySubscriptionSelector: React.FC<ShopifySubscriptionSelectorProps> = (props) => {
	const { product, activeSellingPlanId = '', handleChange } = props
	const [sellingPlans, setSellingPlans] = useState<any>(null)

	useEffect(() => {
		if (product) {
			const subscriptions =
				// @ts-ignore
				product?.sellingPlanGroups?.edges[0]?.node?.sellingPlans?.edges //@ts-ignore
					?.map(({ node }) => node)
			setSellingPlans(subscriptions)
		}
	}, [product])

	if (!sellingPlans || sellingPlans?.length == 0) return null
	return (
		<FormControl variant="outlined" sx={sx.root}>
			<Select onChange={handleChange} value={activeSellingPlanId || ''}>
				<MenuItem value={''}>
					<Typography variant="body1" sx={sx.emptySelect}>
						No subscription
					</Typography>
				</MenuItem>
				{sellingPlans?.map((sellingPlan) => (
					<MenuItem key={sellingPlan.id} value={sellingPlan.id}>
						{sellingPlan?.name} - {getSellingPlanDescription(sellingPlan)}
					</MenuItem>
				))}
			</Select>
		</FormControl>
	)
}

export default ShopifySubscriptionSelector

const sx = {
	root: {
		width: '100%',
	},
	emptySelect: {
		color: 'text.secondary',
		fontStyle: 'italic',
	},
}
