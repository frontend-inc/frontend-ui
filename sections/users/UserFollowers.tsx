import React from 'react'
import { Section, Heading } from '../../components'
import { UserFollowersList } from '../../components'
import { UserFollowersListProps } from '../../components/users/lists/UserFollowersList'
import { SectionProps, HeadingProps } from '../../types'

type SocialFollowersProps = SectionProps & HeadingProps & UserFollowersListProps

const SocialFollowers: React.FC<SocialFollowersProps> = (props) => {
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
		
		requirePaid,
		...rest
	} = props

	return (
		<Section
			requireAuth={requireAuth}
			
			requirePaid={requirePaid}
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
			<UserFollowersList {...rest} />
		</Section>
	)
}

export default SocialFollowers
