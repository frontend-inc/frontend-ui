import React from 'react'
import {
	Typography,
  Checkbox,
  List,
  ListItem,
  ListItemButton,
	ListItemIcon,
	ListItemText,	
} from '@mui/material'
import { 
  SearchFilterOptionType,  
  SearchFilterType, 
} from 'frontend-shopify'
import { formatCurrency } from 'frontend-shopify'

type CheckboxPriceRangeInputProps = {
  filters: SearchFilterType[]
	options: PriceOptionType[]
	handleClick: (filter: SearchFilterType) => void
}

const CheckboxPriceRangeInput: React.FC<CheckboxPriceRangeInputProps> = (props) => {
	const { filters = [], options, handleClick } = props
  let values = filters.map(f => f.value)

  const handleFilterClick = (value) => {
    handleClick({
      name: 'price',
      value: value
    })
  } 

  if(!options?.length > 0) return null;
	return (
		<List disablePadding>
			{options?.map((priceOption, index) => (
				<ListItem disablePadding key={index}>
          <ListItemButton sx={ sx.listItemButton } onClick={() => handleFilterClick(priceOption) }>
					<ListItemIcon>
						<Checkbox checked={values?.includes(priceOption)} color="primary" />
					</ListItemIcon>
					<ListItemText
						primary={
              <Typography 
                variant="button" 
                color='text.primary'
              >
                {formatCurrency(priceOption.min, 0)} - {formatCurrency(priceOption.max, 0)}
              </Typography>
            }
					/>
          </ListItemButton>
				</ListItem>
			))}
		</List>
	)
}

export default CheckboxPriceRangeInput

const sx = {
  listItemButton: {
    py: 0
  }
}
