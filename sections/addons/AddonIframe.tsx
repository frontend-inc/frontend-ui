'use client'

import React from 'react'
import { Section } from '../../components'
import { Iframe } from '../../components'
import { IframeProps } from '../../components/addons/iframe/Iframe'
import { SectionProps } from '../../types'

export type AddonIframeProps = SectionProps & IframeProps

const AddonIframe: React.FC<AddonIframeProps> = (props) => {
	const {
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
		>
			<Iframe {...rest} />
		</Section>
	)
}

export default AddonIframe
