import React, { useState, useEffect } from 'react'
import {
	ListItem,
	ListItemButton,
	Typography,
	ListItemIcon,
	ListItemText,
	Checkbox,
} from '@mui/material'
import { formatCurrency } from 'frontend-shopify'

type CheckboxNumberRangeFilterItemProps = {
	label?: string
	option: {
		min: number
		max: number
	}
	values?: any
	handleClick: () => void
	enableCurrency?: boolean
}

const CheckboxNumberRangeFilterItem: React.FC<
	CheckboxNumberRangeFilterItemProps
> = (props) => {
	const { values = [], option, enableCurrency = false, handleClick } = props
	const [checked, setChecked] = useState(false)

	// Compare an array of min / max values to see if they are equal
	// to the option min / max pair
	const compareValues = (values, option) => {
		let isEqual = false
		values.forEach((value) => {
			if (value.sort().join(',') === option.sort().join(',')) {
				isEqual = true
			}
		})
		return isEqual
	}

	useEffect(() => {
		if (!option) return
		if (compareValues(values, [option.min, option.max])) {
			setChecked(true)
		} else {
			setChecked(false)
		}
	}, [values, option])

	return (
		<ListItem disableGutters disablePadding>
			<ListItemButton sx={sx.listItemButton} onClick={handleClick}>
				<ListItemIcon>
					<Checkbox checked={checked} color="primary" />
				</ListItemIcon>
				<ListItemText
					primary={
						enableCurrency ? (
							<Typography color="text.primary" variant="button">
								{formatCurrency(option?.min, 0)} -{' '}
								{formatCurrency(option?.max, 0)}
							</Typography>
						) : (
							<Typography color="text.primary" variant="button">
								{option?.min} - {option?.max}
							</Typography>
						)
					}
				/>
			</ListItemButton>
		</ListItem>
	)
}

export default CheckboxNumberRangeFilterItem

const sx = {
	listItemButton: {
		p: 0,
	},
}
