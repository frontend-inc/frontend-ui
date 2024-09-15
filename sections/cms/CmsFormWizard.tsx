import React from 'react'
import { Section } from '../../components'
import { DocumentFormWizardModal } from '../../components'
import { DocumentFormWizardModalProps } from '../../components/cms/forms/DocumentFormWizardModal'
import { SectionProps } from '../../types'

type CmsFormWizardProps = SectionProps & DocumentFormWizardModalProps

const CmsFormWizard: React.FC<CmsFormWizardProps> = (props) => {
	const { mode, py, px, maxWidth, requirePaid, ...rest } = props

	return (
		<Section
			requireAuth
			requirePaid={requirePaid}
			mode={mode}
			py={py}
			px={px}
			maxWidth={maxWidth}
		>
			<DocumentFormWizardModal {...rest} />
		</Section>
	)
}

export default CmsFormWizard
