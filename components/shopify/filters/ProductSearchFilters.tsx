import React from 'react'
import ProductFiltersList from './ProductFiltersList'
import { SearchFilterType, SearchFilterOptionType } from 'frontend-shopify'
import { Button, Hidden } from '@mui/material'
import { Icon, Drawer } from '../..'
import { useMenu } from '../../../hooks'

type ProductFilterButtonProps = {
	filters: SearchFilterType[]
  options: SearchFilterOptionType[]  
	handleFilter: (filter: SearchFilterType) => void	
  handleFilterArray: (filter: SearchFilterType) => void	
}

const ProductSearchFilters: React.FC<ProductFilterButtonProps> = (props) => {

	const {
		filters = [],
    options = [],
		handleFilter,
		handleFilterArray		
	} = props

  const { open, toggleMenu, closeMenu, anchorEl} = useMenu()

	return (
    <>
      <Hidden smDown>
        <ProductFiltersList 
          filters={filters}
          options={ options }      
          handleFilter={handleFilter}
          handleFilterArray={handleFilterArray}      
        />
      </Hidden>
      <Hidden smUp>
        <Button
          sx={ sx.button }
          onClick={toggleMenu}
          variant="text"
          startIcon={<Icon name="SlidersHorizontal" size={20} />}
        >
          Filters
        </Button>
        <Drawer           
          open={open} 
          handleClose={closeMenu}           
          anchorEl={anchorEl} 
          anchor="right"
        >
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

export default ProductSearchFilters

const sx = {
  button: {
    width: '100%',
    color: 'text.primary',
    bgcolor: 'tertiary.main',
    '&:hover': {
      bgcolor: 'tertiary.dark'
    }    
  }
}
