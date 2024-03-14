import React from 'react'
import { Popup } from '../..'
import { useMenu } from '../../../hooks'
import { Button } from '@mui/material'
import { ListFilter } from 'lucide-react'
import ProductFiltersList from './ProductFiltersList'
import { SearchFilterType } from 'frontend-shopify'
import { SHOPIFY_SEARCH_FILTERS } from '../../../constants'

type ProductFilterButtonProps = {
	filters: SearchFilterType[]	
  options: SearchFilterType[]  
	handleFilter: (filter: SearchFilterType) => void
  handleFilterArray: (filter: SearchFilterType) => void
  filterOptions: { 
    label: string
    name: string
    value: string | number    
  }[]
}

const ProductFilterButton: React.FC<ProductFilterButtonProps> = (props) => {

  const { open, toggleMenu, closeMenu, anchorEl} = useMenu()

	const {
		filters = [],		
    options=[],
    handleFilter,
    handleFilterArray,
    filterOptions=SHOPIFY_SEARCH_FILTERS 	
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
			<Popup anchorEl={anchorEl} open={open} handleClose={closeMenu} p={1}>
        <ProductFiltersList 
          filters={filters}
          options={options}
          handleFilter={handleFilter}
          handleFilterArray={handleFilterArray}
          filterOptions={filterOptions}
        />
			</Popup>
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
