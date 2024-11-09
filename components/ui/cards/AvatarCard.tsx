'use client'

import React from 'react'
import { ListCard } from '../../../components'
import { CardProps } from './Card'

const AvatarCard: React.FC<CardProps> = (props) => {
	return <ListCard {...props} size={140} circular />
}

export default AvatarCard
