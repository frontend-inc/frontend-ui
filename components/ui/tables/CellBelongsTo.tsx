import React from 'react'
import { Box, Button } from '@mui/material'
import { TurnSlightRight } from '@mui/icons-material'

type CellBelongsToProps = {
	value: string
	displayValue: string
	headerName: string
	handleClick: () => void
}

const CellBelongsTo: React.FC<CellBelongsToProps> = (props) => {
	const { value, displayValue, headerName, handleClick } = props

	return (
		<Box sx={sx.cell}>
			<Button
				fullWidth
				size="small"
				color="primary"
				variant="outlined"
				sx={sx.button}
				endIcon={<TurnSlightRight />}
				onClick={handleClick}
			>
				{displayValue}
			</Button>
		</Box>
	)
}

export default CellBelongsTo

const sx = {
	cell: {
		width: '100%',
		display: 'flex',
		justifyContent: 'flex-start',
	},
	avatar: {
		bgcolor: 'background.paper',
	},
	button: {
		textTransform: 'none',
		letterSpacing: 0,
	},
}
