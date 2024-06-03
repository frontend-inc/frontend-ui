import React from 'react'
import { Section } from '../../components'
import { Hero } from '../../components'
import { HeroProps } from '../../components/cms/heros/Hero'
import { SectionProps } from '../../types'

type CmsVimeoProps = SectionProps & HeroProps

const CmsVimeo: React.FC<CmsVimeoProps> = (props) => {
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
			<Hero {...rest} style={'vimeo'} />
		</Section>
	)
}

export default CmsVimeo
