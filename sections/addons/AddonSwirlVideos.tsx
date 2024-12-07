'use client'

import React from 'react'
import { Section } from '../../components'
//import { SwirlVideos } from '../../components'
import { SwirlVideosProps } from '../../components/addons/swirl/SwirlVideos'
import { SectionProps } from '../../types'

type AddonSwirlVideosProps = SectionProps & SwirlVideosProps

const AddonSwirlVideos: React.FC<AddonSwirlVideosProps> = (props) => {
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
			<></>
		</Section>
	)
}

export default AddonSwirlVideos
