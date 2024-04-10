import React from 'react'
import { Section } from '../../components'
import { Logos } from '../../components'
import { LogosProps } from '../../components/web/logos/Logos'
import { SectionProps } from '../../types'

type WebLogosProps = SectionProps & LogosProps

const WebLogos: React.FC<WebLogosProps> = (props) => {

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
      <Logos {...rest} />
    </Section>
  )
}

export default WebLogos