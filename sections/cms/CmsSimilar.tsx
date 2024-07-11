import React from 'react'
import { Section, Heading, CollectionSimilar } from '../../components'
import { CollectionSimilarProps } from '../../components/cms/collections/CollectionSimilar'
import { SectionProps, HeadingProps } from '../../types'

type CmsListProps = SectionProps & 
  HeadingProps & 
  CollectionSimilarProps

const CmsSimilar: React.FC<CmsListProps> = (props) => {
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
      <CollectionSimilar         
        {...rest} 
      />
    </Section>
	)
}

export default CmsSimilar
