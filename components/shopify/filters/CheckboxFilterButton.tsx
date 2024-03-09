import React, { useState } from 'react'
import { Box, Button, Popover } from '@mui/material'
import { ExpandLess, ExpandMore } from '@mui/icons-material'
import CheckboxFilterList from './CheckboxFilterList'

type CheckboxFilterButtonProps = {
	values: any
	handleClick: any
	label: string
	options: any
}

const CheckboxFilterButton: React.FC<CheckboxFilterButtonProps> = (props) => {
	const { values, handleClick, label, options } = props

	const [anchorEl, setAnchorEl] = useState(null)
	const open = Boolean(anchorEl)
	const [timer, setTimer] = useState<any>()

	const handleButtonClick = (event) => {
		setAnchorEl(event.currentTarget)
	}

	const handleMenuItemClick = (ev, value) => {
		clearTimeout(timer)
		handleClick(value)
		setTimer(setTimeout(() => setAnchorEl(null), 2000))
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
				<CheckboxFilterList
					options={options}
					values={values}
					// @ts-ignore
					handleClick={handleMenuItemClick}
				/>
			</Popover>
		</Box>
	)
}

export default CheckboxFilterButton

const sx = {
	checkboxIcon: {
		color: 'primary.main',
	},
	checkboxFilled: {
		height: 18,
		width: 18,
		borderRadius: '2px',
		mx: '4px',
		backgroundColor: 'primary.main',
	},
	checkboxOutlined: {
		height: 18,
		width: 18,
		borderRadius: '2px',
		border: '2px solid',
		mx: '4px',
		borderColor: 'primary.main',
	},
}
