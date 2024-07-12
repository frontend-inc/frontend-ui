import React from 'react'
import { Section, Heading, Query } from '../../components'
import { Likes } from '../../components'
import { LikesProps } from '../../components/social/likes/Likes'
import { SectionProps, HeadingProps } from '../../types'
import { CollectionProvider } from 'frontend-js'

type SocialLikesProps = SectionProps & HeadingProps & LikesProps

const SocialLikes: React.FC<SocialLikesProps> = (props) => {
	const {
		url,
		label,
		title,
		description,
		textAlign,
		mode,
		py,
		px,
		maxWidth,
		requireTeam,
		requirePaid,
		requireAdmin,
		...rest
	} = props

	const likesUrl = `${url}/likes`

	return (
		<CollectionProvider url={likesUrl}>
			<Query>
				<Section
					requireAuth
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
					<Likes url={url} {...rest} />
				</Section>
			</Query>
		</CollectionProvider>
	)
}

export default SocialLikes
