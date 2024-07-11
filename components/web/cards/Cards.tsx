import React from 'react'
import { Box, Grid, Stack } from '@mui/material'
import { CollectionCard, Placeholder } from '../../../components'
import { useRouter } from 'next/router'

type CardType = {
	label?: string
	title?: string
	description: string
	image: string
	buttonText?: string
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

	const {
		style = 'card',
		items,
		enableBorder,
		enableGradient,
		enableOverlay,
	} = props || {}

	const handleClick = (card: CardType) => {
		if (card?.url) {
			router.push(card.url)
		}
	}

	return (
		<Box>
			<Grid container spacing={2}>
				{items?.map((card, i) => (
					<Grid item xs={12} sm={4} md={4} key={i}>
						<CollectionCard
							actions={[]}
							style={style}
							resource={{
								...card,
								image: {
									url: card?.image,
								},
							}}
							displayFields={[]}
							handleClick={() => handleClick(card)}
							enableBorder={enableBorder}
							enableGradient={enableGradient}
							enableOverlay={enableOverlay}
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
