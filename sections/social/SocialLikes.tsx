import React from 'react'
import { Section, Heading } from '../../components'
import { Likes } from '../../components'
import { LikesProps } from '../../components/social/likes/Likes'
import { SectionProps, HeadingProps } from '../../types'
import { ResourceProvider } from 'frontend-js'

type SocialLikesProps = SectionProps & HeadingProps & LikesProps

const SocialLikes: React.FC<SocialLikesProps> = (props) => {
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
        <Likes {...rest} />
      </Section>
    </ResourceProvider>
	)
}

export default SocialLikes
