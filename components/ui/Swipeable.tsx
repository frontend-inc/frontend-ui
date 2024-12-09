'use client'

import React, { useEffect, useState } from 'react'
import {
	Button,
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from 'frontend-shadcn'
import { type CarouselApi } from 'frontend-shadcn'
import { cn } from 'frontend-shadcn'

type SwipeableProps = {
	children: React.ReactNode[]
	enableDots?: boolean
	enableArrows?: boolean
	enableAutoPlay?: boolean
	interval?: number
  itemsPerSlide?: 1 | 2 | 3 | 4 | 5 | 6
	className?: string
}

const Swipeable: React.FC<SwipeableProps> = (props) => {
	const { children = [], itemsPerSlide=1, enableDots, enableArrows, className } = props

	const [api, setApi] = useState<CarouselApi>()
	const [current, setCurrent] = useState(0)
	const [count, setCount] = useState(0)

  const basisClasses = {
    2: 'basis-1/2',
    3: 'basis-1/3',
    4: 'basis-1/4',
    5: 'basis-1/5',
    6: 'basis-1/6',
  }

	const handleSlide = (index: number) => {
		api?.scrollTo(index)
	}

	useEffect(() => {
		if (!api) return
		setCount(api.scrollSnapList().length)
		setCurrent(api.selectedScrollSnap())
		api.on('select', () => {
			setCurrent(api.selectedScrollSnap() || 0)
		})
	}, [api])

	return (
		<Carousel setApi={setApi} className={'w-full'}>
			<CarouselContent>
				{children?.map((child, index) => (
					<CarouselItem 
            key={index}
            className={cn(
              itemsPerSlide > 1 && basisClasses[itemsPerSlide]
            )}
          >{child}</CarouselItem>
				))}
			</CarouselContent>
			{enableArrows && (
				<>
					<CarouselPrevious className="absolute h-9 w-9 left-4 top-1/2 -translate-y-1/2 bg-transparent text-foreground/70 hover:bg-background/50 hover:text-foreground border-0" />
					<CarouselNext className="absolute h-9 w-9 right-4 top-1/2 -translate-y-1/2 bg-transparent text-foreground/70 hover:text-foreground hover:bg-background/50 border-0" />
				</>
			)}
			{enableDots && count > 1 && (
				<div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-1 backdrop-blur-md bg-black/30 py-2 px-4 rounded-full mx-auto w-fit">
					{children.map((_, index) => (
						<Button
							key={index}
							variant="ghost"
							size="sm"
							className={cn(
								'w-2 h-2 rounded-full p-0 transition-all duration-300 ease-in-out hover:bg-white',
								index === current ? 'bg-white w-5' : 'bg-white/50'
							)}
							onClick={() => handleSlide(index)}
						/>
					))}
				</div>
			)}
		</Carousel>
	)
}

export default Swipeable
