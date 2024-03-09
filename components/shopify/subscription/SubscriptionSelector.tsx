import React, { useState, useEffect } from 'react'
import { Typography, Select, FormControl, MenuItem } from '@mui/material'
import { getSellingPlanDescription } from 'frontend-shopify'
import { Product } from 'frontend-shopify'

type SubscriptionSelectorProps = {
	product: Product
	handleChange: any
	activeSellingPlanId?: string
}

const SubscriptionSelector: React.FC<SubscriptionSelectorProps> = (props) => {
	const { product, activeSellingPlanId = '', handleChange } = props
	const [sellingPlans, setSellingPlans] = useState<any>(null)

	useEffect(() => {
		if (product) {
      //@ts-ignore
			const subscriptions = product?.sellingPlanGroups?.edges[0]?.node?.sellingPlans?.edges //@ts-ignore
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

export default SubscriptionSelector

const sx = {
	root: {
		width: '100%',
	},
	emptySelect: {
		color: 'text.secondary',
		fontStyle: 'italic',
	},
}
