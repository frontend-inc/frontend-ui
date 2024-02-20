import React from 'react'
import { Box, Button } from '@mui/material'

type CellButtonProps = {
	children: string
	icon?: React.ReactNode
	handleClick?: (value: any, row?: any, field?: any) => void
}

const CellButton: React.FC<CellButtonProps> = (props) => {
	const { children, icon, handleClick } = props

	return (
		<Box sx={sx.cell}>
			<Button
				fullWidth
				color="secondary"
				variant="outlined"
				sx={sx.button}
				endIcon={icon && icon}
				onClick={handleClick && handleClick}
			>
				{children}
			</Button>
		</Box>
	)
}

export default CellButton

const sx = {
	cell: {
		width: '100%',
		display: 'flex',
		justifyContent: 'flex-start',
	},
	button: {
		textTransform: 'none',
		fontFamily: (theme) => theme.typography.body2.fontFamily,
		letterSpacing: 0,
	},
}
