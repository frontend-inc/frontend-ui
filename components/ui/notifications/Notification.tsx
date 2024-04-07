import React, { useContext } from 'react'
import {
	ListItem,
	ListItemText,
	ListItemButton,
	Typography,
	Button,
} from '@mui/material'
import { useClickOrDrag } from '../../../hooks'
import { AppContext } from '../../../context'
import { useRouter } from 'next/router'
import { NotificationType } from '../../../types'

type NotificationProps = {
	notification: NotificationType
}

const Notification: React.FC<NotificationProps> = (props) => {
	const router = useRouter()

	const { notification } = props || {}

	const { text, path, url, position, notification_type } = notification || {}

	const { clientUrl } = useContext(AppContext)

	const handleClick = () => {
		switch (notification_type) {
			case 'url':
				window.open(url, '_blank')
				break
			case 'page':
			case 'document':
				router.push(`${clientUrl}${path}`)
				break
		}
	}

	const { onMouseDown, onMouseUp } = useClickOrDrag({
		onClick: handleClick,
	})

	return (
		<ListItem sx={sx.root}>
			<ListItemButton
				sx={sx.listItemButton}
				onMouseDown={onMouseDown}
				onMouseUp={onMouseUp}
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
