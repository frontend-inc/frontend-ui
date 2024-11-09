'use client'

import React from 'react'
import { cn } from 'frontend-shadcn'
import { Typography } from '../../../core'
import { Image } from '../../..'

export type ProductCardProps = {
	ref?: React.Ref<HTMLDivElement>
	avatar?: React.ReactNode
	image: string
	label?: string
	primary: string
	secondary?: string | React.ReactNode
	actions?: React.ReactNode
	secondaryAction?: React.ReactNode
	price: string
	compareAtPrice?: string
	handleClick?: () => void
	height?: number
	addToCart?: React.ReactNode
	slots?: {
		item?: any
		image?: any
	}
}

const ProductCard = React.forwardRef<HTMLDivElement, ProductCardProps>(
	(props, ref) => {
		const {
			label,
			primary,
			secondary,
			price,
			compareAtPrice,
			actions,
			secondaryAction,
			handleClick,
			image,
			height = 300,
			addToCart,
			slots = {
				item: {},
				image: {},
			},
		} = props

		return (
			<div ref={ref} className={cn('w-full overflow-hidden bg-background')}>
				<div className="min-h-[250px] w-full relative overflow-hidden">
					<Image
						src={image}
						height={height}
						alt={primary}
						label={label}
						aspectRatio={1.0}
						handleClick={handleClick}
						{...slots.image}
					/>
				</div>
				<div className="py-2 flex flex-col space-y-4 w-full justify-between items-between">
					<div className="w-full px-2 flex flex-col space-y-1">
						<Typography variant="subtitle2">{primary}</Typography>
						<div className="flex flex-row space-x-2">
							<Typography className="text-sm text-foreground" variant="caption">
								{price}
							</Typography>
							{compareAtPrice && (
								<Typography className="line-through" variant="caption">
									{compareAtPrice}
								</Typography>
							)}
						</div>
						{secondary && (
							<Typography
								className="text-sm text-muted-foreground"
								variant="body2"
							>
								{secondary}
							</Typography>
						)}
					</div>
					{addToCart}
					<div className="flex flex-row justify-between">
						{actions}
						{secondaryAction}
					</div>
				</div>
			</div>
		)
	}
)

ProductCard.displayName = 'ProductCard'

export default ProductCard
