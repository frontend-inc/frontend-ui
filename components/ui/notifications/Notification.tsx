'use client'

import React from 'react'

type NotificationProps = {
	text: string 
}

export default function Notification({ text }: NotificationProps) {

	return (
		<li className="cursor-pointer p-0 h-[44px] w-full flex justify-center items-center bg-primary overflow-x-auto scrollbar-hide">
			<span className="text-sm whitespace-nowrap flex flex-row items-center justify-center text-center overflow-x-auto scrollbar-hide text-primary-foreground">
				{text}
			</span>
		</li>
	)
}
