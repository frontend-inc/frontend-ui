'use client'

import React from 'react'
import { Section } from '../../components'
import { EmailSubscribe } from '../../components'
import { EmailSubscribeProps } from '../../components/cms/newsletter/EmailSubscribe'
import { SectionProps } from '../../types'

type UIEmailSubscribeProps = SectionProps & EmailSubscribeProps

const UIEmailSubscribe: React.FC<UIEmailSubscribeProps> = (props) => {
	const {
		bgColor,
		mode,
		py=12,
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
			<EmailSubscribe {...rest} />
		</Section>
	)
}

export default UIEmailSubscribe
