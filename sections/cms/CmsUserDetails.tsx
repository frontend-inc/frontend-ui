import React from 'react'
import { Section } from '../../components'
import { UserDetails } from '../../components'
import { UserDetailsProps } from '../../components/users/profile/UserDetails'
import { SectionProps } from '../../types'

type CmsUserDetailsProps = SectionProps & UserDetailsProps

const CmsUserDetails: React.FC<CmsUserDetailsProps> = (props) => {
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
			<UserDetails {...rest} />
		</Section>
	)
}

export default CmsUserDetails
