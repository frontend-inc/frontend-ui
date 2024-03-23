import React, { useState } from 'react'
import { Box, Button, Popover } from '@mui/material'
import { ExpandLess, ExpandMore } from '@mui/icons-material'
import PriceRangeInput from './PriceRangeInput'

type PriceFilterButtonProps = {
	value: any
	handleChange: any
	label: string
	minPrice: number
	maxPrice: number
}

const PriceFilterButton: React.FC<PriceFilterButtonProps> = (props) => {
	const { value, handleChange, label, minPrice, maxPrice } = props || {}

	const [anchorEl, setAnchorEl] = useState(null)
	const open = Boolean(anchorEl)

	const handleButtonClick = (event) => {
		setAnchorEl(event.currentTarget)
	}

	const handleClose = () => {
		setAnchorEl(null)
	}

	return (
		<Box>
			<Button
				id="filter-button"
				aria-controls="filter-menu"
				aria-haspopup="true"
				aria-expanded={open ? 'true' : undefined}
				onClick={handleButtonClick}
				endIcon={open ? <ExpandLess /> : <ExpandMore />}
			>
				{label}
			</Button>
			<Popover
				id="filter-menu"
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
				anchorOrigin={{
					vertical: 'bottom',
					horizontal: 'left',
				}}
			>
				<PriceRangeInput
					handleChange={handleChange}
					minPrice={minPrice}
					maxPrice={maxPrice}
					value={value}
				/>
			</Popover>
		</Box>
	)
}

export default PriceFilterButton
