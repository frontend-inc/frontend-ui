import React from 'react'
import CardVert from './variants/CardVert'
import CardHoriz from './variants/CardHoriz'
import { CardProps } from '../../../types'

const Card: React.FC<CardProps> = (props) => {
	const { direction } = props
	switch (direction) {
		case 'row':
			return <CardVert {...props} />
		case 'column':
			return <CardHoriz {...props} />
		default:
			return <CardVert {...props} />
	}
}

export default Card
