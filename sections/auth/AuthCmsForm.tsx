import React from 'react'
import { Section } from '../../components'
import { AuthForm } from '../../components'
import { CollectionFormProps } from '../../components/cms/forms/CollectionForm'
import { SectionProps } from '../../types'

type AuthCmsFormProps = SectionProps & CollectionFormProps

const AuthCmsForm: React.FC<AuthCmsFormProps> = (props) => {
	const { bgcolor, py, px, maxWidth, ...rest } = props

	return (
		<Section
			requireAuth
			bgcolor={bgcolor}
			py={py}
			px={px}
			maxWidth={maxWidth}
		>
			<AuthForm {...rest} />
		</Section>
	)
}

export default AuthCmsForm
