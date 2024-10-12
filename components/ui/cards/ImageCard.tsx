import React from 'react'
import { Image, TouchableOpacity } from '../../../components'
import { cn } from '../../../shadcn/lib/utils'

export type CardProps = {
	primary?: string
	secondaryAction?: React.ReactNode
	handleClick?: () => void
	image?: string
	height?: number
	slots?: {
		item?: React.HTMLAttributes<HTMLDivElement>
		image?: React.ImgHTMLAttributes<HTMLImageElement>
	}
}

export default function ImageCard({
	primary,
	secondaryAction,
	handleClick,
	image,
	height = 260,
	slots = {
		item: {},
		image: {},
	},
}: CardProps) {
	return (
		<div className="dark">
			<div
				className={cn(
					'relative flex flex-col overflow-hidden rounded',
					'transition-shadow duration-300 hover:shadow-md'
				)}
				{...slots.item}
			>
				<TouchableOpacity handleClick={handleClick}>
					<Image
						src={image}
						height={height}
						alt={primary}
						className="w-full h-auto object-cover"
						{...slots.image}
					/>
				</TouchableOpacity>
				<div className="absolute top-2.5 right-2.5 flex flex-row justify-end">
					{secondaryAction}
				</div>
			</div>
		</div>
	)
}
