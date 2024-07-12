import React from 'react'
import { Section } from '../../components'
import { EmailSignup } from '../../components'
import { EmailSignupProps } from '../../components/cms/contacts/EmailSignup'
import { SectionProps } from '../../types'

type CmsEmailSignupProps = SectionProps & EmailSignupProps

const CmsEmailSignup: React.FC<CmsEmailSignupProps> = (props) => {
	const {
		mode,
		py,
		px,
		maxWidth,
		requireAuth,
		requireTeam,
		requirePaid,
		requireAdmin,
		...rest
	} = props

	return (
		<Section
			requireAuth={requireAuth}
			requireTeam={requireTeam}
			requirePaid={requirePaid}
			requireAdmin={requireAdmin}
			mode={mode}
			py={py}
			px={px}
			maxWidth={maxWidth}
		>
			<EmailSignup {...rest} />
		</Section>
	)
}

export default CmsEmailSignup
