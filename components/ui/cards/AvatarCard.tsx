import React from 'react'
import AvatarGrid from './variants/AvatarGrid'
import AvatarList from './variants/AvatarList'
import { CardProps } from '../../../types'

const AvatarCard: React.FC<CardProps> = (props) => {
	const { variant } = props
  return(
    variant == 'grid'?
      <AvatarGrid {...props} /> : 
      <AvatarList {...props} />
  )	
}

export default AvatarCard
