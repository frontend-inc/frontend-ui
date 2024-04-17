import React from 'react'
import { Section } from '../../components'
import { CoverImage } from '../../components'
import { CoverImageProps } from '../../components/web/covers/CoverImage'
import { SectionProps } from '../../types'

type WebCoverImageProps = SectionProps & CoverImageProps

const WebCoverImage: React.FC<WebCoverImageProps> = (props) => {
	const { enableTransitions, bgcolor, py, px, maxWidth, ...rest } = props

	return (
		<Section enableTransitions={enableTransitions} bgcolor={bgcolor} py={py} px={px} maxWidth={maxWidth}>
			<CoverImage {...rest} />
		</Section>
	)
}

export default WebCoverImage
