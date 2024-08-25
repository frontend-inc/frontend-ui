import React from 'react'
import { Section, Heading } from '../../../components'
import { FieldCalendly } from '../../../components'
import { FieldCalendlyProps } from '../../../components/cms/addons/FieldCalendly'
import { SectionProps, HeadingProps } from '../../../types'

type CmsCalendlyProps = SectionProps & HeadingProps & FieldCalendlyProps

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
			<Heading
				label={label}
				title={title}
				description={description}
				textAlign={textAlign}
			/>
			<FieldCalendly {...rest} />
		</Section>
	)
}

export default CmsCalendly
