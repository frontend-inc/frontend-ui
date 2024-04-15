import React from 'react'
import ChipHoriz from './variants/ChipHoriz'
import { CardProps } from '../../../types'

const AvatarChip: React.FC<CardProps> = (props) => {
	return <ChipHoriz {...props} />
}

export default AvatarChip
