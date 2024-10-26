'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import { useClickOrDrag } from '../../../hooks'
import { useApp } from '../../../hooks'
import { NotificationType } from '../../../types'

type NotificationProps = {
	notification: NotificationType
}

export default function Notification({ notification }: NotificationProps) {

	const { text } = notification || {}

	return (
		<li className="cursor-pointer p-0 h-[44px] w-full flex justify-center items-center bg-primary overflow-x-auto scrollbar-hide">
      <span className="text-sm whitespace-nowrap flex flex-row items-center justify-center text-center overflow-x-auto scrollbar-hide text-primary-foreground">
        {text}
      </span>
		</li>
	)
}
