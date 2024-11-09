'use client'

import React from 'react'
import { Section, Heading } from '../../components'
import { KlaviyoSubscribe } from '../../components'
import { KlaviyoSubscribeProps } from '../../components/addons/klaviyo/KlaviyoSubscribe'
import { SectionProps, HeadingProps } from '../../types'

type AddonKlaviyoSubscribeProps = SectionProps &
	HeadingProps &
	KlaviyoSubscribeProps

const AddonKlaviyoSubscribe: React.FC<AddonKlaviyoSubscribeProps> = (props) => {
	const {
		label,
		title,
		subtitle,
		textAlign,
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
			<Heading
				label={label}
				title={title}
				subtitle={subtitle}
				textAlign={textAlign}
			/>
			<KlaviyoSubscribe {...rest} />
		</Section>
	)
}

export default AddonKlaviyoSubscribe
