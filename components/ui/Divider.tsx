import React from 'react'
import { Box } from '@mui/material'

const ReactDivider: React.FC = (props) => {
	return <Box sx={sx.root} />
}

export default ReactDivider

const sx = {
	root: {
		borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
	},
}
