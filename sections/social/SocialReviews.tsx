import React from 'react'
import { Section, Heading } from '../../components'
import { Reviews } from '../../components'
import { ReviewsProps } from '../../components/social/reviews/Reviews'
import { SectionProps, HeadingProps } from '../../types'

type SocialReviewsProps = SectionProps & HeadingProps & ReviewsProps

const SocialReviews: React.FC<SocialReviewsProps> = (props) => {
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
			<Reviews {...rest} />
		</Section>
	)
}

export default SocialReviews
