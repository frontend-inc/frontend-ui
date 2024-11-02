'use client'

import React from 'react'
import { Rating } from '../../core'
import { FieldWrapper } from '../../../components'
import { FieldElementProps } from './Field'

type FieldRatingProps = FieldElementProps & {
	size?: 'sm' | 'md' | 'lg'
}

const FieldRating: React.FC<FieldRatingProps> = (props) => {
	const { value, label, size = 'md' } = props
	return (
		<FieldWrapper label={label}>
			<Rating size={size} readOnly value={value} />
		</FieldWrapper>
	)
}

export default FieldRating
