import React from 'react'
import { Section, Heading } from '../../components'
import { Feed } from '../../components'
import { ListProps } from '../../components/cms/collections/List'
import { SectionProps, HeadingProps } from '../../types'

type SocialFeedProps = SectionProps & HeadingProps & ListProps

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
			<Feed {...rest} />
		</Section>
	)
}

export default SocialFeed
