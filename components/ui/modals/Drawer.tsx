import React from 'react'
import { Box, SwipeableDrawer, Typography } from '@mui/material'
import { IconButton } from '@mui/material'
import { Icon } from '../../../components'

type DrawerProps = {
	open: boolean
	loading?: boolean
	title?: string
	anchor?: 'left' | 'right' | 'top' | 'bottom'
	handleClose?: () => void
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
		hideBackdrop = false,
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
			hideBackdrop={hideBackdrop}
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
					<Box sx={sx.actions}>
						{anchor == 'right' && (
							<IconButton onClick={handleClose}>
								<Icon color="text.primary" name={closeIcon} />
							</IconButton>
						)}
					</Box>
					<Box>
						<Typography variant="subtitle1">{title}</Typography>
					</Box>
					<Box sx={sx.actions}>
						{actions}
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
						...(!disablePadding && sx.contentPadding),
					}}
				>
					{children}
				</Box>
			</Box>
		</SwipeableDrawer>
	)
}

export default Drawer

const sx = {
	root: {
		width: {
			xs: '100vw',
			md: '420px',
		},
		maxWidth: '420px',
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
	},
	button: {
		border: '1px solid',
		borderColor: 'divider',
		boxShadow: `rgb(0 0 0 / 5%) 0px 2px 4px !important`,
	},
	actions: {
		my: 2,
		mr: 2,
		minWidth: '40px',
		display: 'flex',
		flexDirecton: 'row',
		alignItems: 'center',
		gap: '0 10px',
	},
	paper: {
		zIndex: `9999 !important`,
		bgcolor: 'background.default',
	},
	content: {
		width: '100%',
	},
	contentPadding: {
		px: 2,
	},
}
