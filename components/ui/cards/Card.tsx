'use client'

import React from 'react'
import { cn } from '@nextui-org/react'
import { Typography } from '../../../components'
import { Card as NextUICard, Image } from '@nextui-org/react'

export type CardProps = {
	ref?: React.Ref<HTMLDivElement>
	avatar?: React.ReactNode
	image?: string
	label?: string
	title: string
	subtitle?: string
	description?: string
	actions?: React.ReactNode
	secondaryAction?: React.ReactNode
	fullWidth?: boolean
	handleClick?: () => void
	handleSelect?: () => void
	imageHeight?: number
	imageWidth?: number
	enableOverlay?: boolean
	enableGradient?: boolean
	classNames?: string
}

// @ts-ignore
const Card: React.FC<CardProps> = React.forwardRef<HTMLDivElement, CardProps>(
	(props, ref) => {
		const {
			label,
			title,
			subtitle,
			description,
			actions,
			secondaryAction,
			handleClick,
			image,
			imageHeight=240,
			imageWidth=320,
			classNames,
		} = props

		return (
			<div ref={ref} className={cn('w-full overflow-hidden', classNames)}>
        <NextUICard 
          isPressable 
          isHoverable
          onPress={ handleClick }
          shadow="none"
          className='w-full'
        >
				<Image
          removeWrapper
					src={image}
					height={imageHeight}
					width={imageWidth}
					alt={title}
					label={label}
          className='w-full object-cover'
				/>
        </NextUICard>
				<div className="mx-2 pt-3 flex flex-col space-y-2 overflow-hidden">
					<Typography variant="subtitle2">{title}</Typography>
					{subtitle && (
						<Typography variant="body2" className="text-foreground/70">
							{subtitle}
						</Typography>
					)}
					{description && (
						<Typography variant="body1" className="text-foreground/70">
							{description}
						</Typography>
					)}
					{actions}
					{secondaryAction}
				</div>
			</div>
		)
	}
)

Card.displayName = 'Card'

export default Card
