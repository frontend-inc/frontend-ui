'use client'

import React, { useState } from 'react'
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from 'frontend-shadcn'
import { NotificationType } from '../../../types'
import { Notification } from '../../../components'

type NotificationsProps = {
	notifications: NotificationType[]
}

export default function Notifications({ notifications }: NotificationsProps) {
	if (!notifications?.length) return null
	return (
		<div className="bg-primary w-full relative top-0 left-0 p-0 pb-[30px] h-11 px-[48px]">
			<Carousel>
				<CarouselContent>
					{notifications.map((notification, i) => (
						<CarouselItem key={i}>
							<Notification notification={notification} />
						</CarouselItem>
					))}
				</CarouselContent>
				{notifications?.length > 1 && (
					<>
						<CarouselPrevious className="h-8 w-8 ml-2 border-0 bg-primary hover:bg-black/10 text-primary-foreground hover:text-primary-foreground" />
						<CarouselNext className="h-8 w-8 mr-2 border-0 bg-primary hover:bg-black/10 text-primary-foreground hover:text-primary-foreground" />
					</>
				)}
			</Carousel>
		</div>
	)
}
