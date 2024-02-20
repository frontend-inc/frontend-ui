import React from 'react'
import { Box, Card, CardActionArea, CardContent, Skeleton } from '@mui/material'

const CarouselViewSkeleton: React.FC = () => {
	return (
		<Box sx={sx.root}>
			<Card
				elevation={0}
			>
				<CardActionArea disableRipple>
					<Skeleton
						variant="rectangular"
						width={'100%'}
						height={140}
					/>
					<CardContent>
						<Skeleton height={20} width="60%" />
						<Skeleton height={20} width="80%" />
					</CardContent>
				</CardActionArea>
			</Card>
		</Box>
	)
}

export default CarouselViewSkeleton

const sx = {
	root: {
		p: 2,
	},
}
