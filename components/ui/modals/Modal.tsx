import React from 'react'
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

type ModalProps = {
	open: boolean
	loading?: boolean
	handleClose: () => void
	title?: string
	subtitle?: string
	actions?: any
	children?: any
	maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | false
	secondaryActions?: any
	disablePadding?: boolean
	fullScreen?: boolean
	enableCancel?: boolean
	hideBackdrop?: boolean
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
		maxWidth,
		secondaryActions,
    disablePadding=false,		
		fullScreen,
		enableCancel = false,
		hideBackdrop = false,
	} = props

	const { isMobile } = useResponsive()

	return (
		<Dialog
			sx={sx.root}
			fullWidth
			maxWidth={maxWidth || 'sm'}
			fullScreen={isMobile || fullScreen === true ? true : false}
			open={open}
			onClose={handleClose}
			hideBackdrop={hideBackdrop}
		>
			<DialogTitle sx={sx.dialogTitleContainer}>
				<Box sx={sx.dialogTitleContent}>
					<Typography variant="subtitle2" color="textPrimary" sx={sx.title}>
						{title}
					</Typography>
					{!loading && (
						<Box sx={sx.secondaryActions}>
							{secondaryActions && secondaryActions}
							<IconButton onClick={handleClose}>
								<Icon name="X" />
							</IconButton>
						</Box>
					)}
				</Box>
			</DialogTitle>
			<DialogContent 
        sx={{ 
          ...sx.dialogContent, 
          ...(disablePadding && sx.disablePadding )
        }}>
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
		py: 0,
		bgcolor: 'background.default',
	},
	dialogTitleContent: {
		height: '50px',
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	dialogContent: {
    p: 2,
		height: '100%',
		bgcolor: 'background.default',
	},
	dialogActions: {
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
