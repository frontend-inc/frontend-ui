import React from 'react'
import { Section, Heading } from '../../components'
import { CommentList } from '../../components'
import { CommentListProps } from '../../components/social/comments/CommentList'
import { SectionProps, HeadingProps } from '../../types'

type SocialCommentsProps = SectionProps & HeadingProps & CommentListProps

const SocialComments: React.FC<SocialCommentsProps> = (props) => {
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
			<Heading
				label={label}
				title={title}
				description={description}
				textAlign={textAlign}
			/>
			<CommentList {...rest} />
		</Section>
	)
}

export default SocialComments
