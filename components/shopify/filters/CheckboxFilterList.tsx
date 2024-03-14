import React from 'react'
import {
	Box,  
	MenuItem,
	Typography,
  List,
  ListItem,
  ListItemButton,
	ListItemIcon,
	ListItemText,
	Checkbox,
} from '@mui/material'
import { SearchFilterType } from 'frontend-shopify'

type CheckboxFilterListProps = {
  filters: SearchFilterType[]
	options: SearchFilterType[]	
	handleClick: (filter: SearchFilterType) => void
}

const CheckboxFilterList: React.FC<CheckboxFilterListProps> = (props) => {
	const { filters = [], options = [], handleClick } = props
  let values = filters.map(f => f.value)
	return (
		<List disablePadding>
			{options?.map((option, index) => (
				<ListItem disablePadding key={index}>
          <ListItemButton sx={ sx.listItemButton } onClick={() => handleClick(option)}>
					<ListItemIcon>
						<Checkbox checked={values?.includes(option.value)} color="primary" />
					</ListItemIcon>
					<ListItemText
						primary={
              <Typography 
                variant="button" 
                color='text.primary'
              >
                {option.value}
              </Typography>
            }
					/>
          </ListItemButton>
				</ListItem>
			))}
		</List>
	)
}

export default CheckboxFilterList

const sx = {
  listItemButton: {
    py: 0
  }
}
