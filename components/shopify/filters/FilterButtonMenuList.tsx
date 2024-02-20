import React, { useState } from 'react'
import { Box, Button, Popover } from '@mui/material'
import { ExpandLess, ExpandMore } from '@mui/icons-material'
import MenuList from './SortList'

type FilterButtonProps = {
	value: any
	handleClick: any
	label: string
	options: any
	anchorVertical?: any
	anchorHorizontal?: any
}

const FilterButton: React.FC<FilterButtonProps> = (props) => {
	const {
		value,
		handleClick,
		label,
		options,
		anchorVertical = 'bottom',
		anchorHorizontal = 'left',
	} = props || {}

	const [anchorEl, setAnchorEl] = useState(null)
	const open = Boolean(anchorEl)

	const handleButtonClick = (event) => {
		setAnchorEl(event.currentTarget)
	}

	const handleMenuItemClick = (option) => {
		setAnchorEl(null)
		handleClick(option)
	}

	const handleClose = () => {
		setAnchorEl(null)
	}

	return (
		<Box>
			<Button
				onClick={handleButtonClick}
				endIcon={open ? <ExpandLess /> : <ExpandMore />}
			>
				{value ? value : label}
			</Button>
			<Popover
				id="filter-menu"
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
				anchorOrigin={{
					vertical: anchorVertical,
					horizontal: anchorHorizontal,
				}}
				//@ts-ignore
				slots={{ paper: { sx: sx.paper } }}
				sx={sx.popover}
			>
				<MenuList
					value={value}
					options={options}
					handleClick={handleMenuItemClick}
				/>
			</Popover>
		</Box>
	)
}

export default FilterButton

const sx = {
	paper: {},
	popover: {
		'& .MuiPopover-paper': {
			minWidth: '180px',
		},
	},
}
