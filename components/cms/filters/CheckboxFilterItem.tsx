import React from 'react'
import {
	ListItem,
	ListItemButton,
	Typography,
	ListItemIcon,
	ListItemText,
	Checkbox,
} from '@mui/material'
import { OptionType } from '../../../types'

type CheckboxFilterItemProps = {
	label?: string
	option: OptionType
	values?: any
	handleClick: () => void
}

const CheckboxFilterItem: React.FC<CheckboxFilterItemProps> = (props) => {
	const { values = [], option, handleClick } = props

	return (
		<ListItem disableGutters disablePadding>
			<ListItemButton sx={sx.listItemButton} onClick={handleClick}>
				<ListItemIcon>
					<Checkbox checked={values.includes(option.value)} color="primary" />
				</ListItemIcon>
				<ListItemText
					primary={
						<Typography color="text.primary" variant="button">
							{option?.label}
						</Typography>
					}
				/>
			</ListItemButton>
		</ListItem>
	)
}

export default CheckboxFilterItem

const sx = {
	listItemButton: {
		p: 0,
	},
}
