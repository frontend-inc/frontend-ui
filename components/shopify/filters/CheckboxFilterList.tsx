import React from 'react'
import {
	Box,
	MenuItem,
	Typography,
	ListItemIcon,
	ListItemText,
	Checkbox,
} from '@mui/material'

type CheckboxFilterListProps = {
	options: string[]
	values?: any
	handleClick: (value: string | number) => void
}

const CheckboxFilterList: React.FC<CheckboxFilterListProps> = (props) => {
	const { values = [], options, handleClick } = props
	return (
		<Box>
			{options?.map((option, index) => (
				<MenuItem key={index} onClick={() => handleClick(option)}>
					<ListItemIcon>
						<Checkbox checked={values?.includes(option)} color="primary" />
					</ListItemIcon>
					<ListItemText
						primary={<Typography variant="button">{option}</Typography>}
					/>
				</MenuItem>
			))}
		</Box>
	)
}

export default CheckboxFilterList
