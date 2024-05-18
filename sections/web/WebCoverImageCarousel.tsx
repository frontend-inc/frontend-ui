import React from 'react'
import { Section } from '../../components'
import { CoverImageCarousel } from '../../components'
import { CoverImageCarouselProps } from '../../components/web/covers/CoverImageCarousel'
import { SectionProps } from '../../types'

type WebCoverImageCarouselProps = SectionProps & CoverImageCarouselProps

const WebCoverImageCarousel: React.FC<WebCoverImageCarouselProps> = (props) => {
	const { bgcolor, py, px, maxWidth, ...rest } = props

	return (
		<Section requireAuth={requireAuth} bgcolor={bgcolor} py={py} px={px} maxWidth={maxWidth}>
			<CoverImageCarousel {...rest} />
		</Section>
	)
}

export default WebCoverImageCarousel
