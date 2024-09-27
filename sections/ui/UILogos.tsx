import React from 'react'
import { Section } from '../../components'
import { Logos } from '../../components'
import { LogosProps } from '../../components/web/logos/Logos'
import { SectionProps } from '../../types'

type UILogosProps = SectionProps & LogosProps

const UILogos: React.FC<UILogosProps> = (props) => {
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
			py={3}
			px={px}
			maxWidth={maxWidth}
		>
			<Logos {...rest} />
		</Section>
	)
}

export default UILogos
