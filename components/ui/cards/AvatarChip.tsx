import React from 'react'
import AvatarHoriz from './AvatarHoriz'
import { CardProps } from '../../../types'

const AvatarChip: React.FC<CardProps> = (props) => {
	return <AvatarHoriz height={32} width={32} {...props} description={null} />
}

export default AvatarChip
