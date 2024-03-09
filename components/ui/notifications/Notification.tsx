import React, { useContext } from 'react'
import {
	ListItem,
	ListItemText,
	ListItemButton,
	Typography,
	Button,
} from '@mui/material'
import copy from 'copy-to-clipboard'
import { useAlerts } from '../../../hooks'
import { AppContext } from '../../../context'
import { useRouter } from 'next/router'

type NotificationProps = {
	text: string
	buttonText?: string
	path?: string
	discountCode?: string
	copyToClipboard?: boolean
}

const Notification: React.FC<NotificationProps> = (props) => {
	const router = useRouter()

	const {
		text,
		buttonText = 'View details',
		path,
		discountCode,
		copyToClipboard,
	} = props

	const { showAlertSuccess } = useAlerts()

	const { clientUrl } = useContext(AppContext)

	const handleClick = () => {
		if (copyToClipboard) {
			copy(discountCode)
			showAlertSuccess('Discount code copied to clipboard')
		} else if (path) {
			router.push(`${clientUrl}/${path}`)
		}
	}

	return (
		<ListItem sx={sx.root}>
			<ListItemButton
				disableRipple
				sx={sx.listItemButton}
				onClick={handleClick}
			>
				<ListItemText
					primary={
						<Typography variant="body2" sx={sx.text}>
							{text}
						</Typography>
					}
				/>
			</ListItemButton>
		</ListItem>
	)
}

export default Notification

const sx = {
	root: {
		p: 0,
		width: '100%',
		justifyContent: 'center',
		alignItems: 'center',
		bgcolor: 'primary.main',
		overflowX: 'scroll',
		'&::-webkit-scrollbar': {
			display: 'none',
		},
	},
	text: {
		textAlign: 'center',
	},
	listItemButton: {},
}
