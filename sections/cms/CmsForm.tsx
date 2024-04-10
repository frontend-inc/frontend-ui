import React from 'react'
import { Section, Heading } from '../../components'
import { Form } from '../../components'
import { FormProps } from '../../components/cms/forms/Form'
import { SectionProps, HeadingProps } from '../../types'

type CmsFormProps = SectionProps & 
  HeadingProps & 
  FormProps

const CmsForm: React.FC<CmsFormProps> = (props) => {

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
      <Form {...rest} />
    </Section>
  )
}

export default CmsForm