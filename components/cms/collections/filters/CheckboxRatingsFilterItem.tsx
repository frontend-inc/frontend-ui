import React from 'react'
import {
	ListItem,
	ListItemButton,
	Typography,
	ListItemIcon,
	ListItemText,
	Checkbox,
  Rating,
} from '@mui/material'
import { OptionType } from '../../../../types'

type CheckboxRatingsFilterItemProps = {
	label?: string
	option: OptionType
	values?: any
	handleClick: () => void
}

const CheckboxRatingsFilterItem: React.FC<CheckboxRatingsFilterItemProps> = (props) => {
	const { values = [], option, handleClick } = props

	return (
		<ListItem disableGutters disablePadding>
			<ListItemButton sx={sx.listItemButton} onClick={handleClick}>
				<ListItemIcon>
					<Checkbox 
            checked={values.includes(option.value)} 
            color="primary" 
          />
				</ListItemIcon>
				<ListItemText
					primary={
            <Rating 
              readOnly 
              size="small"
              sx={ sx.rating } 
              value={ Number(option?.value) } 
            />
          }
				/>
			</ListItemButton>
		</ListItem>
	)
}

export default CheckboxRatingsFilterItem

const sx = {
	listItemButton: {
		p: 0,
	},
  rating: {
    color: 'primary.main'
  }
}
