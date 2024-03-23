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
import { SearchFilterOptionType, SearchFilterType } from 'frontend-shopify'

type CheckboxFilterListProps = {
	filters: SearchFilterType[]
	option: SearchFilterOptionType
	handleClick: (filter: SearchFilterType) => void
}

const CheckboxFilterList: React.FC<CheckboxFilterListProps> = (props) => {
	const { filters = [], option, handleClick } = props
	let values = filters.map((f) => f.value)

	const handleFilterClick = (value) => {
		handleClick({
			name: option.name,
			value: value,
		})
	}

	if (!option || !(typeof option?.value == 'object')) return null
	return (
		<List disablePadding>
			{option?.value?.map((option, index) => (
				<ListItem disablePadding key={index}>
					<ListItemButton
						sx={sx.listItemButton}
						onClick={() => handleFilterClick(option)}
					>
						<ListItemIcon>
							<Checkbox checked={values?.includes(option)} color="primary" />
						</ListItemIcon>
						<ListItemText
							primary={
								<Typography variant="button" color="text.primary">
									{option}
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
		py: 0,
	},
}
