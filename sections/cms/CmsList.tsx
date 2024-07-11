import React from 'react'
import { Section, Heading } from '../../components'
import { Collection } from '../../components'
import { CollectionProps } from '../../components/cms/collections/Collection'
import { SectionProps, HeadingProps } from '../../types'

type CmsListProps = SectionProps & 
  HeadingProps & 
  CollectionProps

const CmsList: React.FC<CmsListProps> = (props) => {
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
        <Collection        
          {...rest} 
        />
    </Section>
	)
}

export default CmsList
