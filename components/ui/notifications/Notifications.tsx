import React from 'react'
import { List } from '@mui/material'
import { NotificationType } from '../../../types'
import { Notification } from '../../../components'
import SwipeableViews from 'react-swipeable-views'

type NotificationProps = {
	notifications: NotificationType[]
}

const Notifications: React.FC<NotificationProps> = (props) => {
	const { notifications } = props

	const [activeStep, setActiveStep] = React.useState(0)
	const handleStepChange = (step: number) => {
		setActiveStep(step)
	}

	if (!notifications?.length) return null
	return (
		<List sx={sx.root}>
			<SwipeableViews
				axis={'x'}
				index={activeStep}
				onChangeIndex={handleStepChange}
				enableMouseEvents
			>
				{notifications?.map((notification, i) => (
					<Notification key={i} notification={notification} />
				))}
			</SwipeableViews>
		</List>
	)
}

export default Notifications

const sx = {
	root: {
		width: '100%',
		position: 'relative',
		top: 0,
		left: 0,
		p: 0,
		height: 44,
		zIndex: (theme) => theme.zIndex.drawer - 1,
	},
	item: {
		width: '100%',
	},
}
