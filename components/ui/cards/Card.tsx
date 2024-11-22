'use client'

import React from 'react'
import { cn } from 'frontend-shadcn'
import { Typography } from '../../../components'
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
	title: string
	subtitle?: string
	description?: string
	actions?: React.ReactNode
	secondaryAction?: React.ReactNode
	handleClick?: () => void
	handleSelect?: () => void
	size?: number
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
			size = 240,
			enableGradient,
      enableOverlay,
      classNames
		} = props

		return (
			<div ref={ref} className={cn('w-full overflow-hidden', classNames)}>
        <Image
          src={image}
          height={size}
          alt={title}
          label={label}
          handleClick={handleClick}
          aspectRatio={4/3}
          enableGradient={enableGradient}
          enableOverlay={enableOverlay}
        />
				<div className="mx-2 pt-3 flex flex-col space-y-2 overflow-hidden">
					<Typography variant="subtitle2">{title}</Typography>
					{subtitle && (
						<Typography variant="body2" className="text-muted-foreground">
							{subtitle}
						</Typography>
					)}
					{description && (
						<Typography variant="body1" className="text-muted-foreground">
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
