'use client'

import React from 'react'
import { Heading, Stack, Container } from '../../../components'
import { Image } from '../..'
import { SpotlightListProps } from './SpotlightList'

const SpotlightCard: React.FC<SpotlightListProps> = (props) => {
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
		<div className={'pt-16 py-6 h-auto w-full'}>
			<Container maxWidth="xl">
        <Stack direction="row" split="1/2" className='items-center'>
          <div className="w-full flex flex-col space-y-6">
            <Heading 
              label={ label }
              title={ title }
              subtitle={ subtitle }
              size="2xl"
            />
            {actions && actions}
          </div>					
          <Image
            src={image}
            alt={title}							
            aspectRatio={1.5}
            objectFit={objectFit}
            enableGradient={enableGradient}
            enableOverlay={enableOverlay}
          />
				</Stack>
      </Container>
		</div>
	)
}

export default SpotlightCard
