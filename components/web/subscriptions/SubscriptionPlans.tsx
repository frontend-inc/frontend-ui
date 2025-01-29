'use client'

import React from 'react'
import SubscriptionPlan from './SubscriptionCard'
import { PriceType } from '../../..'
import { Stack, Empty } from '../..'

export type SubscriptionPlansProps = {
	items: PriceType[]
	precision?: number
	variant?: 'default' | 'outline' | 'fill' | 'shadow'
	handleClick: (item: PriceType) => void
}

const SubscriptionPlans: React.FC<SubscriptionPlansProps> = (props) => {
	const { items, precision, variant, handleClick } = props || {}

	return (
		<div className="flex flex-col space-y-2 p-3">
			<div className="flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0">
				{items?.map((item, index) => (
					<SubscriptionPlan
						key={index}
						precision={precision}
						variant={variant}
						handleClick={handleClick ? () => handleClick(item) : undefined}
						{...item}
					/>
				))}
			</div>
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
