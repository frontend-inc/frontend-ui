import React from 'react'
import { Section } from '../../components'
import { ShowYouTube } from '../../components'
import { ShowYouTubeProps } from '../../components/cms/show/ShowYouTube'
import { SectionProps } from '../../types'

type CmsYouTubeProps = SectionProps & ShowYouTubeProps

const CmsYouTube: React.FC<CmsYouTubeProps> = (props) => {
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
			<ShowYouTube {...rest} />
		</Section>
	)
}

export default CmsYouTube
