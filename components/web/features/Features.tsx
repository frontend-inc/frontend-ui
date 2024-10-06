import React from 'react'
import { Container, Grid } from '../../../tailwind'
import Feature from './Feature'
import { Placeholder } from '../../../components'

export type FeaturesProps = {
	items: {
		icon?: any
		title?: string
		description?: string
	}[]
}

const Features: React.FC<FeaturesProps> = (props) => {
	const { items = [] } = props || {}

	return (
		<Container maxWidth="lg">
			<Grid container>
				{items?.map((item, i) => (
					<Grid item>
						<Feature
							icon={item?.icon}
							title={item?.title}
							description={item?.description}
						/>
					</Grid>
				))}
			</Grid>
			{items?.length == 0 && (
				<Placeholder
					icon="Zap"
					title="No features"
					description="No features to display."
				/>
			)}
		</Container>
	)
}

export default Features

const sx = {
	title: {
		width: '100%',
		textAlign: 'center',
	},
	item: {
		p: 2,
		maxWidth: 280,
	},
	grid: {
		display: 'grid',
		gridTemplateColumns: {
			md: '1fr 1fr 1fr',
			sm: '1fr 1fr',
			xs: '1fr',
		},
		gap: 2,
	},
}
