import React from 'react'
import { Section } from '../../components'
import { UserProfile } from '../../components'
import { UserProfileProps } from '../../components/social/users/UserProfile'
import { SectionProps } from '../../types'

type SocialProfileProps = SectionProps & UserProfileProps

const SocialProfile: React.FC<SocialProfileProps> = (props) => {
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
			<UserProfile {...rest} />
		</Section>
	)
}

export default SocialProfile
