import React from 'react'
import { Section } from '../../components'
import { CTA } from '../../components'
import { CTAProps } from '../../components/web/CTA/CTA'
import { SectionProps } from '../../types'

type UICTAProps = SectionProps & CTAProps

const UICTA: React.FC<UICTAProps> = (props) => {
	const {
		mode,
		py,
		px,
		maxWidth,
		requireAuth,
		requireTeam,
		requirePaid,
		...rest
	} = props

	return (
		<Section
			requireAuth={requireAuth}
			requireTeam={requireTeam}
			requirePaid={requirePaid}
			mode={mode}
			py={py}
			px={px}
			maxWidth={maxWidth}
		>
			<CTA {...rest} />
		</Section>
	)
}

export default UICTA
