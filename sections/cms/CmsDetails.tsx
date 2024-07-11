import React from 'react'
import { Section } from '../../components'
import { Details } from '../../components'
import { DetailsProps } from '../../components/cms/details/Details'
import { SectionProps } from '../../types'

type CmsDetailsProps = SectionProps & DetailsProps

const CmsDetails: React.FC<CmsDetailsProps> = (props) => {
	const {
		theme,
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
			theme={theme}
			py={py}
			px={px}
			maxWidth={maxWidth}
		>
			<Details {...rest} />
		</Section>
	)
}

export default CmsDetails
