import React, { useState, useEffect } from 'react'
import { Box } from '@mui/material'
import { AuthGuard, Alert, ViewScroll } from '../../../components'
import { Notifications } from '../../../components'
import { NotificationType } from '../../../types'

type LayoutContainerProps = {
	handleClick: (item: any) => void
	children: React.ReactNode
	header?: React.ReactNode
	footer?: React.ReactNode
	notifications: NotificationType[]
	offsetY?: number
  roles?: string[]
	requireAuth?: boolean
	requirePaid?: boolean
}

const LayoutContainer: React.FC<LayoutContainerProps> = (props) => {
	const {
		children,
		notifications,
		offsetY = 0,
		requireAuth,
		requirePaid,
    roles=[]
	} = props

	const [enableNotifications, setEnableNotifications] = useState(false)

	useEffect(() => {
		if (notifications?.length > 0) {
			setEnableNotifications(true)
		}
	}, [notifications])

	return (
		<Box
			sx={{
				...sx.layout,
				height: {
					sm: `calc(100vh - ${offsetY}px)`,
					xs: '100vh',
				},
			}}
		>
			<Alert />
			<Box
				sx={{
					...sx.root,
				}}
			>
				<Box sx={ sx.content}>
					<AuthGuard
						roles={roles}
						requireAuth={requireAuth}
						requirePaid={requirePaid}
					>						
            <ViewScroll>
              <Notifications notifications={notifications} />
              {children}
            </ViewScroll>            
					</AuthGuard>
				</Box>
			</Box>
		</Box>
	)
}

export default LayoutContainer

const sx = {
	layout: {
		width: '100%',
		overflowY: 'hidden',
	},
	root: {
		width: '100%',
		height: '100%',
		overflowY: 'scroll',
		'&::-webkit-scrollbar': {
			display: 'none',
		},
		bgcolor: 'background.default',
	},
	content: {
		display: 'flex',
		flexDirection: 'column',
		width: '100%',
		overflowY: 'hidden',
	},
	page: {
		width: '100%',
		bgcolor: 'background.default',
	},
}
