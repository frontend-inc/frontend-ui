import React, { useEffect } from 'react'
import {
	Box,
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
	Stack,
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
  icon?: string
	avatar?: React.ReactNode
	title?: string | React.ReactNode
	subtitle?: string
	buttons?: any
	children?: any
	maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
	secondaryActions?: any
	disablePadding?: boolean
	fullScreen?: boolean
	enableCancel?: boolean
	hideBackdrop?: boolean
	disableClose?: boolean
	disableHeader?: boolean
}

const Modal: React.FC<ModalProps> = (props) => {
	const {
		open,
		loading = false,
		handleClose,
		avatar,
    icon,
		title,
		subtitle,
		buttons,
		children,
		maxWidth = 'sm',
		secondaryActions,
		disablePadding = false,
		fullScreen,
		enableCancel = false,
		hideBackdrop = false,
		disableClose = false,
		disableHeader = false,
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
						sm:
							isMobile || fullScreen
								? '100vw'
								: muiTheme.breakpoints.values[maxWidth],
						xs: '100vw',
					},
				},
			}}
			fullWidth
			fullScreen={isMobile || fullScreen === true}
			open={open}
			onClose={handleClose}
			hideBackdrop={hideBackdrop}
		>
			{!disableHeader && (
				<DialogTitle sx={sx.dialogTitleContainer}>
					<Box sx={sx.dialogTitleContent}>
						<Stack direction="row" alignItems="center" spacing={1}>
							{avatar}
              { icon && (
                <Icon name={ icon } />
              )}
							<Typography variant="subtitle1" color="textPrimary" sx={sx.title}>
								{title}
							</Typography>
						</Stack>
						{!loading && (
							<Box sx={sx.secondaryActions}>
								{secondaryActions && secondaryActions}
								{!disableClose && (
									<IconButton onClick={handleClose}>
										<Icon name="X" />
									</IconButton>
								)}
							</Box>
						)}
					</Box>
				</DialogTitle>
			)}
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
				<>
					{(enableCancel || buttons) && (
						<DialogActions sx={sx.dialogActions}>
							{enableCancel && (
								<Button
									variant="contained"
									color="secondary"
									onClick={handleClose}
								>
									Cancel
								</Button>
							)}
							{buttons && buttons}
						</DialogActions>
					)}
				</>
			)}
		</Dialog>
	)
}

export default Modal

const sx = {
	root: {
		borderRadius: 1,
	},
	title: {},
	dialogTitleContainer: {
		p: 0,
		px: 1,
		pl: 2,
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
		my: 1,
		height: '100%',
	},
	disablePadding: {
		m: 0,
		p: 0,
	},
	dialogActions: {
		borderTop: '1px solid',
		borderColor: 'divider',
		bgcolor: 'background.default',
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
