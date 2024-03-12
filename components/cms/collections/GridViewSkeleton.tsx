import React from 'react'
import {
	Grid,
	Card,
	CardActionArea,
	CardContent,
	Skeleton,
} from '@mui/material'

const GridViewSkeleton = ({
	xs = 12,
	sm = 6,
	md = 4,
	lg = 3,
	xl = 2,
	...props
}) => {
	return (
		<Grid item xs={xs} sm={sm} md={md} lg={lg} xl={xl}>
			<Card elevation={0} sx={sx.root}>
				<CardActionArea>
					<Skeleton variant="rectangular" width={'100%'} height={140} />
					<CardContent>
						<Skeleton height={20} width="60%" />
						<Skeleton height={20} width="80%" />
					</CardContent>
				</CardActionArea>
			</Card>
		</Grid>
	)
}

export default GridViewSkeleton

const sx = {
	root: {},
}
