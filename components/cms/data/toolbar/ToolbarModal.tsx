import React from 'react'
import { Paper, Collapse, Box, Stack, IconButton } from '@mui/material'
import { Icon } from '../../..'
import { useResourceContext } from 'frontend-js'

type ToolbarModalProps = {
	children: React.ReactNode
}

const ToolbarModal: React.FC<ToolbarModalProps> = (props) => {
	const { selected = [], handleClear } = useResourceContext()

	const { children } = props || {}

	const open = selected.length > 0
	const handleClose = () => {
		handleClear()
	}

	return (
		<Collapse in={open}>
			<Paper elevation={0} sx={sx.root}>
				<Stack
					direction="row"
					justifyContent="space-between"
					alignItems="center"
					width="100%"
				>
					<Stack direction="row" spacing={1}>
						<Box display="flex" alignItems="center">
							<IconButton onClick={handleClose} sx={sx.closeButton}>
								<Icon name="X" size={18} color="secondary.contrastText" />
							</IconButton>
						</Box>
						{children}
					</Stack>
				</Stack>
			</Paper>
		</Collapse>
	)
}

export default ToolbarModal

const sx = {
	root: {
		mb: 1,
	},
	appBar: {
		m: 0,
		top: '-10px',
	},
	iconButton: {
		width: '40px',
		height: '40px',
	},
	closeButton: {
		bgcolor: 'secondary.light',
	},
}
