import React from 'react'
import TextList from './variants/TextList'
import TextGrid from './variants/TextGrid'
import { CardProps } from '../../../types'

const TextCard: React.FC<CardProps> = (props) => {
	const { variant } = props
	return variant == 'list' ? <TextList {...props} /> : <TextGrid {...props} />
}

export default TextCard
