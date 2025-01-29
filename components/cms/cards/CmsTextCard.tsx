'use client'

import React from 'react'
import { ListCard } from '../..'
import { CardProps } from './CmsCard'

const TextCard: React.FC<CardProps> = (props) => {
	return <ListCard {...props} disableImage />
}

export default TextCard
