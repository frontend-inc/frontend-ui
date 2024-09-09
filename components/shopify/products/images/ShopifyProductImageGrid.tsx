import React from 'react'
import { CardActionArea, Grid } from '@mui/material'
import { Image } from '../../../../components'

type ShopifyProductImageGridProps = {
	images: any
	loading?: boolean
	handleClick: any
	itemWidth?: number
	itemHeight?: number
	numSkeletons?: number
	xs?: number
	sm?: number
	md?: number
	lg?: number
}

const ShopifyProductImageGrid: React.FC<ShopifyProductImageGridProps> = (
	props
) => {
	const {
		images,
		handleClick,
		itemWidth = 500,
		xs = 12,
		sm = 6,
		md = 6,
		lg = 6,
	} = props

	return (
		<Grid container spacing={1}>
			{images?.map((image, i) => (
				<Grid item key={i} xs={xs} sm={sm} md={md} lg={lg}>
					<CardActionArea sx={sx.cardActionArea} onClick={() => handleClick(i)}>
						<Image src={image} height={itemWidth} />
					</CardActionArea>
				</Grid>
			))}
		</Grid>
	)
}

export default ShopifyProductImageGrid

const sx = {
	cardActionArea: {
		p: 0,
		overflow: 'hidden',
	},
}
