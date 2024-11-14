'use client'

import React from 'react'
import PricingCard from './PricingCard'
import { PriceType } from '../../..'
import { Placeholder } from '../..'

export type PricingProps = {
	items: PriceType[]
}

const Pricing: React.FC<PricingProps> = (props) => {
	const { items } = props

	return (
		<div className="flex flex-col space-y-2 p-3">
			<div className="flex sm:flex-row flex-col space-y-1 sm:space-y-0 sm:space-x-1">
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
			</div>
			{items?.length === 0 && (
				<Placeholder
					icon="ri-bank-card-fill"
					title="No subscription plans"
					description="Subscription plans will appear here."
				/>
			)}
		</div>
	)
}

export default Pricing
