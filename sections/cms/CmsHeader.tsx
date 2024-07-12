import React from 'react'
import { Section } from '../../components'
import { HeroHeader } from '../../components'
import { HeroHeaderProps } from '../../components/cms/heros/HeroHeader'
import { SectionProps } from '../../types'

type CmsHeaderProps = SectionProps & HeroHeaderProps

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
			<HeroHeader {...rest} />
		</Section>
	)
}

export default CmsHeader
