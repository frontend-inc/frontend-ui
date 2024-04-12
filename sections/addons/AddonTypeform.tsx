import React from 'react'
import { Section } from '../../components'
import { Typeform } from '../../components'
import { TypeformProps } from '../../components/addons/typeform/Typeform'
import { SectionProps } from '../../types'

type AddonTypeformProps = SectionProps & TypeformProps

const AddonTypeform: React.FC<AddonTypeformProps> = (props) => {
	const { bgcolor, py, px, maxWidth, ...rest } = props

	return (
		<Section bgcolor={bgcolor} py={py} px={px} maxWidth={maxWidth}>
			<Typeform {...rest} />
		</Section>
	)
}

export default AddonTypeform
