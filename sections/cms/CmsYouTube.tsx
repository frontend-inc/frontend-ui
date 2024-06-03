import React from 'react'
import { Section } from '../../components'
import { Hero } from '../../components'
import { HeroProps } from '../../components/cms/heros/Hero'
import { SectionProps } from '../../types'

type CmsYouTubeProps = SectionProps & HeroProps

const CmsYouTube: React.FC<CmsYouTubeProps> = (props) => {
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
			<Hero {...rest} style={'youtube'} />
		</Section>
	)
}

export default CmsYouTube
