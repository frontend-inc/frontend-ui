import React from 'react'
import { Section, Heading } from '../../components'
import { Favorites } from '../../components'
import { SectionProps, HeadingProps } from '../../types'
import { CollectionProps } from '../../components/cms/collections/Collection'

type SocialFavoritesProps = SectionProps & HeadingProps & CollectionProps

const SocialFavorites: React.FC<SocialFavoritesProps> = (props) => {
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
			<Favorites {...rest} />
		</Section>
	)
}

export default SocialFavorites
