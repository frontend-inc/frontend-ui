import React from 'react'
import CoverVert from './variants/CoverVert'
import CoverHoriz from './variants/CoverHoriz'
import { CardProps } from '../../../types'

const Cover: React.FC<CardProps> = (props) => {
	const { direction } = props
	switch (direction) {
		case 'row':
			return <CoverVert {...props} />
		case 'column':
			return <CoverHoriz {...props} />
		default:
			return <CoverVert {...props} />
	}
}

export default Cover
