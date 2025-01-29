'use client'

import React from 'react'
import { Card, CardFooter } from '@nextui-org/react'
import { Image } from '../..'
import { Typography } from '../../../components'
import { CardProps } from './CmsCard'

const CoverCard: React.FC<CardProps> = (props) => {
	const {
		label,
		title,
		subtitle,
		actions,
		secondaryAction,
		handleClick,
		image,
		enableGradient,
		enableOverlay,
	} = props || {}

	return (
		<Card isFooterBlurred>
			<Image
				disableBorderRadius
				label={label}
				src={image}
				alt={title}
				aspectRatio={0.8}
				handleClick={handleClick}
				enableGradient={enableGradient}
				enableOverlay={enableOverlay}
			/>
			<CardFooter className="dark absolute bottom-0 left-0 w-full p-4 z-20">
				<Typography variant="body1" className="text-white text-ellipsis">
					<Typography variant="subtitle1">{title}</Typography>
					<Typography variant="body2">{subtitle}</Typography>
					<div className="flex flex-row justify-between">
						{actions}
						{secondaryAction}
					</div>
				</Typography>
			</CardFooter>
		</Card>
	)
}

export default CoverCard
