import React from 'react'
import { Section } from '../../components'
import { SwirlVideos } from '../../components'
import { SwirlVideosProps } from '../../components/addons/swirl/SwirlVideos'
import { SectionProps } from '../../types'

type AddonSwirlVideosProps = SectionProps & SwirlVideosProps

const AddonSwirlVideos: React.FC<AddonSwirlVideosProps> = (props) => {
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
			<SwirlVideos {...rest} />
		</Section>
	)
}

export default AddonSwirlVideos