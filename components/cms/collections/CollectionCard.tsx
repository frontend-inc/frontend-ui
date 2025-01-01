'use client'

import React from 'react'
import { cn } from '@nextui-org/react'
import { Typography } from '../..'
import { Image } from '../..'

export type CollectionCardProps = {
	ref?: React.Ref<HTMLDivElement>
	avatar?: React.ReactNode
	image: string
	label?: string
	primary: string
	secondary?: string | React.ReactNode
	actions?: React.ReactNode
	secondaryAction?: React.ReactNode
	compareAtPrice?: string
	handleClick?: () => void
	addToCart?: React.ReactNode
	disableBorder?: boolean
	slots?: {
		item?: any
		image?: any
	}
}

const CollectionCard = React.forwardRef<HTMLDivElement, CollectionCardProps>(
	(props, ref) => {
		const {
			label,
			primary,
			handleClick,
			image,
			disableBorder,
			slots = {
				item: {},
				image: {},
			},
		} = props

		return (
			<div
				ref={ref}
				className={cn(
					!disableBorder && 'border border-divider hover:shadow-md',
					'w-full overflow-hidden rounded-lg transition-shadow duration-300 bg-background'
				)}
			>
				<div className="min-h-[240px] w-full relative overflow-hidden">
					<Image
						src={image}
						height={240}
						alt={primary}
						label={label}
						aspectRatio={4 / 3}
						handleClick={handleClick}
						disableBorderRadius={!disableBorder}
						{...slots.image}
					/>
				</div>
				<div className="px-4 pt-2 pb-4 w-full">
					<Typography variant="subtitle1">{primary}</Typography>
				</div>
			</div>
		)
	}
)

CollectionCard.displayName = 'CollectionCard'

export default CollectionCard
