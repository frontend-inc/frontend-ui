'use client'

import React from 'react'
import { Section, Heading } from '../../components'
import { MailchimpSubscribe } from '../../components'
import { MailchimpSubscribeProps } from '../../components/addons/mailchimp/MailchimpSubscribe'
import { SectionProps, HeadingProps } from '../../types'

type AddonMailchimpSubscribeProps = SectionProps &
	HeadingProps &
	MailchimpSubscribeProps

const AddonMailchimpSubscribe: React.FC<AddonMailchimpSubscribeProps> = (
	props
) => {
	const {
		label,
		title,
		subtitle,
		textAlign,
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
			<Heading
				label={label}
				title={title}
				subtitle={subtitle}
				textAlign={textAlign}
			/>
			<MailchimpSubscribe {...rest} />
		</Section>
	)
}

export default AddonMailchimpSubscribe
