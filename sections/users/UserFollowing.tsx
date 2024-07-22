import React from 'react'
import { Section, Heading } from '../../components'
import { UserFollowing } from '../../components'
import { UserFollowingProps } from '../../components/users/lists/UserFollowingList'
import { SectionProps, HeadingProps } from '../../types'

type SocialFollowingProps = SectionProps & HeadingProps & UserFollowingProps

const SocialFollowing: React.FC<SocialFollowingProps> = (props) => {
	const {
		label,
		title,
		description,
		textAlign,
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
			<Heading
				label={label}
				title={title}
				description={description}
				textAlign={textAlign}
			/>
			<UserFollowing {...rest} />
		</Section>
	)
}

export default SocialFollowing
