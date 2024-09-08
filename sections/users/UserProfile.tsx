import React from 'react'
import { Section } from '../../components'
import { UserProfile } from '../../components'
import { UserProfileProps } from '../../components/users/profile/UserProfile'
import { SectionProps } from '../../types'

type CmsUserProps = SectionProps & UserProfileProps

const CmsUser: React.FC<CmsUserProps> = (props) => {
	const {
		mode,
		py,
		px,
		maxWidth,
		requireAuth,
		requireTeam,
		requirePaid,
		...rest
	} = props

	return (
		<Section
			requireAuth={requireAuth}
			requireTeam={requireTeam}
			requirePaid={requirePaid}
			mode={mode}
			py={py}
			px={px}
			maxWidth={maxWidth}
		>
			<UserProfile {...rest} />
		</Section>
	)
}

export default CmsUser
