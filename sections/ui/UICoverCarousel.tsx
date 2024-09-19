import React from 'react'
import { Section } from '../../components'
import { CoverCarousel } from '../../components'
import { CoverCarouselProps } from '../../components/web/covers/CoverCarousel'
import { SectionProps } from '../../types'

type UICoverCarouselProps = SectionProps & CoverCarouselProps

const UICoverCarousel: React.FC<UICoverCarouselProps> = (props) => {
	const {
		mode='dark',
		maxWidth,
		requireAuth,
		requirePaid,
		...rest
	} = props

	return (
		<Section
			requireAuth={requireAuth}
			requirePaid={requirePaid}
			mode={mode}
			py={0}
			px={0}
			maxWidth={maxWidth}
		>
			<CoverCarousel {...rest} />
		</Section>
	)
}

export default UICoverCarousel
