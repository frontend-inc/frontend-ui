'use client'

import React from 'react'
import { Typography } from '../../../components'
import { Label, Image } from '../..'
import { TypographyVariantsType } from '../../../types'

export type SpotlightListProps = {
	label?: string
	image?: string
	logos?: {
		image: string
		title: string
	}[]
  textVariant?: TypographyVariantsType
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
    textVariant='h1',
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
				<div className="flex flex-col space-y-8 px-2 w-full justify-start items-center">
					<div className="flex flex-col space-y-6 max-w-screen-md h-full w-full text-center">
						{label && (
							<div className="w-full flex justify-center">
								<Label label={label} />
							</div>
						)}
						<Typography
							variant={ textVariant }
							textAlign="center"
							className="front-semibold tracking-tight"
						>
							{title}
						</Typography>
            { subtitle && (
              <Typography variant="subtitle1" className="text-center text-foreground/70">
                {subtitle}
              </Typography>
            )}
            { description && (
              <Typography variant="body1" className="md:text-left xs:text-center text-foreground/70">
							  {description}
						  </Typography>
            )}
						{actions && actions}
					</div>
          <div className="w-full relative shadow-xl rounded-lg overflow-hidden">
            <Image
              src={image}
              alt={title}
              height={600}
              aspectRatio={1.5}
              objectFit="cover"
              enableGradient={enableGradient}
              enableOverlay={enableOverlay}
            />
          </div>
				</div>
		</div>
	)
}

export default Spotlight
