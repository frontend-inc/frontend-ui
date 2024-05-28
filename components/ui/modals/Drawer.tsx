import React from 'react'
import { Box, SwipeableDrawer, Typography } from '@mui/material'
import { IconButton } from '@mui/material'
import { Icon } from '../../../components'

type DrawerProps = {
	open: boolean
	loading?: boolean
	title?: string
	anchor?: 'left' | 'right' | 'top' | 'bottom'
	handleClose: () => void
	actions?: any
	children: React.ReactNode
	closeIcon?: string
	disablePadding?: boolean
	hideBackdrop?: boolean
	variant?: 'permanent' | 'persistent' | 'temporary'
	styles?: any
	fullWidth?: boolean
}

const Drawer: React.FC<DrawerProps> = (props) => {
	const {
		open,
		title,
		anchor = 'right',
		handleClose,
		children,
		actions,
		variant = 'temporary',
		disablePadding = false,
		closeIcon = 'X',
		fullWidth = false,
		styles = {},
	} = props

	return (
		<SwipeableDrawer
			open={open}
			variant={variant}
			anchor={anchor}
			onOpen={handleClose}
			onClose={handleClose}
			PaperProps={{
				sx: {
					...sx.paper,
					...styles,
				},
			}}
		>
			<Box
				sx={{
					...sx.root,
					...(fullWidth && sx.fullWidth),
				}}
			>
				<Box sx={sx.header}>
					<Box sx={sx.headerAction}>
						{anchor == 'right' && (
							<IconButton onClick={handleClose}>
								<Icon color="text.primary" name={closeIcon} />
							</IconButton>
						)}
					</Box>
					<Box>
						<Typography color="text.secondary" variant="subtitle2">
							{title}
						</Typography>
					</Box>
					<Box sx={sx.headerAction}>
						{anchor != 'right' && (
							<IconButton onClick={handleClose}>
								<Icon color="text.primary" name={closeIcon} />
							</IconButton>
						)}
					</Box>
				</Box>
				<Box
					sx={{
						...sx.content,
						...(actions && sx.contentActions),
						...(!disablePadding && sx.contentPadding),
					}}
				>
					{children}
				</Box>
				{actions && <Box sx={sx.actions}>{actions}</Box>}
			</Box>
		</SwipeableDrawer>
	)
}

export default Drawer

const sx = {
	root: {
		width: {
			xs: '100vw',
			md: '380px',
		},
		maxWidth: {
			sm: '380px',
			xs: '480px',
		},
	},
	fullWidth: {
		width: '100vw',
		maxWidth: '100vw',
	},
	icon: {
		color: 'text.secondary',
	},
	header: {
		display: 'flex',
		flexDirecton: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		height: 50,
		borderBottom: '1px solid',
		borderColor: 'divider',
	},
	headerAction: {
		minWidth: '40px',
	},
	button: {
		border: '1px solid',
		borderColor: 'divider',
		boxShadow: `rgb(0 0 0 / 5%) 0px 2px 4px !important`,
	},
	actions: {
		bgcolor: 'background.paper',
		position: 'absolute',
		bottom: 0,
		left: 0,
		width: '100%',
		height: '60px',
		borderTop: '1px solid',
		borderColor: 'divider',
		display: 'flex',
		flexDirection: 'row',
		p: 1,
	},
	paper: {
		zIndex: `9999 !important`,
		bgcolor: 'background.default',
	},
	content: {
		width: '100%',
		overflowY: 'scroll',
		'&::-webkit-scrollbar': {
			display: 'none',
		},
		maxHeight: 'calc(100vh - 60px)',
		pb: 4,
	},
	contentActions: {
		maxHeight: 'calc(100vh - 120px)',
	},
	contentPadding: {
		p: 2,
	},
}
