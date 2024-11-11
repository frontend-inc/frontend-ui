'use client'

import React from 'react'
import { Section } from '../../components'
import { FormDataWizard } from '../../components'
import { FormDataWizardProps } from '../../components/cms/forms/FormDataWizard'
import { SectionProps } from '../../types'

type CmsFormWizardProps = SectionProps & FormDataWizardProps

const CmsFormWizard: React.FC<CmsFormWizardProps> = (props) => {
	const { bgColor, mode, py, px, maxWidth, requireAuth, ...rest } = props

	return (
		<Section
			requireAuth={requireAuth}
			bgColor={bgColor}
			mode={mode}
			py={py}
			px={px}
			maxWidth={maxWidth}
		>
			<FormDataWizard {...rest} />
		</Section>
	)
}

export default CmsFormWizard
