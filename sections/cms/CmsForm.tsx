'use client'

import React from 'react'
import { Section, Heading } from '../../components'
import { DocumentForm } from '../../components'
import { DocumentFormProps } from '../../components/cms/forms/DocumentForm'
import { SectionProps, HeadingProps } from '../../types'

type CmsFormProps = SectionProps & HeadingProps & DocumentFormProps

const CmsForm: React.FC<CmsFormProps> = (props) => {
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

		...rest
	} = props

	return (
		<Section
			requireAuth
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
			<DocumentForm {...rest} />
		</Section>
	)
}

export default CmsForm
