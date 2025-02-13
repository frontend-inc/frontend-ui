'use client'

import React from 'react'
import { Card, Empty } from '../..'
import { Button } from '@nextui-org/react'
import { useNavigate } from '../../../hooks'
import { Swipeable, BlurFade } from '../../../components'

type CardType = {
	label?: string
	title: string
	subtitle?: string
	image: string
	buttonText?: string
	path: string
	url?: string
}

export type CardsProps = {
	style?: 'card' | 'cover'
	items: CardType[]
	enableGradient?: boolean
	enableOverlay?: boolean
	layout?: 'grid' | 'carousel'
}

type CardItemProps = {
	item: CardType
}

const CardItem: React.FC<CardItemProps> = (props) => {
	const { item } = props || {}

	return (
		<Card
			image={item?.image}
			title={item?.title}
			subtitle={item?.subtitle}
      buttonText={ item?.buttonText }
      path={ item?.path }						
		/>
	)
}

const Cards: React.FC<CardsProps> = (props) => {
	const { items, enableGradient, enableOverlay, layout = 'grid' } = props || {}

	const onClick = useNavigate()

	return (
		<div className="w-full justify-center flex flow-row">
			<div className="container mx-auto max-w-screen-2xl">
				{layout === 'carousel' ? (
					<Swipeable enableArrows itemsPerSlide={3} arrowHeight={40}>
						{items?.map((item, idx) => (
							<BlurFade delay={0.25 + idx * 0.05} inView key={idx}>
								<div className="py-2 w-full">
									<CardItem
										item={item}
									/>
								</div>
							</BlurFade>
						))}
					</Swipeable>
				) : (
					<div
						className={
							'w-full justify-center grid grid-cols-1 sm:grid-cols-3 gap-6'
						}
					>
						{items?.map((item, idx) => (
							<BlurFade delay={0.25 + idx * 0.05} inView key={idx}>
								<CardItem
									item={item}
								/>
							</BlurFade>
						))}
					</div>
				)}
				{items?.length === 0 && (
					<Empty
						icon="ri-stack-fill"
						title="No content yet."
						description="Your content will appear here."
					/>
				)}
			</div>
		</div>
	)
}

export default Cards
