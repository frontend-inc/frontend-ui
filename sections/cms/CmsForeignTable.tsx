import React from 'react'
import { Section, Heading } from '../../components'
import { ForeignCollectionTable } from '../../components'
import { ForeignCollectionTableProps } from '../../components/cms/collections/ForeignCollectionTable'
import { SectionProps, HeadingProps } from '../../types'

type CmsForeignTableProps = SectionProps & 
  HeadingProps & 
  ForeignCollectionTableProps

const CmsForeignTable: React.FC<CmsForeignTableProps> = (props) => {
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
        <ForeignCollectionTable 
          {...rest} 
        />
      </Section>
	)
}

export default CmsForeignTable
