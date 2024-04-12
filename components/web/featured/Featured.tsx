import React from 'react'
import { Box, Stack } from '@mui/material'
import { Placeholder } from '../../../components'
import FeaturedCard from './FeaturedCard'

export type FeaturedProps = {
	items: {
		icon?: string
		title?: string
		description?: string
		image?: string
		buttonText?: string
		url?: string
	}[]
	enableGradient?: boolean
	enableOverlay?: boolean
	enableBorder?: boolean
}

const Featured: React.FC<FeaturedProps> = (props) => {
	const {
		items = [],
		enableBorder,
		enableGradient,
		enableOverlay,
	} = props || {}

	return (
		<Box>
			<Stack spacing={6}>
				{items?.map((item, i) => (
					<FeaturedCard
						title={item?.title}
						description={item?.description}
						image={item?.image}
						buttonText={item?.buttonText}
						href={item?.url}
						flexDirection={i % 2 === 0 ? 'row' : 'row-reverse'}
						enableBorder={enableBorder}
						enableGradient={enableGradient}
						enableOverlay={enableOverlay}
					/>
				))}
			</Stack>
			{items?.length == 0 && (
				<Placeholder
					icon="LayoutList"
					title="No featured content."
					description="Your featured content will appear here."
				/>
			)}
		</Box>
	)
}

export default Featured

const sx = {
	title: {
		width: '100%',
		textAlign: 'center',
	},
	item: {
		p: 2,
	},
}
