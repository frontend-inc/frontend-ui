import React from 'react'
import { Section, Heading } from '../../components'
import { ForeignCollectionGeo } from '../../components'
import { ForeignCollectionGeoProps  } from '../../components/cms/collections/ForeignCollectionGeo'
import { SectionProps, HeadingProps } from '../../types'

type CmsForeignGeoListProps = SectionProps & 
  HeadingProps & 
  ForeignCollectionGeoProps 

const CmsForeignGeoList: React.FC<CmsForeignGeoListProps> = (props) => {
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
      <ForeignCollectionGeo 
        {...rest} 
      />
    </Section>
	)
}

export default CmsForeignGeoList
