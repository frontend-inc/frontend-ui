'use client'

import React from 'react'
import { Typography } from '../../core'
import { FieldWrapper } from '../../../components'
import { FieldElementProps } from './Field'
import { truncate } from '../../../helpers'
import { cn } from 'frontend-shadcn'

const FieldString: React.FC<FieldElementProps> = (props) => {
	const { value, label, placeholder, alignItems, className, ...rest } = props

	return (
		<FieldWrapper alignItems={alignItems} label={label} {...rest}>
			<Typography variant="body1" className={cn(className)}>
				{truncate(value || placeholder, 50)}
			</Typography>
		</FieldWrapper>
	)
}

export default FieldString
