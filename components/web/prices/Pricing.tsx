'use client'

import React from 'react'
import PricingCard from './PricingCard'
import { PriceType } from '../../..'
import { Stack, Empty } from '../..'

export type PricingProps = {
	items: PriceType[]
}

const Pricing: React.FC<PricingProps> = (props) => {
	const { items } = props

	return (
		<div className="flex flex-col space-y-2 p-3">
      <Stack direction="row" spacing={4}>
				{items?.map((item, index) => (
					<PricingCard
						key={index}
						label={item.label}
						title={item.title}
						price={item.price}
						popular={item.popular}
						interval={item.interval}
						recurring={item.recurring}
						features={item.features || []}
						path={item.path}
						url={item.url}
						buttonText={item.buttonText}
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

export default Pricing
