'use client'

import React from 'react'
import { FieldWrapper } from '../../../components'
import { FieldElementProps } from './Field'
import { Chip } from '@nextui-org/react'

const FieldBoolean: React.FC<FieldElementProps> = (props) => {
	const { value, label } = props
	return (
		<FieldWrapper label={label}>
			<Chip color={ value ? 'success' : 'danger' }>{value ? 'true' : 'false'}</Chip>
		</FieldWrapper>
	)
}

export default FieldBoolean
