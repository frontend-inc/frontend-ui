'use client'

import React from 'react'
import { Cover } from '../..'
import { HeroCardProps } from './HeroCard'

const HeroCover: React.FC<HeroCardProps> = (props) => {
	const { image, primary } = props || {}

	return(
    <Cover 
      textVariant="h3"
      image={image} 
      height={400} 
      title={primary} 
      enableOverlay 
    />
  )
}

export default HeroCover
