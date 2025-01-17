'use client'

import React, { useState, useEffect } from 'react'
import { Empty, BlurFade } from '../../../components'
import { Image, RemixIcon, Typography } from '../../../components'
import { cn } from '@nextui-org/react'
import {
	Button,
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from 'frontend-shadcn'
import { type CarouselApi } from 'frontend-shadcn'

type ItemType = {
	icon?: string
	label?: string
	title?: string
	subtitle?: string
	image?: string
}

type FeatureIconProps = {
	icon?: string
	title?: string
	subtitle?: string
	direction?: 'column' | 'row'
	handleClick?: () => void
	isActive?: boolean
}

const FeatureTab: React.FC<FeatureIconProps> = (props) => {
	const {
		handleClick,
		icon,
		title,
		subtitle,
		direction = 'column',
		isActive,
	} = props || {}
	return (
		<button
			onClick={handleClick}
			className={cn(
				'rounded-lg border-1 border-transparent',
				isActive && 'border-divider shadow-lg bg-content1',
				'hover:bg-content2 cursor-pointer p-3 w-full transition-all duration-200'
			)}
		>
			<div
				className={cn(
					'flex flex-row flex-grow justify-start w-full h-full space-x-3 min-h-[60px]'
				)}
			>
				{icon && <RemixIcon name={icon} size="lg" className="text-primary" />}
				<div
					className={cn(
						'flex flex-col space-y-2',
						direction === 'row' && 'text-left'
					)}
				>
					<Typography
						variant="subtitle1"
						className={cn(isActive ? 'text-foreground' : 'text-foreground/70')}
					>
						{title}
					</Typography>
					<Typography
						className={cn(isActive ? 'text-foreground' : 'text-foreground/70')}
						variant="body1"
					>
						{subtitle}
					</Typography>
				</div>
			</div>
		</button>
	)
}

export type FeatureTabsProps = {
	items: ItemType[]
	enableGradient?: boolean
	enableOverlay?: boolean
	direction?: 'row' | 'column'
	enableDots?: boolean
	enableArrows?: boolean
}

const FeatureTabs: React.FC<FeatureTabsProps> = (props) => {
	const {
		items = [],
		enableGradient,
		enableOverlay,
		direction = 'row',
		enableDots = false,
	} = props || {}

	const [api, setApi] = useState<CarouselApi>()
	const [current, setCurrent] = useState(0)
	const [count, setCount] = useState(0)

	useEffect(() => {
		if (!api) return
		setCount(api.scrollSnapList().length)
		setCurrent(api.selectedScrollSnap())
		api.on('select', () => {
			setCurrent(api.selectedScrollSnap())
		})
	}, [api])

	const handleSlide = (index: number) => {
		api?.scrollTo(index)
	}

	if (items?.length == 0) {
		return (
			<Empty
				title="No featured content."
				description="Your featured content will appear here."
			/>
		)
	}

	return (
		<div
			className={cn(
				'w-full h-full flex flex-col space-y-4 items-center justify-center',
				direction == 'row' && 'md:flex-row md:space-x-4 md:space-y-0'
			)}
		>
			<div
				className={cn(
					'flex flex-col space-y-4 space-x-0 px-1',
					'w-full flex sm:flex-row sm:space-y-0 sm:space-x-4 sm:overflow-x-auto py-2',
					direction == 'row' &&
						'sm:basis-1/3 sm:flex-col sm:space-y-4 sm:space-x-0'
				)}
			>
				{items?.map((item, i) => (
					<BlurFade delay={0.25} inView key={i} className="w-full">
						<FeatureTab
							icon={item?.icon}
							title={item?.title}
							subtitle={item?.subtitle}
							handleClick={() => handleSlide(i)}
							isActive={i === current}
						/>
					</BlurFade>
				))}
			</div>
			<Carousel
				setApi={setApi}
				className={cn(
					'w-full h-full relative',
					direction == 'row' && 'md:basis-2/3'
				)}
			>
				<CarouselContent className="h-full">
					{items.map((item, index) => (
						<CarouselItem key={index}>
							<div className="w-full">
								<BlurFade inView delay={0.25} className="w-full p-2">
									<Image
										fullWidth
										height={512}
										src={item?.image}
										alt={item?.title}
										enableGradient={enableGradient}
										enableOverlay={enableOverlay}
									/>
								</BlurFade>
							</div>
						</CarouselItem>
					))}
				</CarouselContent>
				{enableDots && count > 1 && (
					<div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-1 backdrop-blur-md bg-black/30 py-2 px-4 rounded-full mx-auto w-fit">
						{items.map((_, index) => (
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
		</div>
	)
}

export default FeatureTabs
