'use client'

import React from 'react'
import { FieldWrapper, Avatar } from '../../../components'
import { FieldElementProps } from './Field'

type FieldAvatarProps = FieldElementProps & {
	size?: number
	variant?: 'circle' | 'rounded'
}

const FieldAvatar: React.FC<FieldAvatarProps> = (props) => {
	const { value, label, size = 32, variant } = props
	return (
		<FieldWrapper label={label}>
			<Avatar src={value} size={size} variant={variant} />
		</FieldWrapper>
	)
}

export default FieldAvatar
