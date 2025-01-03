'use client'

import React from 'react'
import { Section } from '../../components'
import { CoverCarousel } from '../../components'
import { CoverCarouselProps } from '../../components/web/covers/CoverCarousel'
import { SectionProps } from '../../types'

type UICoverCarouselProps = SectionProps & CoverCarouselProps

const UICoverCarousel: React.FC<UICoverCarouselProps> = (props) => {
	const {
		bgColor,
		bgImage,
		bgOverlay,
		mode = 'dark',
		px,
		py,
		maxWidth,
		requireAuth,
		...rest
	} = props

	return (
		<Section
			requireAuth={requireAuth}
			mode={mode}
			py="none"
			px="none"
			maxWidth={maxWidth}
		>
			<CoverCarousel {...rest} />
		</Section>
	)
}

export default UICoverCarousel
