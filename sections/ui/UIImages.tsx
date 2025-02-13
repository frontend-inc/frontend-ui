'use client'

import React from 'react'
import { Section, Heading } from '../../components'
import { Images } from '../../components'
import { ImagesProps } from '../../components/web/images/Images'
import { SectionProps, HeadingProps } from '../../types'

type UIImagesProps = SectionProps & HeadingProps & ImagesProps

const UIImages: React.FC<UIImagesProps> = (props) => {
	const {
		label,
		title,
		subtitle,
		textAlign = 'center',
		fontSize = 'md',
		variant,
		bgColor,
		bgImage,
		bgOverlay,
		mode,
		py,
		px,
		maxWidth,
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
			<div className="flex flex-col space-y-[40px] w-full">
				<Heading
					label={label}
					title={title}
					subtitle={subtitle}
					textAlign={textAlign}
					size={fontSize}
				/>
				<Images {...rest} />
			</div>
		</Section>
	)
}

export default UIImages
