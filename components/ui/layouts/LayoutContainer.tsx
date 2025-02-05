'use client'

import React from 'react'
import { AuthGuard } from '../..'
import { Notifications } from '../..'
import { NotificationType } from '../../../types'
import { cn } from '@nextui-org/react'

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
	const { children, requireAuth } = props

	return (
		<div className="w-full min-h-screen">
			<div
				className={cn(
					'w-full h-full overflow-y-scroll scrollbar-hide',
				)}
			>
				<div className="flex flex-col w-full">
					<AuthGuard requireAuth={requireAuth}>
						{children}
					</AuthGuard>
				</div>
			</div>
		</div>
	)
}
