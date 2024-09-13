import React from 'react'
import { Section } from '../../components'
import { GorgiasContactForm } from '../../components'
import { GorgiasContactFormProps } from '../../components/addons/gorgias/GorgiasContactForm'
import { SectionProps } from '../../types'

type AddonGorgiasContactFormProps = SectionProps & GorgiasContactFormProps

const AddonGorgiasContactForm: React.FC<AddonGorgiasContactFormProps> = (
	props
) => {
	const {
		mode,
		py,
		px,
		maxWidth,
		requireAuth,
		
		requirePaid,
		...rest
	} = props

	return (
		<Section
			requireAuth={requireAuth}
			
			requirePaid={requirePaid}
			mode={mode}
			py={py}
			px={px}
			maxWidth={maxWidth}
		>
			<GorgiasContactForm {...rest} />
		</Section>
	)
}

export default AddonGorgiasContactForm
