'use client'

import React from 'react'
import { Section } from '../../components'
import { Spotlight } from '../../components'
import { SpotlightProps } from '../../components/web/spotlight/Spotlight'
import { SectionProps } from '../../types'

type UISpotlightProps = SectionProps & SpotlightProps

const UISpotlight: React.FC<UISpotlightProps> = (props) => {
	
  const { 
    bgColor, 
    mode, 
    py, 
    px, 
    maxWidth='lg', 
    requireAuth, 
    ...rest 
  } = props

	return (
		<Section
			requireAuth={requireAuth}
			bgColor={bgColor}
			mode={mode}
			py={py}
			px={0}
			maxWidth={maxWidth}
		>
			<Spotlight {...rest} />
		</Section>
	)
}

export default UISpotlight
