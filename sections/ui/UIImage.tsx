'use client'

import React from 'react'
import { Section } from '../../components'
import { Image } from '../../components'
import { ResponsiveImageProps } from '../../components/ui/images/Image'
import { SectionProps } from '../../types'

type UIImageProps = SectionProps & ResponsiveImageProps & {
  title?: string
}

const UIImage: React.FC<UIImageProps> = (props) => {

  const { 
    title,
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
      <figure className='w-full flex flex-col space-y-2'>
        <Image 
          {...rest} 
          aspectRatio={aspectRatio}
        />
        { title && (
          <figcaption className='text-sm text-muted-foreground text-center'>
            { title }
          </figcaption>
        )}
      </figure>
		</Section>
	)
}

export default UIImage
