import React from 'react'
import { Section, Heading } from '../../components'
import { Likes } from '../../components'
import { LikesProps } from '../../components/social/likes/Likes'
import { SectionProps, HeadingProps } from '../../types'

type SocialFavoritesProps = SectionProps & HeadingProps & LikesProps

const SocialFavorites: React.FC<SocialFavoritesProps> = (props) => {
	const {
		label,
		title,
		description,
		textAlign,
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
			<Heading
				label={label}
				title={title}
				description={description}
				textAlign={textAlign}
			/>
			<Likes {...rest} />
		</Section>
	)
}

export default SocialFavorites
