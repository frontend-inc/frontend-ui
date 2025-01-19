'use client'

import React from 'react'
import { Empty } from '../../../components'
import FeaturedCardItem from './FeatureCardItem'
import { BlurFade } from '../../../components'

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
	variant?: 'default' | 'fill' | 'outline'
}

const FeatureCards: React.FC<FeatureCardsProps> = (props) => {
	const { items = [], variant, enableGradient, enableOverlay } = props || {}

	return (
		<div className="container mx-auto max-w-screen-lg">
			<div className="w-full flex flex-col space-y-10 p-2">
				{items?.map((item, i) => (
					<BlurFade delay={0.25} inView key={i}>
						<FeaturedCardItem
							label={item?.label}
							title={item?.title}
							subtitle={item?.subtitle}
							image={item?.image}
							buttonText={item?.buttonText}
							href={item?.path}
							direction={i % 2 === 0 ? 'row' : 'row-reverse'}
							enableGradient={enableGradient}
							enableOverlay={enableOverlay}
							variant={variant}
						/>
					</BlurFade>
				))}
			</div>
			{items?.length == 0 && (
				<Empty
					icon="ri-list-check-line"
					title="No featured content."
					description="Your featured content will appear here."
				/>
			)}
		</div>
	)
}

export default FeatureCards
