'use client'

import React, { useEffect, useState } from 'react'
import { 
  Button,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from 'frontend-shadcn'
import { type CarouselApi } from "frontend-shadcn"
import { cn } from 'frontend-shadcn'

type SwipeableProps = {
	children: React.ReactNode[]
  enableDots?: boolean
  enableArrows?: boolean
	enableAutoPlay?: boolean
	interval?: number
	className?: string
}

const Swipeable: React.FC<SwipeableProps> = (props) => {
	const {
		children = [],
    enableDots,
		enableArrows,
		className,
	} = props


	const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)
 
  const handleSlide = (index: number) => {
    api?.scrollTo(index)
  }

  useEffect(() => {
    if (!api) return;     
    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap()) 
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() || 0)
    })
  }, [api])

	return (
		<Carousel setApi={setApi} className={cn('w-full', className)}>
      <CarouselContent>  
				{children?.map((child, index) => (
          <CarouselItem key={index}>
            {child}
          </CarouselItem> 
        ))}
			</CarouselContent>
      { enableArrows && (
        <>
          <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 bg-transparent text-foreground/70 hover:text-foreground border-0" />
          <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 bg-transparent text-foreground/70 hover:text-foreground border-0" />      
        </>
      )}
      {(enableDots && count > 1) && (
        <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2 backdrop-blur-md bg-black/30 py-2 px-4 rounded-full mx-auto w-fit">
          {children.map((_, index) => (
            <Button
              key={index}
              variant="ghost"
              size="sm"
              className={cn(
                'w-2 h-2 rounded-full p-0',                
                index === current ? 'bg-white' : 'bg-white/50'
                )
              }
              onClick={() => handleSlide(index)}
            />
          ))}
        </div>
      )}
    </Carousel> 
	)
}

export default Swipeable
