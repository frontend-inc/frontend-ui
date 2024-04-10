import React from 'react'
import { Box, Grid } from '@mui/material'
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
		<>
			<Grid container spacing={0}>
				{items?.map((item, i) => (
					<Grid item xs={12} sm={4} md={4} key={i}>
						<Box sx={sx.item}>
							<Feature
								icon={item?.icon}
								title={item?.title}
								description={item?.description}
							/>
						</Box>
					</Grid>
				))}
			</Grid>
			{items?.length == 0 && (
				<Placeholder
					icon="Zap"
					title="No features"
					description="Your features will appear here."
				/>
			)}
		</>
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
	},
}
