'use client'

import React from 'react'
import { Section } from '../../components'
import { EmailSubscribe } from '../../components'
import { EmailSubscribeProps } from '../../components/cms/newsletter/EmailSubscribe'
import { SectionProps } from '../../types'

type FormEmailSubscribeProps = SectionProps & EmailSubscribeProps

const FormEmailSubscribe: React.FC<FormEmailSubscribeProps> = (props) => {
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
			<EmailSubscribe {...rest} />
		</Section>
	)
}

export default FormEmailSubscribe
