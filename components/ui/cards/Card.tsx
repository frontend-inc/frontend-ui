import React from 'react'
import CardGrid from './variants/CardGrid'
import CardList from './variants/CardList'
import { CardProps } from '../../../types'

const Card: React.FC<CardProps> = (props) => {
	const { variant } = props
  return variant == 'list' ? 
    <CardList {...props} /> : 
    <CardGrid {...props} />  
}

export default Card
