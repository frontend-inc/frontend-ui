import React, { useEffect } from 'react'
import {
	Box,
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
	Typography,
	IconButton,
} from '@mui/material'
import { Icon, Loader } from '../../../components'
import { useResponsive } from '../../../hooks'
import { muiTheme } from '../../../theme'

type ModalProps = {
	open: boolean
	loading?: boolean
	handleClose: () => void
	title?: string
	subtitle?: string
	actions?: any
	children?: any
	maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
	secondaryActions?: any
	disablePadding?: boolean
	fullScreen?: boolean
	enableCancel?: boolean
	hideBackdrop?: boolean
  disableClose?: boolean
}

const Modal: React.FC<ModalProps> = (props) => {
	const {
		open,
		loading = false,
		handleClose,
		title,
		subtitle,
		actions,
		children,
		maxWidth = 'sm',
		secondaryActions,
		disablePadding = false,
		fullScreen,
		enableCancel = false,
		hideBackdrop = false,
    disableClose = false,
	} = props

	const { isMobile } = useResponsive()

	return (
		<Dialog
			sx={{
				...sx.root,
				// Manually reset the maxWidth breakpoints
				// since these are modifed in the Editor
				'& .MuiDialog-paper': {
          bgcolor: 'background.default',
					maxWidth: {
						sm: muiTheme.breakpoints.values[maxWidth],
						xs: '100vw',
					},
				},
			}}
			fullWidth
			fullScreen={isMobile || fullScreen === true ? true : false}
			open={open}
			onClose={handleClose}
			hideBackdrop={hideBackdrop}
		>
			<DialogTitle sx={sx.dialogTitleContainer}>
				<Box sx={sx.dialogTitleContent}>
					<Typography variant="h6" color="textPrimary" sx={sx.title}>
						{title}
					</Typography>
					{!loading && (
						<Box sx={sx.secondaryActions}>
							{secondaryActions && secondaryActions}
              { !disableClose && (
                <IconButton onClick={handleClose}>
                  <Icon name="X" />
                </IconButton>
              )}
						</Box>
					)}
				</Box>
			</DialogTitle>
			<DialogContent
				sx={{
					...sx.dialogContent,
					...(disablePadding && sx.disablePadding),
				}}
			>
				{subtitle && (
					<Typography variant="body1" mt={1}>
						{subtitle}
					</Typography>
				)}
				<Loader loading={loading} />
				{!loading && <Box sx={sx.content}>{children}</Box>}
			</DialogContent>
			{!loading && (
				<DialogActions sx={sx.dialogActions}>
					{enableCancel && (
						<Button variant="contained" color="secondary" onClick={handleClose}>
							Cancel
						</Button>
					)}
					{actions && actions}
				</DialogActions>
			)}
		</Dialog>
	)
}

export default Modal

const sx = {
	root: {
		borderRadius: (theme) => theme.shape.borderRadius,
	},
	title: {},
	dialogTitleContainer: {
		p: 0,
    px: 1,
    pl: 3,
		bgcolor: 'background.default',
    borderBottom: '1px solid',
    borderColor: 'divider',
	},
	dialogTitleContent: {
		height: '50px',
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	dialogContent: {
		my: 2,
		height: '100%',
	},
	dialogActions: {
    borderTop: '1px solid',
    borderColor: 'divider',
		bgcolor: 'background.default',
	},
	disablePadding: {
		p: 0,
	},
	secondaryActions: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'flex-end',
		alignItems: 'center',
	},
	content: {
		height: '100%',
		width: '100%',
	},
}
