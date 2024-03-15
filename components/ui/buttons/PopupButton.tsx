import React, { useState } from 'react'
import { Box, Button, Popover } from '@mui/material'
import { ExpandLess, ExpandMore } from '@mui/icons-material'

type PopupButtonProps = {
	label: string
	count?: number
	children: any
	anchorVertical?: any
	anchorHorizontal?: any
}

const PopupButton: React.FC<PopupButtonProps> = (props) => {
	const {
		label,
		children,
		anchorVertical = 'bottom',
		anchorHorizontal = 'left',
	} = props || {}

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
				variant="text"
				color="secondary"
				onClick={handleButtonClick}
				endIcon={open ? <ExpandLess /> : <ExpandMore />}
			>
				{label}
			</Button>
			<Popover
				id="ProductFilter-menu"
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
				{children}
			</Popover>
		</Box>
	)
}

export default PopupButton

const sx = {
	paper: {},
	popover: {
		'& .MuiPopover-paper': {
			minWidth: '180px',
		},
	},
}
