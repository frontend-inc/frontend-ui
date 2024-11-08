'use client'

import React from 'react'
import { cn } from 'frontend-shadcn'
import { Typography } from '../../core'
import { Card as ShadcnCard, CardContent, CardFooter } from 'frontend-shadcn'
import { Image } from '../..'

export type CardProps = {
	ref?: React.Ref<HTMLDivElement>
	sortable?: boolean
	selectable?: boolean
	selected?: boolean
	avatar?: React.ReactNode
	image?: string
	label?: string
	primary: string | React.ReactNode
	secondary?: string | React.ReactNode
  tertiary?: string | React.ReactNode
	actions?: React.ReactNode
	secondaryAction?: React.ReactNode
	handleClick?: () => void
	handleSelect?: () => void
	size?: number
	slots?: {
		item?: any
		image?: any
	}
}

// @ts-ignore
const Card: React.FC<CardProps> = React.forwardRef<HTMLDivElement, CardProps>(
	(props, ref) => {
		const {
			label,
			primary,
			secondary,
      tertiary,
			actions,
			secondaryAction,
			handleClick,
			image,
			size = 240,
			slots = {
				item: {},
				image: {},
			},
		} = props

		return (
			<div
				ref={ref}
				className={cn('w-full overflow-hidden')}
				{...slots.item}
			>
				<div className='w-full relative overflow-hidden'>
					<Image
						src={image}
						height={size}
						alt={primary}
						label={label}
						handleClick={handleClick}
						aspectRatio={4 / 3}
						{...slots.image}
					/>
				</div>
				<div className='mx-2 pt-3 flex flex-col space-y-2 overflow-hidden'>
					<Typography variant="subtitle2">{primary}</Typography>
					{secondary && (
						<Typography variant="body2" className="text-muted-foreground">
							{secondary}
						</Typography>
					)}
          {tertiary && (
						<Typography variant="body2" className="text-muted-foreground">
							{tertiary}
						</Typography>
					)}
				</div>
				<CardFooter className="flex justify-between">
					{actions}
					{secondaryAction}
				</CardFooter>
			</div>
		)
	}
)

Card.displayName = 'Card'

export default Card
