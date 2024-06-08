import React, { useState, useEffect } from 'react'
import { Box } from '@mui/material'
import { AuthGuard, Alert, LayoutScroll } from '../../../components'
import { Notifications } from '../../../components'
import { NotificationType } from '../../../types'

type LayoutContainerProps = {
	handleClick: (item: any) => void
	children: React.ReactNode
	header?: React.ReactNode
	footer?: React.ReactNode
	enableSideNav?: boolean
	notifications: NotificationType[]
	offsetY?: number
	offsetX?: number
	requireAuth?: boolean
	requireTeam?: boolean
	requirePaid?: boolean
	requireAdmin?: boolean
}

const LayoutContainer: React.FC<LayoutContainerProps> = (props) => {
	const {
		children,
		header,
		footer,
		notifications,
		enableSideNav = false,
		offsetY = 0,
		requireAuth,
		requireTeam,
		requirePaid,
		requireAdmin,
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
			{notifications?.length > 0 && (
				<Notifications notifications={notifications} />
			)}
			<Box
				sx={{
					...sx.root,
					...(enableSideNav && sx.sideNav),
				}}
			>
				{header}
				<Box
					sx={{
						...sx.content,
						...(enableSideNav ? sx.contentSideNav : sx.contentTopNav),
						...(enableNotifications && sx.contentNotifications),
					}}
				>
					<LayoutScroll>
						<AuthGuard
							requireAuth={requireAuth}
							requirePaid={requirePaid}
							requireTeam={requireTeam}
							requireAdmin={requireAdmin}
						>
							{children}
							{footer}
						</AuthGuard>
					</LayoutScroll>
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
	sideNav: {
		display: 'flex',
		flexDirection: {
			md: 'row',
			xs: 'column',
		},
		pt: {
			sm: 0,
			xs: '60px',
		},
	},
	content: {
		display: 'flex',
		flexDirection: 'column',
		width: '100%',
	},
	contentNotifications: {
		pb: '45px',
	},
	contentSideNav: {
		pt: {
			md: 0,
			sm: '60px',
		},
		width: {
			md: 'calc(100% - 280px)',
			xs: '100%',
		},
		height: '100%',
	},
	contentTopNav: {
		pt: '60px',
		minHeight: 'calc(100% - 60px)',
	},
	page: {
		width: '100%',
		bgcolor: 'background.default',
	},
}
