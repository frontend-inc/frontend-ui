'use client'

import React from 'react'
import { Swipeable, Empty } from '../../../components'
import FeaturedCard from './FeatureCard'
import { BlurFade } from '../../../components'

export type FeatureCardsProps = {
  layout?: 'grid' | 'carousel'
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
	const {
    layout,
		items = [],
		variant,
		enableGradient,
		enableOverlay,
	} = props || {}

	return (
		<div className="container mx-auto max-w-screen-lg">
      { layout == 'grid' ? (
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
							enableGradient={enableGradient}
							enableOverlay={enableOverlay}
							variant={variant}
						/>
					</BlurFade>
				))}
			</div>
      ):(
        <Swipeable enableArrows>
          {items?.map((item, i) => (
              <FeaturedCard
                label={item?.label}
                title={item?.title}
                subtitle={item?.subtitle}
                image={item?.image}
                buttonText={item?.buttonText}
                href={item?.path}
                enableGradient={enableGradient}
                enableOverlay={enableOverlay}
                variant={variant}
              />
          ))}
        </Swipeable>
      )}
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
