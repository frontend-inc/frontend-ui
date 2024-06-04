import React from 'react'
import { Section } from '../../../components'
import { AddonCalendly } from '../../../components'
import { AddonCalendlyProps } from '../../../components/cms/addons/AddonCalendly'
import { SectionProps } from '../../../types'

type CmsCalendlyProps = SectionProps & AddonCalendlyProps

const CmsAddonCalendly: React.FC<CmsCalendlyProps> = (props) => {
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
			<AddonCalendly {...rest} />
		</Section>
	)
}

export default CmsAddonCalendly
