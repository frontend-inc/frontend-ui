import React from 'react'
import { Box, Grid, Stack } from '@mui/material'
import { Heading, CollectionCard, Placeholder } from '../../../components'
import { useRouter } from 'next/router'

type CardType = {
	title: string
	description: string
	image: string
	buttonText?: string
	url?: string
}

type CardsProps = {
	title?: string
	layout?: 'grid' | 'list'
	style?: 'avatar' | 'card' | 'cover'
	items: CardType[]
	enableBorder?: boolean
	enableGradient?: boolean
	enableOverlay?: boolean
}

const Cards: React.FC<CardsProps> = (props) => {
	const router = useRouter()

	const {
		title,
		layout = 'grid',
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
			{title && <Heading title={title} />}
			{layout == 'list' && (
				<Stack spacing={2}>
					{items?.map((card, i) => (
						<CollectionCard
							key={i}
							layout={layout}
							style={style}
							title={card?.title}
							description={card?.description}
							image={card?.image}
							buttonText={card?.buttonText}
							handleClick={() => handleClick(card)}
							enableBorder={enableBorder}
							enableGradient={enableGradient}
							enableOverlay={enableOverlay}
						/>
					))}
				</Stack>
			)}
			{layout == 'grid' && (
				<Grid container spacing={2}>
					{items.map((card, i) => (
						<Grid item xs={12} sm={4} md={4} key={i}>
							<CollectionCard
								layout={layout}
								style={style}
								image={card?.image}
								title={card?.title}
								description={card?.description}
								buttonText={card?.buttonText}
								handleClick={() => handleClick(card)}
								enableBorder={enableBorder}
								enableGradient={enableGradient}
								enableOverlay={enableOverlay}
							/>
						</Grid>
					))}
				</Grid>
			)}
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
