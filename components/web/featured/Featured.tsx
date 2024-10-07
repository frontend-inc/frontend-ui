import React from 'react'
import { Stack } from '../../../tailwind'
import { Container, Placeholder } from '../../../components'
import FeaturedCard from './FeaturedCard'

export type FeaturedProps = {
	items: {
		icon?: string
		label?: string
		title?: string
		description?: string
		image?: string
		buttonText?: string
		path?: string
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
		<Container maxWidth="md">
			<Stack spacing={6}>
				{items?.map((item, i) => (
					<FeaturedCard
						key={i}
						label={item?.label}
						title={item?.title}
						description={item?.description}
						image={item?.image}
						buttonText={item?.buttonText}
						href={item?.path}
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
		</Container>
	)
}

export default Featured
