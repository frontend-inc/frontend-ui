import React from 'react'
import { Box, IconButton, Slide } from '@mui/material'
import { X } from 'lucide-react'

type ToolbarProps = {
	open: boolean
	handleClose: () => void
	children: React.ReactNode
}

const Toolbar: React.FC<ToolbarProps> = (props) => {
	const { open, handleClose, children } = props

	return (
		<Slide in={open} direction="up">
			<Box sx={sx.root}>
				<Box sx={sx.leftIcon}></Box>
				<Box sx={sx.buttons}>{children}</Box>
				<Box sx={sx.rightIcon}>
					<IconButton sx={sx.button} onClick={handleClose}>
						<X />
					</IconButton>
				</Box>
			</Box>
		</Slide>
	)
}

export default Toolbar

const sx = {
	root: {
		zIndex: (theme) => theme.zIndex.appBar,
		bgcolor: 'background.paper',
		bottom: 0,
		left: {
			sm: 1,
			xs: 0,
		},
		position: 'absolute',
		width: '100%',
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		padding: 0.5,
		borderTop: '1px solid',
		borderColor: 'divider',
	},
	buttons: {
		display: 'flex',
		flexWrap: 'wrap',
		alignItems: 'center',
		justifyContent: 'center',
		height: '100%',
	},
	leftIcon: {
		width: 44,
		display: 'flex',
		justifyContent: 'flex-start',
	},
	rightIcon: {
		width: 44,
		display: 'flex',
		justifyContent: 'flex-end',
	},
	button: {},
}
