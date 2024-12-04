'use client'

import React, { useState } from 'react'
import { Swipeable } from '../../../components'
import { NotificationType } from '../../../types'
import { Notification } from '../../../components'

type NotificationsProps = {
	notifications: NotificationType[]
}

export default function Notifications({ notifications }: NotificationsProps) {

	if (!notifications?.length) return null

	return (
		<div className="bg-primary w-full relative top-0 left-0 p-0 pb-[30px] h-11 px-[48px]">
			<Swipeable enableArrows>
				{notifications.map((notification, i) => (
					<Notification key={i} notification={notification} />
				))}
			</Swipeable>			
		</div>
	)
}
