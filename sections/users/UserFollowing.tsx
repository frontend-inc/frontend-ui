import React from 'react'
import { Section, Heading } from '../../components'
import { UserFollowingList } from '../../components'
import { UserFollowingListProps } from '../../components/users/lists/UserFollowingList'
import { SectionProps, HeadingProps } from '../../types'

type SocialFollowingProps = SectionProps & HeadingProps & UserFollowingListProps

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
			<UserFollowingList {...rest} />
		</Section>
	)
}

export default SocialFollowing
