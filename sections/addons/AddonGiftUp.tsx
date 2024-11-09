'use client'

import React from 'react'
import { Section } from '../../components'
import { GiftUp } from '../../components'
import { GiftUpProps } from '../../components/addons/giftup/GiftUp'
import { SectionProps } from '../../types'

type AddonGiftUpProps = SectionProps & GiftUpProps

const AddonGiftUp: React.FC<AddonGiftUpProps> = (props) => {
	const {
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
			<GiftUp {...rest} />
		</Section>
	)
}

export default AddonGiftUp
