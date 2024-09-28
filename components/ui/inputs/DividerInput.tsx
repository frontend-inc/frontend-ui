import React from 'react'
import { Stack, Box, Typography } from '@mui/material'

type DividerInputProps = {
	label: string
}

const DividerInput: React.FC<DividerInputProps> = (props) => {
	const { label } = props

	return (
		<Stack direction="column">
			<Typography variant="h6" color="text.secondary" sx={sx.divider}>
				{label}
			</Typography>
		</Stack>
	)
}

export default DividerInput

const sx = {
	divider: {
		borderBottom: '1px solid',
		borderColor: 'divider',
		mt: 2,
		mb: 1,
		pb: 1,
	},
}
