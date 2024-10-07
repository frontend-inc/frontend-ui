import React from 'react'
import { Box, Grid } from '../../../tailwind'
import { Card, Placeholder } from '../..'
import { useRouter } from 'next/router'

type CardType = {
	label?: string
	title: string
	description: string
	image: string
	buttonText?: string
	path?: string
	url?: string
}

export type CardsProps = {
	style?: 'card' | 'cover'
	items: CardType[]
	enableBorder?: boolean
	enableGradient?: boolean
	enableOverlay?: boolean
}

const Cards: React.FC<CardsProps> = (props) => {
	const router = useRouter()

	const { items, enableGradient, enableOverlay } = props || {}

	const handleClick = (card: CardType) => {
		if (card?.path) {
			router.push(card.path)
		}
	}

	return (
		<Box>
			<Grid container spacing={1}>
				{items?.map((item, i) => (
					<Grid item xs={12} sm={6} md={4} key={i}>
						<Card
							image={item?.image}
							primary={item?.title}
							secondary={item?.description}
							handleClick={() => handleClick(item)}
							slots={{
								image: {
									enableGradient,
									enableOverlay,
								},
							}}
						/>
					</Grid>
				))}
			</Grid>
			{items?.length == 0 && (
				<Placeholder
					icon="Search"
					title="No content yet."
					description="Your content will appear here."
				/>
			)}
		</Box>
	)
}

export default Cards
