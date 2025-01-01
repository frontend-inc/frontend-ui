'use client'

import React from 'react'
import { Section } from '../../components'
import { Image } from '../../components'
import { ResponsiveImageProps } from '../../components/ui/images/Image'
import { SectionProps } from '../../types'

type UIImageProps = SectionProps & ResponsiveImageProps & {
		title?: string
    image: string
	}

const UIImage: React.FC<UIImageProps> = (props) => {
	const {
    image,
		title,
		variant,
		bgColor,
		bgImage,
		bgOverlay,
		mode,
		py,
		px,    
		maxWidth = 'sm',
		aspectRatio = 1.5,
		requireAuth,
		...rest
	} = props

	return (
		<Section
			requireAuth={requireAuth}
			bgColor={bgColor}
			bgImage={bgImage}
			bgOverlay={bgOverlay}
			mode={mode}
			py={py}
			px={px}
			maxWidth={maxWidth}
			variant={variant}
		>
			<figure className="w-full flex flex-col space-y-2">
				<Image {...rest} src={image} aspectRatio={aspectRatio} />
				{title && (
					<figcaption className="text-sm text-foreground/70 text-center">
						{title}
					</figcaption>
				)}
			</figure>
		</Section>
	)
}

export default UIImage
