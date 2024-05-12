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
		bgcolor,
		py,
		px,
		maxWidth,
    requireAuth,
		...rest
	} = props

	return (
		<Section requireAuth={requireAuth} bgcolor={bgcolor} py={py} px={px} maxWidth={maxWidth}>
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
