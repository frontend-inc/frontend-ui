'use client'

import React, { useEffect, useState } from 'react'
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from 'frontend-shadcn'
import { Button } from '@nextui-org/react'
import { type CarouselApi } from 'frontend-shadcn'
import { cn } from '@nextui-org/react'

type SwipeableProps = {
	children: React.ReactNode[]
	enableDots?: boolean
	enableArrows?: boolean
	enableAutoPlay?: boolean
	interval?: number
	itemsPerSlide?: 1 | 2 | 3 | 4 | 5 | 6
	arrowHeight?: 10 | 20 | 30 | 40 | 50 | 60 | 70 | 80 | 90 | 100 // Arrow height in percentage
	className?: string
}

const Swipeable: React.FC<SwipeableProps> = (props) => {
	const {
		children = [],
		itemsPerSlide = 1,
		enableDots,
		enableArrows,
		arrowHeight = 50, // Default arrow height is 50% (middle)
		className,
	} = props

	const [api, setApi] = useState<CarouselApi>()
	const [current, setCurrent] = useState(0)
	const [count, setCount] = useState(0)

	const basisClasses = {
		2: 'md:basis-1/2',
		3: 'md:basis-1/3',
		5: 'md:basis-1/5',
		4: 'md:basis-1/4',
		6: 'md:basis-1/6',
	}

	const handleSlide = (index: number) => {
		api?.scrollTo(index)
	}

	useEffect(() => {
		if (!api) return
		setCount(api.scrollSnapList().length - itemsPerSlide)
		api.on('select', () => {
			setCurrent(api.selectedScrollSnap() || 0)
		})
	}, [api])

	// Generate dynamic top style for arrows based on arrowHeight prop
	const dynamicArrowHeight = `top-[${arrowHeight}%]`

	return (
		<Carousel setApi={setApi} className={cn('w-full', className)}>
			<CarouselContent>
				{children?.map((child, index) => (
					<CarouselItem
						key={index}
						className={cn(
							'basis-1/1 w-full h-full',
							itemsPerSlide > 1 && basisClasses[itemsPerSlide]
						)}
					>
						{child}
					</CarouselItem>
				))}
			</CarouselContent>
			{enableArrows && (
				<>
					<CarouselPrevious
						className={cn(
							'absolute h-9 w-9 left-4 -translate-y-1/2 bg-background/20 text-foreground/70 hover:bg-background/70 hover:text-foreground border-0',
							dynamicArrowHeight
						)}
					/>
					<CarouselNext
						className={cn(
							'absolute h-9 w-9 right-4 -translate-y-1/2 bg-background/20 text-foreground/70 hover:bg-background/70 hover:text-foreground border-0',
							dynamicArrowHeight
						)}
					/>
				</>
			)}
			{enableDots && count > 1 && (
				<div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-1 backdrop-blur-md bg-black/30 py-2 px-4 rounded-full mx-auto w-fit">
					{children.map((_, index) => (
						<Button
							key={index}
							variant="light"
							size="sm"
							className={cn(
								'w-2 h-2 rounded-full p-0 transition-all duration-300 ease-in-out hover:bg-white',
								index === current ? 'bg-white w-5' : 'bg-white/50'
							)}
							onPress={() => handleSlide(index)}
						/>
					))}
				</div>
			)}
		</Carousel>
	)
}

export default Swipeable
