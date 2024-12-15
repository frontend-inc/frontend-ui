'use client'

import React from 'react'
import SubscriptionPlan from './SubscriptionPlan'
import { PriceType } from '../../..'
import { Stack, Empty } from '../..'

export type SubscriptionPlansProps = {
	items: PriceType[]
  precision?: number
  variant?: 'outline' | 'fill' | 'default'
}

const SubscriptionPlans: React.FC<SubscriptionPlansProps> = (props) => {

	const { 
    items, 
    precision,
    variant
  } = props || {}

	return (
		<div className="flex flex-col space-y-2 p-3">
			<Stack direction="row" spacing={4}>
				{items?.map((item, index) => (
					<SubscriptionPlan
						key={index}
            precision={precision}
            variant={variant}
            { ...item }	
					/>
				))}
			</Stack>
			{items?.length === 0 && (
				<Empty
					icon="ri-bank-card-fill"
					title="No subscription plans"
					description="Subscription plans will appear here."
				/>
			)}
		</div>
	)
}

export default SubscriptionPlans
