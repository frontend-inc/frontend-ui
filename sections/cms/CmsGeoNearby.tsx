import React from 'react'
import { Section, Heading, CollectionGeoNearby } from '../../components'
import { CollectionGeoNearbyProps } from '../../components/cms/collections/CollectionGeoNearby'
import { SectionProps, HeadingProps } from '../../types'

type CmsListProps = SectionProps & 
  HeadingProps & 
  CollectionGeoNearbyProps

const CmsNearby: React.FC<CmsListProps> = (props) => {
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
      <CollectionGeoNearby         
        {...rest} 
      />
    </Section>
	)
}

export default CmsNearby
