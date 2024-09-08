import React from 'react'
import { Section, Heading } from '../../components'
import { FeedList } from '../../components'
import { CollectionListProps } from '../../components/cms/collections/CollectionList'
import { SectionProps, HeadingProps } from '../../types'

type SocialFeedProps = SectionProps & HeadingProps & CollectionListProps

const SocialFeed: React.FC<SocialFeedProps> = (props) => {
	const {
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
		...rest
	} = props

	return (
		<Section
			requireAuth
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
			<FeedList {...rest} />
		</Section>
	)
}

export default SocialFeed
