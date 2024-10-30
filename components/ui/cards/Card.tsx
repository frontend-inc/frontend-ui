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
			<ShadcnCard
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
						disableBorderRadius
						{...slots.image}
					/>
				</div>
				<CardContent className='px-4 pt-3 overflow-hidden'>
					<Typography variant="body1">{primary}</Typography>
					{secondary && (
						<Typography variant="body2" className="text-muted-foreground">
							{secondary}
						</Typography>
					)}
				</CardContent>
				<CardFooter className="flex justify-between">
					{actions}
					{secondaryAction}
				</CardFooter>
			</ShadcnCard>
		)
	}
)

Card.displayName = 'Card'

export default Card
