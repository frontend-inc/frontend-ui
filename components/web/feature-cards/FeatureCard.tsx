'use client'

import React from 'react'
import { useApp } from '../../../hooks'
import { Button, Typography } from '../../../components'
import { Image } from '../..'
import { useRouter } from 'next/navigation'
import { cn } from 'frontend-shadcn'

export type FeaturedCardProps = {
  direction?: 'column' | 'row' | 'row-reverse'
	label?: string
	title?: string
	subtitle?: string
	image?: string
	buttonText?: string
	href?: string	
	handleClick?: () => void
	objectFit?: 'cover' | 'contain'
	enableOverlay?: boolean
	enableGradient?: boolean
	variant?: 'default' | 'fill' | 'outline'
}

const FeaturedCard: React.FC<FeaturedCardProps> = (props) => {
	const { clientUrl } = useApp()
	
  const {
		label,
		title,
		subtitle,
		image = '',
		href,
		buttonText,
		direction = 'row',
		handleClick,
		objectFit = 'cover',
		enableOverlay = false,
		enableGradient = false,
		variant,
	} = props || {}

  const flexDirectionClass = {
    'row': 'flex-row',
    'column': 'flex-col',
    'row-reverse': 'flex-row-reverse',
  }

	const router = useRouter()

	const handleItemClick = () => {
		if (handleClick) {
			return handleClick()
		} else if (href) {
			router.push(`${clientUrl}${href}`)
		}
	}

	return (
		<div
			className={cn(
				'flex items-center gap-10 flex-wrap md:flex-nowrap',
				direction && flexDirectionClass[direction],
				variant == 'outline' && 'p-6 border-2 border-border rounded-lg',
				variant == 'fill' && 'p-6 bg-muted/50 rounded-lg'
			)}
		>
			<div className={cn(
        "w-full",
        direction != 'column' && "md:w-1/2"
      )}>
				<Image
					label={label}
					src={image}
					height={320}
					aspectRatio={1.5}
					objectFit={objectFit}
					alt={title}
					enableOverlay={enableOverlay}
					enableGradient={enableGradient}
					disableBorderRadius={variant == 'outline' ? true : false}
				/>
			</div>
			<div 
        className={cn(
          "flex flex-col gap-4 w-full",
          direction != 'column' && "md:w-1/2"
        )}>
				<Typography variant="h5">{title}</Typography>
				<Typography variant="subtitle2" className="text-muted-foreground">
					{subtitle}
				</Typography>
				{buttonText && (
					<div className="flex flex-row gap-4">
						<Button size="lg" onClick={handleItemClick}>
							{buttonText}
						</Button>
					</div>
				)}
			</div>
		</div>
	)
}

export default FeaturedCard
