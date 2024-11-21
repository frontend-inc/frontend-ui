'use client'

import React from 'react'
import { Container, Heading } from '../../../components'
import { Image } from '../..'
import { TypographyVariantsType } from '../../../types'
import { cn } from 'frontend-shadcn'

export type SpotlightListProps = {
	label?: string
	image?: string
  textVariant?: TypographyVariantsType
	title?: string 
	subtitle?: string 
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
		actions,
		enableGradient,
    enableOverlay,
    objectFit = 'cover',
	} = props || {}

	return (
		<div className="h-auto w-full">
      <div className="flex flex-col space-y-6 px-2 w-full items-center">
        <Heading 
          label={ label }
          title={ title }
          subtitle={ subtitle }
          textAlign='center'
          size='2xl'
        />						
        {actions && actions}
        <Container maxWidth="lg">
          <Image              
            src={image}
            alt={title}
            aspectRatio={1.5}
            objectFit="contain"
            enableGradient={enableGradient}
            enableOverlay={enableOverlay}
          />
        </Container>
      </div>
		</div>
	)
}

export default Spotlight
