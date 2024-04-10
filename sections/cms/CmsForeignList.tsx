import React from 'react'
import { Section, Heading } from '../../components'
import { ForeignCollection } from '../../components'
import { ForeignCollectionProps } from '../../components/cms/collections/ForeignCollection'
import { SectionProps, HeadingProps } from '../../types'

type CmsForeignCollectionProps = SectionProps & 
  HeadingProps & 
  ForeignCollectionProps

const CmsForeignCollection: React.FC<CmsForeignCollectionProps> = (props) => {

  const {
    label,
    title,    
    description,
    textAlign,
    bgcolor,
    py,
    px,
    maxWidth,
    ...rest 
  } = props 

  return(
    <Section 
      bgcolor={bgcolor}
      py={py}
      px={px}
      maxWidth={maxWidth}
    >
      <Heading 
        label={label}
        title={title}
        description={description}
        textAlign={ textAlign }
      />
      <ForeignCollection {...rest} />
    </Section>
  )
}

export default CmsForeignCollection