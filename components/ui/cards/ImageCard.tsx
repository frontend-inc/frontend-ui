'use client'

import React from 'react'
import { Image } from '../../../components'
import { cn } from '@nextui-org/react'

export type CardProps = {
	primary?: string
	secondaryAction?: React.ReactNode
	handleClick?: () => void
	image?: string
  className?: string
}

export default function ImageCard(props: CardProps) {
	const {
		primary,
		secondaryAction,
		handleClick,
		image,
    className,
	} = props || {}

	return (
		<div className="dark">
			<div
				className={cn(
					'relative flex flex-col overflow-hidden rounded',
					'transition-shadow duration-300 hover:shadow-md',
          className 
				)}
			>
				<Image
					src={image}
					alt={primary}
					handleClick={handleClick}
					className="w-full h-auto object-cover"
				/>
				<div className="absolute top-2.5 right-2.5 flex flex-row justify-end">
					{secondaryAction}
				</div>
			</div>
		</div>
	)
}
