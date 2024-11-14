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
		textAlign,
		bgColor,
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
			mode={mode}
			py={py}
			px={px}
			maxWidth={maxWidth}
		>
			<div className="flex flex-col space-y-[40px] w-full">
				<Heading
					label={label}
					title={title}
					subtitle={subtitle}
					textAlign={'center'}
          size="md"
				/>
				<Images {...rest} />
			</div>
		</Section>
	)
}

export default UIImages
