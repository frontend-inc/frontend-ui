import React from 'react'
import { Drawer, Popup } from '../..'
import { useMenu } from '../../../hooks'
import { Button, Hidden } from '@mui/material'
import { ListFilter } from 'lucide-react'
import ProductFiltersList from './ProductFiltersList'
import { SearchFilterType } from 'frontend-shopify'

type ProductFilterButtonProps = {
	filters: SearchFilterType[]	
  options: SearchFilterType[]  
	handleFilter: (filter: SearchFilterType) => void
  handleFilterArray: (filter: SearchFilterType) => void  
}

const ProductFilterButton: React.FC<ProductFilterButtonProps> = (props) => {

  const { open, toggleMenu, closeMenu, anchorEl} = useMenu()

	const {
		filters = [],		
    options=[],
    handleFilter,
    handleFilterArray,    
  } = props

	return (
		<>
			<Button
				sx={sx.button}
				onClick={toggleMenu}
				color="secondary"
				startIcon={<ListFilter />}
			>
				Filter
			</Button>
      <Hidden smDown>
        <Popup anchorEl={anchorEl} open={open} handleClose={closeMenu} p={1}>
          <ProductFiltersList 
            filters={filters}
            options={options}
            handleFilter={handleFilter}
            handleFilterArray={handleFilterArray}          
          />
        </Popup>
      </Hidden>
      <Hidden smUp>
        <Drawer anchorEl={anchorEl} open={open} handleClose={closeMenu} p={1}>
          <ProductFiltersList 
            filters={filters}
            options={options}
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
		color: 'text.primary',
    bgcolor: 'tertiary.main',
    '&:hover': {
      bgcolor: 'tertiary.light'
    }
	},
}
