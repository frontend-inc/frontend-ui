import React from 'react'
import { Section } from '../../components'
import { CTA } from '../../components'
import { CTAProps } from '../../components/web/CTA/CTA'
import { SectionProps } from '../../types'

type WebCTAProps = SectionProps & CTAProps

const WebCTA: React.FC<WebCTAProps> = (props) => {
	const {
		bgcolor,
		py,
		px,
		maxWidth,
		requireAuth,
		requireTeam,
		requirePaid,
		requireAdmin,
		...rest
	} = props

	return (
		<Section
			requireAuth={requireAuth}
			requireTeam={requireTeam}
			requirePaid={requirePaid}
			requireAdmin={requireAdmin}
			bgcolor={bgcolor}
			py={py}
			px={px}
			maxWidth={maxWidth}
		>
			<CTA {...rest} />
		</Section>
	)
}

export default WebCTA
