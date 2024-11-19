'use client'

import React from 'react'
import { Typography } from '../../core'
import { Image, ProductRating } from '../..'
import { cn } from 'frontend-shadcn'

export type PDPProps = {
	direction?: 'row' | 'column'
	label?: string
	image?: string
	price?: string
	compareAtPrice?: string
  rating?: number
	description: string,
	title?: string	
	actions?: React.ReactNode
	addToCart?: React.ReactNode
	secondaryAction?: React.ReactNode
  enableGradient?: boolean
  enableOverlay?: boolean
  enableRatings?: boolean  
	children?: React.ReactNode	
}

const PDP: React.FC<PDPProps> = (props) => {
	const {
		direction = 'row',
		label,
		image,
    title,		
		addToCart,
		price,
    rating,
		compareAtPrice,
		description,
    enableGradient,
    enableOverlay,
		actions,
		secondaryAction
	} = props || {}

	return (
		<div className="flex flex-col space-y-2 w-full">
			{secondaryAction}
			<div className="w-full flex justify-center items-center">
				<div
					className={cn(
						'flex flex-col space-y-3 w-full',
						direction == 'row' && 'sm:flex-row sm:space-x-10 sm:space-y-0'
					)}
				>
					<div
						className={cn(
							'w-full flex flex-col space-y-5 justify-center items-center',
							direction == 'row' && 'md:w-1/2'
						)}
					>
						<div className="rounded-lg w-full">
							<Image
								src={image}
								alt={title}
								height={400}
								aspectRatio={4 / 3}
								label={label}
								enableGradient={enableGradient}
                enableOverlay={enableOverlay}
							/>
						</div>
						{actions}
					</div>
					<div
						className={cn(
							'w-full flex flex-col space-y-3',
							direction == 'row' && 'md:w-1/2'
						)}
					>
						<Typography variant="h3">{title}</Typography>
						<div className="flex flex-row space-x-2">
							<Typography variant="h6">{price}</Typography>
							{compareAtPrice && (
								<Typography
									variant="subtitle2"
									className="text-muted-foreground line-through"
								>
									{compareAtPrice}
								</Typography>
							)}
						</div>            
            {enableRatings == true && (
              <ProductRating rating={rating} />
            )}            
						{addToCart}
            <div dangerouslySetInnerHTML={{ __html: description }} />						
					</div>
				</div>
			</div>
		</div>
	)
}

export default PDP
