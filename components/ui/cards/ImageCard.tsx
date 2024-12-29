'use client'

import React from 'react'
import { NextImage } from '../../../components'
import { cn } from 'frontend-shadcn'

export type CardProps = {
	primary?: string
	secondaryAction?: React.ReactNode
	handleClick?: () => void
	height?: number
	image?: string
	slots?: {
		image?: any
	}
}

export default function ImageCard(props: CardProps) {

  const {
    primary,
    secondaryAction,
    handleClick,
    image,
    height = 260,
    slots = {
      image: {},
    },
  } = props || {}

	return (
		<div className="dark">
			<div
				className={cn(
					'relative flex flex-col overflow-hidden rounded',
					'transition-shadow duration-300 hover:shadow-md'
				)}
			>
        <NextImage
          src={image}
          height={height}
          alt={primary}
          handleClick={handleClick}
          className="w-full h-auto object-cover"
          { ...slots.image }
        />
				<div className="absolute top-2.5 right-2.5 flex flex-row justify-end">
					{secondaryAction}
				</div>
			</div>
		</div>
	)
}
