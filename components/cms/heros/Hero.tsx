import React from 'react'
import { HeroContainer, HeroItem } from '../../../components'
import { HeroContainerProps } from './HeroContainer'
import { HeroItemProps } from './HeroItem'

export type HeroProps = 
  HeroContainerProps & 
  HeroItemProps 

const Hero: React.FC<HeroProps> = (props) => {

  const { 
    url,
    fields, 
    resource,
  } = props || {}

  return(
    <HeroContainer 
      url={url}
      fields={fields}  
      resource={resource}    
    >
      <HeroItem 
        {...props}
        url={url}      
      />
    </HeroContainer>
  )
}

export default Hero 