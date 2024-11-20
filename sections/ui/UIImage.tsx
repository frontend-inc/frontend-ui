'use client'

import React from 'react'
import { Section } from '../../components'
import { Image } from '../../components'
import { ResponsiveImageProps } from '../../components/ui/images/Image'
import { SectionProps } from '../../types'

type UIImageProps = SectionProps & ResponsiveImageProps

const UIImage: React.FC<UIImageProps> = (props) => {
	const { 
    bgColor, 
    mode, 
    py, 
    px, 
    maxWidth='sm', 
    aspectRatio=1.5,
    requireAuth, 
    ...rest 
  } = props

	return (
		<Section
			requireAuth={requireAuth}
			bgColor={bgColor}
			mode={mode}
			py={py}
			px={px}
			maxWidth={maxWidth}
		>
			<Image 
        {...rest} 
        aspectRatio={aspectRatio}
      />
		</Section>
	)
}

export default UIImage
