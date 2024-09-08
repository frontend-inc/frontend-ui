import React from 'react'
import { Section, Heading } from '../../components'
import { FavoritesGrid } from '../../components'
import { SectionProps, HeadingProps } from '../../types'
import { CollectionListProps } from '../../components/cms/collections/CollectionList'

type SocialFavoritesProps = SectionProps & HeadingProps & CollectionListProps

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
			<FavoritesGrid {...rest} />
		</Section>
	)
}

export default SocialFavorites
