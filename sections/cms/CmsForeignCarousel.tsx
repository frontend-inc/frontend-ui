import React from 'react'
import { Section, Heading } from '../../components'
import { ForeignCollectionCarousel } from '../../components'
import { ForeignCollectionCarouselProps } from '../../components/cms/collections/ForeignCollectionCarousel'
import { SectionProps, HeadingProps } from '../../types'

type CmsForeignCarouselProps = SectionProps & 
  HeadingProps & 
  ForeignCollectionCarouselProps

const CmsForeignCarousel: React.FC<CmsForeignCarouselProps> = (props) => {
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
    <Section
      bgcolor={bgcolor}
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
      <ForeignCollectionCarousel
        {...rest} 
      />
    </Section>
	)
}

export default CmsForeignCarousel
