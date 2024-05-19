import React from 'react'
import { Section, StripeBuyButton } from '../../components'
import { StripeBuyButtonProps } from '../../components/addons/stripe/StripeBuyButton'
import { SectionProps } from '../../types'

type AddonGiftUpProps = SectionProps & StripeBuyButtonProps

const AddonGiftUp: React.FC<AddonGiftUpProps> = (props) => {
	const { bgcolor, py, px, maxWidth, requireAuth, ...rest } = props

	return (
		<Section requireAuth={requireAuth} bgcolor={bgcolor} py={py} px={px} maxWidth={maxWidth}>
			<StripeBuyButton {...rest} />
		</Section>
	)
}

export default AddonGiftUp
