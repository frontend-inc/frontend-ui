import React from 'react'
import ChipList from './variants/ChipList'
import ChipGrid from './variants/ChipGrid'
import { CardProps } from '../../../types'

const Chip: React.FC<CardProps> = (props) => {
	const { variant } = props
	return variant == 'list' ? <ChipList {...props} /> : <ChipGrid {...props} />
}

export default Chip
