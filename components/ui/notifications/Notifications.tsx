'use client'

import React, { useState } from 'react'
import { NotificationType } from '../../../types'
import { Notification } from '../../../components'
import SwipeableViews from 'react-swipeable-views'
import { IconButton } from '../../core'
import { ChevronLeft, ChevronRight } from 'lucide-react'

type NotificationsProps = {
	notifications: NotificationType[]
}

export default function Notifications({ notifications }: NotificationsProps) {
	const [activeStep, setActiveStep] = useState(0)

	const handleStepChange = (step: number) => {
		setActiveStep(step)
	}

	const handlePrev = () => {
		setActiveStep(
			(prevStep) => (prevStep - 1 + notifications.length) % notifications.length
		)
	}

	const handleNext = () => {
		setActiveStep((prevStep) => (prevStep + 1) % notifications.length)
	}

	if (!notifications?.length) return null

	return (
		<div className="w-full relative top-0 left-0 p-0 h-11">
			<SwipeableViews
				axis={'x'}
				index={activeStep}
				onChangeIndex={handleStepChange}
				enableMouseEvents
				containerStyle={{
					transition: 'transform 0.35s cubic-bezier(0.15, 0.3, 0.25, 1) 0s',
				}}
				className="w-full h-full"
			>
				{notifications.map((notification, i) => (
					<div key={i} className="w-full">
						<Notification notification={notification} />
					</div>
				))}
			</SwipeableViews>
			{notifications?.length > 0 && (
				<>
					<div className="absolute top-0 left-0 bottom-0 flex items-center">
						<IconButton onClick={handlePrev} className="px-1 py-2">
							<ChevronLeft className="h-5 w-5 text-primary-foreground" />
							<span className="sr-only">Previous notification</span>
						</IconButton>
					</div>
					<div className="absolute top-0 left-[32px] bottom-0 flex items-center">
						<IconButton onClick={handleNext} className="h-full px-1 py-2">
							<ChevronRight className="h-5 w-5 text-primary-foreground" />
							<span className="sr-only">Next notification</span>
						</IconButton>
					</div>
				</>
			)}
		</div>
	)
}
