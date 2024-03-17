import React from 'react'
import {
	Typography,
  List,
  ListItem,
  ListItemButton,
	ListItemIcon,
	ListItemText,	
} from '@mui/material'
import { 
  PriceOptionType,  
  SearchFilterType, 
} from 'frontend-shopify'
import { formatCurrency } from 'frontend-shopify'
import { RadioButtonUnchecked, RadioButtonChecked } from '@mui/icons-material'

type RadioOptionProps = {
  priceOption: PriceOptionType
  values: string | number | PriceOptionType[]
  handleClick: (filter: SearchFilterType) => void
}

const RadioOption: React.FC<RadioOptionProps> = (props) => {

  const { priceOption, values, handleClick } = props
  return(
    <ListItem disablePadding>
      <ListItemButton sx={ sx.listItemButton } onClick={() => handleClick(priceOption) }>
      <ListItemIcon>
        { values?.includes(priceOption) ? 
          <RadioButtonChecked /> : 
          <RadioButtonUnchecked /> 
        } 						
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
  )
}

type RadioPriceRangeInputProps = {
  filters: SearchFilterType[]
	options: PriceOptionType[]
	handleClick: (filter: SearchFilterType) => void
}

const RadioPriceRangeInput: React.FC<RadioPriceRangeInputProps> = (props) => {
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
        <RadioOption 
          key={index} 
          priceOption={priceOption} 
          values={values} 
          handleFilterClick={handleFilterClick}
        />				
			))}
		</List>
	)
}

export default RadioPriceRangeInput

const sx = {
  listItemButton: {
    py: 0
  }
}
