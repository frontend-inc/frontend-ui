'use client'

import React from 'react'
import { Section } from '../../components'
import { Blog } from '../../components'
import { BlogProps } from '../../components/ui/typography/Blog'
import { SectionProps } from '../../types'

type UIBlogPostProps = SectionProps & BlogProps

const UIBlogPost: React.FC<UIBlogPostProps> = (props) => {
	const {
		bgColor,
		bgImage,
		bgOverlay,
		mode,
		py = 'sm',
		px,
		maxWidth = 'lg',
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
		>
			<Blog {...rest} />
		</Section>
	)
}

export default UIBlogPost
