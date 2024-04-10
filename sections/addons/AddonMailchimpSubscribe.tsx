import React from 'react'
import { Section, Heading } from '../../components'
import { MailchimpSubscribe } from '../../components'
import { MailchimpSubscribeProps } from '../../components/addons/mailchimp/MailchimpSubscribe'
import { SectionProps, HeadingProps } from '../../types'

type AddonMailchimpSubscribeProps = SectionProps &   
  HeadingProps &
  MailchimpSubscribeProps

const AddonMailchimpSubscribe: React.FC<AddonMailchimpSubscribeProps> = (props) => {

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
      <MailchimpSubscribe {...rest} />
    </Section>
  )
}

export default AddonMailchimpSubscribe