import React from 'react'
import { Section } from '../../components'
import { HeroVimeo } from '../../components'
import { HeroVimeoProps } from '../../components/cms/heros/HeroVimeo'
import { SectionProps } from '../../types'

type CmsVimeoProps = SectionProps & HeroVimeoProps

const CmsVimeo: React.FC<CmsVimeoProps> = (props) => {
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
			<HeroVimeo {...rest} />
		</Section>
	)
}

export default CmsVimeo
