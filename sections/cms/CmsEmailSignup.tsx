import React from 'react'
import { Section } from '../../components'
import { EmailSignup } from '../../components'
import { EmailSignupProps } from '../../components/cms/contacts/EmailSignup'
import { SectionProps } from '../../types'

type CmsEmailSignupProps = SectionProps & EmailSignupProps

const CmsEmailSignup: React.FC<CmsEmailSignupProps> = (props) => {
	const { 
    bgcolor, 
    py, 
    px, 
    maxWidth, 
    ...rest 
  } = props

	return (
		<Section bgcolor={bgcolor} py={py} px={px} maxWidth={maxWidth}>
			<EmailSignup {...rest} />
		</Section>
	)
}

export default CmsEmailSignup
