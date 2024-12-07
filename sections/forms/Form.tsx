'use client'

import React from 'react'
import { Section } from '../../components'
import { FormData } from '../../components'
import { FormDataProps } from '../../components/cms/forms/FormData'
import { SectionProps } from '../../types'

type FormProps = SectionProps & FormDataProps

const Form: React.FC<FormProps> = (props) => {
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
			<FormData {...rest} />
		</Section>
	)
}

export default Form
