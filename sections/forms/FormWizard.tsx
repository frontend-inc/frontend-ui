'use client'

import React from 'react'
import { Section } from '../../components'
import { FormDataWizard } from '../../components'
import { FormDataWizardProps } from '../../components/cms/forms/FormDataWizard'
import { SectionProps } from '../../types'

type FormWizardProps = SectionProps & FormDataWizardProps

const FormWizard: React.FC<FormWizardProps> = (props) => {
	const {
		bgColor,
		bgImage,
		bgOverlay,
		mode,
		py,
		px,
		maxWidth = 'md',
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
			<FormDataWizard {...rest} />
		</Section>
	)
}

export default FormWizard
