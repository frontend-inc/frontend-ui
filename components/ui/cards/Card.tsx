import React from 'react'
import CardGrid from './variants/CardGrid'
import CardList from './variants/CardList'
import { CardProps } from '../../../types'

const Card: React.FC<CardProps> = (props) => {
	const { variant, ...rest } = props
	return variant == 'list' ? <CardList {...rest} /> : <CardGrid {...rest} />
}

export default Card
