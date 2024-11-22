'use client'

import React from 'react'
import { Card, Alert, Button } from '../..'
import { useNavigate } from '../../../hooks'
import { BlurFade } from '../../../components'

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
}

const Cards: React.FC<CardsProps> = (props) => {
	const { items, enableGradient, enableOverlay } = props || {}

	const onClick = useNavigate()

	return (
		<div className="w-full justify-center flex flow-row">
      <div className="container mx-auto max-w-screen-2xl">
			<div 
        className={           
          "w-full justify-center grid grid-cols-1 sm:grid-cols-3 gap-6"
        }>
				{items?.map((item, idx) => (
					<BlurFade delay={0.25 + idx * 0.05} key={idx}>
						<Card
              label={ item?.label }
							image={item?.image}
							title={item?.title}
							subtitle={item?.subtitle}
							actions={
								item?.buttonText && (
									<Button fullWidth onClick={() => onClick(item?.path)}>
										{item?.buttonText}
									</Button>
								)
							}
							handleClick={() => onClick(item?.path)}
              enableGradient={enableGradient}
              enableOverlay={enableOverlay}							
						/>
					</BlurFade>
				))}
			</div>
			{items?.length == 0 && (
				<Alert
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
