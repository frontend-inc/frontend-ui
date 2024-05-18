import React from 'react'
import { Section } from '../../components'
import { GorgiasContactForm } from '../../components'
import { GorgiasContactFormProps } from '../../components/addons/gorgias/GorgiasContactForm'
import { SectionProps } from '../../types'

type AddonGorgiasContactFormProps = SectionProps & GorgiasContactFormProps

const AddonGorgiasContactForm: React.FC<AddonGorgiasContactFormProps> = (
	props
) => {
	const { bgcolor, py, px, maxWidth, ...rest } = props

	return (
		<Section requireAuth={requireAuth} bgcolor={bgcolor} py={py} px={px} maxWidth={maxWidth}>
			<GorgiasContactForm {...rest} />
		</Section>
	)
}

export default AddonGorgiasContactForm
