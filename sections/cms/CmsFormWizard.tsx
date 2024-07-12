import React from 'react'
import { Section } from '../../components'
import { FormWizard } from '../../components'
import { FormWizardProps } from '../../components/cms/forms/FormWizard'
import { SectionProps } from '../../types'

type CmsFormWizardProps = SectionProps & FormWizardProps

const CmsFormWizard: React.FC<CmsFormWizardProps> = (props) => {
	const {
		mode,
		py, //special case for padding y
		px,
		maxWidth,
		requireTeam,
		requirePaid,
		requireAdmin,
		...rest
	} = props

	return (
		<Section
			requireAuth
			requireTeam={requireTeam}
			requirePaid={requirePaid}
			requireAdmin={requireAdmin}
			mode={mode}
			py={0}
			px={px}
			maxWidth={maxWidth}
		>
			<FormWizard py={py} {...rest} />
		</Section>
	)
}

export default CmsFormWizard
