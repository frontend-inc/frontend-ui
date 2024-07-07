import React from 'react'
import { Section, Heading } from '../../components'
import { Feed } from '../../components'
import { FeedProps } from '../../components/social/feed/Feed'
import { SectionProps, HeadingProps } from '../../types'

type SocialFeedProps = SectionProps & HeadingProps & FeedProps

const SocialFeed: React.FC<SocialFeedProps> = (props) => {
	const {
    url,
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
        <Feed 
          {...rest} 
          url={url}
        />
      </Section>
	)
}

export default SocialFeed
