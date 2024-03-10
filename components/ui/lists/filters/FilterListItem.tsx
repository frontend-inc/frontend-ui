import React from 'react'
import {
	ListItem,
	ListItemButton,
	Typography,
	ListItemIcon,
	ListItemText,
	Checkbox,
} from '@mui/material'
import { OptionType } from '../../../../types'

type FilterListItemProps = {
	label?: string
	option: OptionType
	values?: any
	handleClick: () => void
}

const FilterListItem: React.FC<FilterListItemProps> = (props) => {
	const { values = [], option, handleClick } = props

	return (
		<ListItem disableGutters disablePadding>
			<ListItemButton sx={sx.listItemButton} onClick={handleClick}>
				<ListItemIcon>
					<Checkbox checked={values.includes(option.value)} color="primary" />
				</ListItemIcon>
				<ListItemText
					primary={<Typography variant="button">{option?.label}</Typography>}
				/>
			</ListItemButton>
		</ListItem>
	)
}

export default FilterListItem

const sx = {
	listItemButton: {
		p: 0,
	},
}
