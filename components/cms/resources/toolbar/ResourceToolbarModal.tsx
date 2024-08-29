import React from 'react'
import { AppBar, Toolbar, Slide } from '@mui/material'
import { Box, Stack, IconButton } from '@mui/material'
import { Icon } from '../../../'

type ResourceToolbarModalProps = {
	open: boolean
	handleClose: () => void
	children: React.ReactNode
}

const ResourceToolbarModal: React.FC<ResourceToolbarModalProps> = (props) => {
	const { open, handleClose, children } = props || {}

	return (
		<Slide direction="down" in={open}>
			<AppBar position="fixed" color="secondary" sx={sx.appBar}>
				<Toolbar>
					<Stack
						direction="row"
						justifyContent="space-between"
						alignItems="center"
						width="100%"
					>
						<Box sx={sx.iconButton}></Box>
						{children}
						<Box sx={sx.iconButton}>
							<IconButton onClick={handleClose}>
								<Icon name="X" />
							</IconButton>
						</Box>
					</Stack>
				</Toolbar>
			</AppBar>
		</Slide>
	)
}

export default ResourceToolbarModal

const sx = {
	appBar: {
		m: 0,
		top: '-10px',
	},
	iconButton: {
		width: '40px',
		height: '40px',
	},
}
