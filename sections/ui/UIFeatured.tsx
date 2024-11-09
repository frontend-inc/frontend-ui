'use client'

import React from 'react'
import { Section, Heading } from '../../components'
import { Featured } from '../../components'
import { FeaturedProps } from '../../components/web/featured/Featured'
import { SectionProps, HeadingProps } from '../../types'

type UIFeaturedProps = SectionProps & HeadingProps & FeaturedProps

const UIFeatured: React.FC<UIFeaturedProps> = (props) => {
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
			<div className="flex flex-col space-y-2">
				<Heading
					label={label}
					title={title}
					subtitle={subtitle}
					textAlign={'center'}
					size="lg"
				/>
				<Featured {...rest} />
			</div>
		</Section>
	)
}

export default UIFeatured
