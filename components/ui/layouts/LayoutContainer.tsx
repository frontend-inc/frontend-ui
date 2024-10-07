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
	roles?: string[]
	requireAuth?: boolean
	requirePaid?: boolean
}

const LayoutContainer: React.FC<LayoutContainerProps> = (props) => {
	const {
		children,
		notifications,
		requireAuth,
		requirePaid,
		roles = [],
	} = props

	return (
		<Box
			sx={{
				...sx.layout,
				height: '100%',
			}}
		>
			<Alert />
			<Box
				sx={{
					...sx.root,
				}}
			>
				<Box sx={sx.content}>
					<AuthGuard
						roles={roles}
						requireAuth={requireAuth}
						requirePaid={requirePaid}
					>
						<Notifications notifications={notifications} />
						{children}
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
	},
	page: {
		width: '100%',
		bgcolor: 'background.default',
	},
}
