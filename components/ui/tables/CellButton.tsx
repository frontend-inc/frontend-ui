import React from 'react'
import { Box, Button } from '@mui/material'
import { Icon } from '../../../components'

type CellButtonProps = {
	children: string
	icon: string
	handleClick?: (value: any, row?: any, field?: any) => void
}

const CellButton: React.FC<CellButtonProps> = (props) => {
	const { children, icon, handleClick } = props

	return (
		<Box sx={sx.cell}>
			<Button
				size="small"
				color="secondary"
				variant="contained"
				sx={sx.button}
				startIcon={
					<Icon color="secondary.contrastText" name={icon} size={20} />
				}
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
