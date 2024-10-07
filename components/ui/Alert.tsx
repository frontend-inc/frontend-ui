import React, { useState, useEffect, useContext } from 'react'
import { AppContext } from '../../context'
import {
	Fade,
	IconButton,
	List,
	ListItem,
	ListItemButton,
	ListItemText,
	Paper,
	Slide,
	Box,
	Typography,
} from '@mui/material'
import { Clear } from '@mui/icons-material'

export type AlertProps = {
	anchorBottom?: boolean
}

const Alert: React.FC<AlertProps> = (props) => {
	const { anchorBottom = false } = props

	const [open, setOpen] = useState(false)

	const { alert, setAlert } = useContext(AppContext)

	const handleClose = () => {
		setOpen(false)
		setAlert()
	}

	useEffect(() => {
		if (alert && alert?.message) {
			setOpen(true)
		}
	}, [alert])

	useEffect(() => {
		if (open) {
			setTimeout(() => {
				setOpen(false)
				setAlert(null)
			}, 10000)
		}
	}, [open])

	return (
		<Fade in={open}>
			<Slide direction={anchorBottom ? 'up' : 'down'} in={open}>
				<Box
					width="100%"
					p={0}
					sx={{
						...sx.root,
						...(anchorBottom && sx.anchorBottom),
					}}
				>
					<Paper elevation={4} sx={sx.alert}>
						<List disablePadding>
							<ListItem
								secondaryAction={
									<IconButton size="small" onClick={handleClose}>
										<Clear sx={sx.icon} />
									</IconButton>
								}
							>
								<ListItemButton sx={sx.listItemButton} onClick={handleClose}>
									<ListItemText
										primary={
											<Typography variant="body1" sx={sx.text}>
												{alert?.message || ''}
											</Typography>
										}
									/>
								</ListItemButton>
							</ListItem>
						</List>
					</Paper>
				</Box>
			</Slide>
		</Fade>
	)
}

export default Alert

const sx = {
	root: {
		position: 'fixed',
		zIndex: 2000,
		width: '100%',
		top: 30,
		left: 0,
	},
	anchorBottom: {
		top: 'auto',
		bottom: 30,
	},
	alert: {
		p: 0,
		maxWidth: 500,
		m: '0 auto',
		bgcolor: 'primary.main',
		color: 'primary.contrastText',
	},
	text: {
		color: 'primary.contrastText',
	},
	icon: {
		color: 'primary.contrastText',
	},
	listItemButton: {
		p: 0,
	},
}
