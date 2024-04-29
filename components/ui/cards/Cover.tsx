import React from 'react'
import CoverGrid from './variants/CoverGrid'
import CoverList from './variants/CoverList'
import { CardProps } from '../../../types'

const Cover: React.FC<CardProps> = (props) => {
	const { variant } = props
  return variant == 'list' ?
    <CoverList {...props} /> :
    <CoverGrid {...props} /> 	
}

export default Cover
