import React from 'react'
import {
	ListItemText,
	ListItemIcon,
	Box,
	Radio,
	MenuItem,
	Typography,
} from '@mui/material'

type SortListProps = {
	enableIcons?: boolean
	value: any
	reverse?: any
	options: any
	handleClick: any
}

const SortList: React.FC<SortListProps> = (props) => {
	const { value, reverse, options, handleClick } = props || {}

	return (
		<Box sx={sx.root}>
			{options?.map((option, index) => (
				<MenuItem
					key={index}
					disableGutters
					selected={option.value === value && option.reverse === reverse}
					onClick={() => handleClick(option?.value, option?.reverse)}
				>
					<ListItemIcon sx={sx.listItemIcon}>
						<Radio
							checked={option.value == value && option.reverse == reverse}
							onChange={() => handleClick(option?.value, option?.reverse)}
						/>
					</ListItemIcon>
					<ListItemText
						primary={<Typography variant="button">{option?.label}</Typography>}
					/>
				</MenuItem>
			))}
		</Box>
	)
}

export default SortList

const sx = {
	root: {
		width: '100%',
	},
	icon: {
		color: 'primary.main',
		height: '20px',
		width: '20px',
	},
	listItemIcon: {
		justifyContent: 'center',
	},
}
