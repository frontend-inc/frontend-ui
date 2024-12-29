'use client'

import React from 'react'
import { cn } from 'frontend-shadcn'
import { NextImage } from '../..'
import { Typography } from '../../../components'
import { CardProps } from './Card'

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
		<div className="dark">
			<div
				className={cn('relative flex flex-col overflow-hidden w-full rounded')}
			>				
        <NextImage
          label={label}
          src={image}
          alt={title}
          handleClick={handleClick}
          className={'w-full'}
          enableGradient={enableGradient}
          enableOverlay={enableOverlay}
        />				
				<div className="absolute bottom-0 left-0 z-10 w-full p-3">
					<div className="flex flex-col justify-between items-end w-full">
						<div className="w-full">
							<Typography variant="subtitle1">{title}</Typography>
							<Typography variant="body2">{subtitle}</Typography>
							<div className="flex flex-row justify-between">
								{actions}
								{secondaryAction}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default CoverCard
