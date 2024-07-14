import React from 'react'
import { Section } from '../../components'
import { ShowHeader } from '../../components'
import { ShowHeaderProps } from '../../components/cms/show/ShowHeader'
import { SectionProps } from '../../types'

type CmsHeaderProps = SectionProps & ShowHeaderProps

const CmsHeader: React.FC<CmsHeaderProps> = (props) => {
	const {
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
			<ShowHeader {...rest} />
		</Section>
	)
}

export default CmsHeader
