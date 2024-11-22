'use client'

import React from 'react'
import { AuthGuard } from '../../../components'
import { Notifications } from '../../../components'
import { NotificationType } from '../../../types'
import { cn } from 'frontend-shadcn'
import { Toaster } from 'frontend-shadcn'

type LayoutContainerProps = {
	handleClick: (item: any) => void
	children: React.ReactNode
	header?: React.ReactNode
	footer?: React.ReactNode
	notifications: NotificationType[]
	requireAuth?: boolean
	requirePaid?: boolean
}

export default function LayoutContainer(props: LayoutContainerProps) {
	const { children, notifications, requireAuth } = props

	return (
		<div className="w-full min-h-screen">
			<Toaster />
			<div
				className={cn(
					'w-full h-full overflow-y-scroll scrollbar-hide',
					'bg-background'
				)}
			>
				<div className="flex flex-col w-full">
					<AuthGuard requireAuth={requireAuth}>
						<Notifications notifications={notifications} />
						{children}
					</AuthGuard>
				</div>
			</div>
		</div>
	)
}
