import React from 'react'
import { Section, Heading } from '../../../components'
import { AddonCalendly } from '../../../components'
import { AddonCalendlyProps } from '../../../components/cms/addons/AddonCalendly'
import { SectionProps, HeadingProps } from '../../../types'

type CmsCalendlyProps = SectionProps & HeadingProps & AddonCalendlyProps

const CmsCalendly: React.FC<CmsCalendlyProps> = (props) => {
	const {
		label,
		title,
		description,
		textAlign,
		mode,
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
			mode={mode}
			py={py}
			px={px}
			maxWidth={maxWidth}
		>
			<Heading
				label={label}
				title={title}
				description={description}
				textAlign={textAlign}
			/>
			<AddonCalendly {...rest} />
		</Section>
	)
}

export default CmsCalendly
