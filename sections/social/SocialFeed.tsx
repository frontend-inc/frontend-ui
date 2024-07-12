import React from 'react'
import { Section, Heading } from '../../components'
import { Feed } from '../../components'
import { CollectionProps } from '../../components/cms/collections/Collection'
import { SectionProps, HeadingProps } from '../../types'

type SocialFeedProps = SectionProps & HeadingProps & CollectionProps

const SocialFeed: React.FC<SocialFeedProps> = (props) => {
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

	return (
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
			<Feed {...rest} url={url} />
		</Section>
	)
}

export default SocialFeed
