import React from 'react'
import { Box, Typography } from '@mui/material'
import { Drawer } from '../../../components'
import PriceRangeInput from './PriceRangeInput'

type MobileFilterDrawerProps = {
	open: boolean
	handleClose: () => void
	priceRange: number[]
	handlePriceChange: (event: any, newValue: number | number[]) => void
	minPrice: number
	maxPrice: number
}

const MobileFilterDrawer: React.FC<MobileFilterDrawerProps> = (props) => {
	// Price props
	const {
		open,
		handleClose,
		priceRange,
		handlePriceChange,
		minPrice,
		maxPrice,
	} = props || {}

	return (
		<Drawer
			open={open}
			handleClose={handleClose}
			title={'Filters'}
			anchor="right"
		>
			<Box sx={sx.heading}>
				<Typography variant="overline" sx={sx.title}>
					Price
				</Typography>
			</Box>
			<PriceRangeInput
				handleChange={handlePriceChange}
				minPrice={minPrice}
				maxPrice={maxPrice}
				value={priceRange}
			/>
		</Drawer>
	)
}

export default MobileFilterDrawer

const sx = {
	root: {},
	mobileDrawer: {
		width: {
			xs: '270px',
			sm: '360px',
		},
	},
	title: {
		ml: 2,
		mb: 0,
		p: 0,
	},
	heading: {
		mt: 4,
	},
}
