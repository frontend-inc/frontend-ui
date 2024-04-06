import React from 'react'
import { Drawer, Popup } from '../..'
import { useMenu } from '../../../hooks'
import { Button, Hidden } from '@mui/material'
import { ListFilter } from 'lucide-react'
import ProductFiltersList from './ProductFiltersList'
import {
	SearchFilterType,
	SearchFilterOptionType,
	PriceOptionType,
} from 'frontend-shopify'

type ProductFilterButtonProps = {
	filters: SearchFilterType[]
	options: SearchFilterOptionType[]
	priceOptions: PriceOptionType[]
	handleFilter: (filter: SearchFilterType) => void
	handleFilterArray: (filter: SearchFilterType) => void
}

const ProductFilterButton: React.FC<ProductFilterButtonProps> = (props) => {
	const { open, toggleMenu, closeMenu, anchorEl } = useMenu()

	const {
		filters = [],
		options = [],
		priceOptions = [],
		handleFilter,
		handleFilterArray,
	} = props

	return (
		<>
			<Button
				sx={sx.button}
				onClick={toggleMenu}
				color="secondary"
        variant="contained"
				startIcon={<ListFilter />}
			>
				Filter
			</Button>
			<Hidden smDown>
				<Popup anchorEl={anchorEl} open={open} handleClose={closeMenu} p={1}>
					<ProductFiltersList
						filters={filters}
						options={options}
						priceOptions={priceOptions}
						handleFilter={handleFilter}
						handleFilterArray={handleFilterArray}
					/>
				</Popup>
			</Hidden>
			<Hidden smUp>
				<Drawer open={open} handleClose={closeMenu}>
					<ProductFiltersList
						filters={filters}
						options={options}
						priceOptions={priceOptions}
						handleFilter={handleFilter}
						handleFilterArray={handleFilterArray}
					/>
				</Drawer>
			</Hidden>
		</>
	)
}

export default ProductFilterButton

const sx = {
	button: {
		width: {
			sm: 'auto',
			xs: '100%',
		},
	},
}
