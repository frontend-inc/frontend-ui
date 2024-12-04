'use client'

import React from 'react'
import { Image, AvatarImage } from '../..'
import { CardProps } from './Card'
import { Typography } from '../../../components'

export type ListCardProps = CardProps & {
	circular?: boolean
	disableImage?: boolean
}

const ListCard: React.FC<ListCardProps> = (props) => {
	const {
		circular = false,
		label,
		title,
		subtitle,
		actions,
		secondaryAction,
		handleClick,
		image,
		size = 140,
		disableImage,
		enableGradient,
		enableOverlay,
	} = props || {}

	return (
		<button
			onClick={handleClick}
			className="p-2 w-full border-b border-border last:border-b-0 hover:bg-muted/50"
		>
			<div className="flex flex-row items-center w-full">
				<div className="flex flex-col space-y-4 md:space-y-0 md:space-x-4 md:flex-row justify-start items-start flex-grow">
					{!disableImage && (
						<div className="flex-shrink-0 w-full md:w-[220px]">
							<div className="w-full pr-2 h-full flex flex-row justify-center items-center">
								{circular ? (
									<AvatarImage
										src={image}
										size={size}
										alt={title}
										enableGradient={enableGradient}
										enableOverlay={enableOverlay}
									/>
								) : (
									<Image
										label={label}
										src={image}
										height={size}
										alt={title}
										aspectRatio={4/3}
										enableGradient={enableGradient}
										enableOverlay={enableOverlay}
									/>
								)}
							</div>
						</div>
					)}
					<div className="flex flex-col justify-between min-h-[120px] flex-grow">
						<div className="flex flex-col space-y-1">
							<Typography variant="subtitle1">{title}</Typography>
							<Typography variant="body2" className="text-muted-foreground">
								{subtitle}
							</Typography>
						</div>
						<div className="flex flex-row justify-between items-center w-full">
							{actions}
							{secondaryAction}
						</div>
					</div>
				</div>
			</div>
		</button>
	)
}

export default ListCard
