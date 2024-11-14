'use client'

import React from 'react'
import { Placeholder } from '../..'
import FeaturedCard from './FeatureCard'
import { BlurFade } from '../..'

export type FeatureCardsProps = {
	items: {
		icon?: string
		label?: string
		title?: string
		subtitle?: string
		image?: string
		buttonText?: string
		path?: string
		url?: string
	}[]
	enableGradient?: boolean
	enableOverlay?: boolean
	enableBorder?: boolean
}

const FeatureCards: React.FC<FeatureCardsProps> = (props) => {
	const {
		items = [],
		enableBorder,
		enableGradient,
		enableOverlay,
	} = props || {}

	return (
		<div className="container mx-auto max-w-screen-lg">
			<div className="w-full flex flex-col space-y-10 p-2">
				{items?.map((item, i) => (
					<BlurFade delay={0.25} inView key={i}>
						<FeaturedCard
							label={item?.label}
							title={item?.title}
							subtitle={item?.subtitle}
							image={item?.image}
							buttonText={item?.buttonText}
							href={item?.path}
							flexDirection={i % 2 === 0 ? 'row' : 'row-reverse'}
							enableBorder={enableBorder}
							enableGradient={enableGradient}
							enableOverlay={enableOverlay}
						/>
					</BlurFade>
				))}
			</div>
			{items?.length == 0 && (
				<Placeholder
					icon="ri-list-check-line"
					title="No featured content."
					description="Your featured content will appear here."
				/>
			)}
		</div>
	)
}

export default FeatureCards
