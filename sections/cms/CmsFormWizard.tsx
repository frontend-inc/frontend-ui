import React from 'react'
import { Section } from '../../components'
import { FormWizard } from '../../components'
import { FormWizardProps } from '../../components/cms/forms/FormWizard'
import { SectionProps } from '../../types'

type CmsFormWizardProps = SectionProps & FormWizardProps

const CmsFormWizard: React.FC<CmsFormWizardProps> = (props) => {
	const {
		mode,
		py,
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
			py={py}
			px={px}
			maxWidth={maxWidth}
		>
			<FormWizard {...rest} />
		</Section>
	)
}

export default CmsFormWizard
