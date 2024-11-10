'use client'

import React from 'react'
import { Typography } from '../../core'
import { Logos, Label, Image } from '../..'

export type SpotlightListProps = {
	label?: string
	image?: string
	logos?: {
		image: string
		title: string
	}[]
	title?: string 
	subtitle?: string 
  description?: string
	actions?: React.ReactNode
	secondaryAction?: React.ReactNode	
	enableGradient?: boolean
  enableOverlay?: boolean
  objectFit?: 'cover' | 'contain'
}

const Spotlight: React.FC<SpotlightListProps> = (props) => {
	const {
		image,
		label,
		title,
		subtitle,
    description,
		actions,
		logos = [],
		enableGradient,
    enableOverlay,
    objectFit = 'cover',
	} = props || {}

	return (
		<div className="h-auto w-full">
			<div className="container mx-auto max-w-screen-lg">
				<div className="flex flex-col space-y-4 px-2 w-full justify-start items-center">
					<div className="flex flex-col space-y-2 max-w-[800px] h-full w-full text-center">
						{label && (
							<div className="w-full flex justify-center">
								<Label label={label} />
							</div>
						)}
						<Typography
							variant="h2"
							textAlign="center"
							className="tracking-tight"
						>
							{title}
						</Typography>
            { subtitle && (
              <Typography variant="subtitle1" className="md:text-left xs:text-center text-foreground/70">
                {subtitle}
              </Typography>
            )}
            { description && (
              <Typography variant="body1" className="md:text-left xs:text-center text-foreground/70">
							  {description}
						  </Typography>
            )}
						{actions && actions}
						{logos?.length > 0 && <Logos logos={logos} />}
						<div className="relative shadow-xl rounded-lg overflow-hidden">
							<Image
								src={image}
								alt={title}
								height={600}
								objectFit="cover"
								enableGradient={enableGradient}
                enableOverlay={enableOverlay}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Spotlight
