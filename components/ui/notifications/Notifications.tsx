'use client'

import React, { useState } from 'react'
import { NotificationType } from '../../../types'
import { Notification } from '../../../components'
import SwipeableViews from 'react-swipeable-views'
import { cn } from '../../../shadcn/lib/utils'

type NotificationsProps = {
  notifications: NotificationType[]
}

export default function Notifications({ notifications }: NotificationsProps) {
  const [activeStep, setActiveStep] = useState(0)

  const handleStepChange = (step: number) => {
    setActiveStep(step)
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
          transition: 'transform 0.35s cubic-bezier(0.15, 0.3, 0.25, 1) 0s'
        }}
        className="w-full h-full"
      >
        {notifications.map((notification, i) => (
          <div key={i} className="w-full">
            <Notification notification={notification} />
          </div>
        ))}
      </SwipeableViews>
      <div className="absolute bottom-1 left-0 right-0 flex justify-center space-x-2">
        {notifications.map((_, index) => (
          <button
            key={index}
            className={cn(
              "w-2 h-2 rounded-full transition-colors duration-200",
              index === activeStep ? "bg-primary" : "bg-gray-300"
            )}
            onClick={() => setActiveStep(index)}
          />
        ))}
      </div>
    </div>
  )
}