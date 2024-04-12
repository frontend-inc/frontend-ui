import React from 'react'
import { Section } from '../../components'
import { KlaviyoButton } from '../../components'
import { KlaviyoButtonProps } from '../../components/addons/klaviyo/KlaviyoButton'
import { SectionProps } from '../../types'

type AddonKlaviyoButtonProps = SectionProps &   
KlaviyoButtonProps

const AddonKlaviyoButton: React.FC<AddonKlaviyoButtonProps> = (props) => {

  const {
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
      <KlaviyoButton {...rest} />
    </Section>
  )
}

export default AddonKlaviyoButton