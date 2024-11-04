'use client'

import React from 'react'
import { Label, FieldWrapper } from '../../../components'
import { FieldElementProps } from './Field'

const FieldBoolean: React.FC<FieldElementProps> = (props) => {
	const { value, label } = props
	return (
		<FieldWrapper label={label}>
			<Label label={value ? 'true' : 'false'} />
		</FieldWrapper>
	)
}

export default FieldBoolean
