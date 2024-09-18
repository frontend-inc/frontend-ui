import React from 'react'
import { Section } from '../../components'
import { EmailSignup } from '../../components'
import { EmailSignupProps } from '../../components/cms/newsletter/EmailSignup'
import { SectionProps } from '../../types'

type UIEmailSignupProps = SectionProps & EmailSignupProps

const UIEmailSignup: React.FC<UIEmailSignupProps> = (props) => {
	const {
		mode,
		py,
		px,
		maxWidth,
		requireAuth,

		requirePaid,
		...rest
	} = props

	return (
		<Section
			requireAuth={requireAuth}
			requirePaid={requirePaid}
			mode={mode}
			py={py}
			px={px}
			maxWidth={maxWidth}
		>
			<EmailSignup {...rest} />
		</Section>
	)
}

export default UIEmailSignup
