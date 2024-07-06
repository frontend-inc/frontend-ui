import React from 'react'
import { Section, Heading } from '../../components'
import { Favorites } from '../../components'
import { FavoritesProps } from '../../components/social/favorites/Favorites'
import { SectionProps, HeadingProps } from '../../types'
import { ResourceProvider } from 'frontend-js'

type SocialFavoritesProps = SectionProps & HeadingProps & FavoritesProps

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
    <ResourceProvider>
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
        <Favorites {...rest} />
      </Section>
    </ResourceProvider>
	)
}

export default SocialFavorites
