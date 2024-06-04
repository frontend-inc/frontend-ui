import React from 'react'
import { Section } from '../../components'
import { HeroCalendly } from '../../components'
import { HeroCalendlyProps } from '../../components/cms/heros/addons/HeroCalendly'
import { SectionProps } from '../../types'

type CmsCalendlyProps = SectionProps & HeroCalendlyProps

const CmsCalendly: React.FC<CmsCalendlyProps> = (props) => {
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
			<HeroCalendly {...rest} />
		</Section>
	)
}

export default CmsCalendly
