import React from 'react'
import { Section, Heading } from '../../components'
import { SectionProps, HeadingProps } from '../../types'
import { ForeignCollection } from '../../components'
import { ForeignCollectionProps } from '../../components/cms/collections/ForeignCollection'

type CmsForeignListProps = SectionProps & 
  HeadingProps & 
  ForeignCollectionProps

const CmsForeignList: React.FC<CmsForeignListProps> = (props) => {
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
      <ForeignCollection 
        {...rest} 
      />
    </Section>
	)
}

export default CmsForeignList
