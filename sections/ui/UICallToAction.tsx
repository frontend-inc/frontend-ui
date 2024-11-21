'use client'

import React from 'react'
import { Section } from '../../components'
import { CallToAction } from '../../components'
import { CallToActionProps } from '../../components/web/cta/CallToAction'
import { SectionProps } from '../../types'

type UICallToActionProps = SectionProps & CallToActionProps

const UICallToAction: React.FC<UICallToActionProps> = (props) => {
	const {
    fill,
    border,
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
      fill={fill}
      border={border}
		>
			<CallToAction {...rest} />
		</Section>
	)
}

export default UICallToAction
