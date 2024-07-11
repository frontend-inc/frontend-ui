import React from 'react'
import { Section, Heading } from '../../components'
import { CollectionCarousel } from '../../components'
import { CollectionCarouselProps } from '../../components/cms/collections/CollectionCarousel'
import { SectionProps, HeadingProps } from '../../types'

type CmsCarouselProps = SectionProps & HeadingProps & CollectionCarouselProps

const CmsCarousel: React.FC<CmsCarouselProps> = (props) => {
	const {
		label,
		title,
		description,
		textAlign,
		theme,
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
			theme={theme}
			py={py}
			px={px}
			maxWidth={maxWidth}
			requireAuth={requireAuth}
			requireTeam={requireTeam}
			requirePaid={requirePaid}
			requireAdmin={requireAdmin}
		>
			<Heading
				label={label}
				title={title}
				description={description}
				textAlign={textAlign}
			/>
			<CollectionCarousel {...rest} />
		</Section>
	)
}

export default CmsCarousel
