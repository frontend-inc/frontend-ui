import React from 'react'
import { Section, Heading } from '../../components'
import { Feed } from '../../components'
import { FeedProps } from '../../components/social/feed/Feed'
import { SectionProps, HeadingProps } from '../../types'
import { ResourceProvider } from 'frontend-js'

type SocialFeedProps = SectionProps & HeadingProps & FeedProps

const SocialFeed: React.FC<SocialFeedProps> = (props) => {
	const {
		label,
		title,
		description,
		textAlign,
		bgcolor,
		py,
		px,
		maxWidth,
		requireTeam,
		requirePaid,
		requireAdmin,
		...rest
	} = props

	return (
    <ResourceProvider>
      <Section
        requireAuth
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
        <Feed {...rest} />
      </Section>
    </ResourceProvider>
	)
}

export default SocialFeed
