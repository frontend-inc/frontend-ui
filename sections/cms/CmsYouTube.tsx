import React from 'react'
import { Section } from '../../components'
import { HeroYouTube } from '../../components'
import { HeroYouTubeProps } from '../../components/cms/heros/addons/HeroYouTube'
import { SectionProps } from '../../types'

type CmsYouTubeProps = SectionProps & HeroYouTubeProps

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
			<HeroYouTube {...rest} />
		</Section>
	)
}

export default CmsYouTube
