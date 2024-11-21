'use client'

import React from 'react'
import { Typography } from '../../../components'
import { FieldWrapper } from '../../../components'
import { FieldElementProps } from './Field'
import { cn } from 'frontend-shadcn'

const FieldString: React.FC<FieldElementProps> = (props) => {
	const { value, label, placeholder, alignItems, className, ...rest } = props

	return (
		<FieldWrapper alignItems={alignItems} label={label} {...rest}>
			<Typography variant="body1" className={cn(className)}>
				{value}
			</Typography>
		</FieldWrapper>
	)
}

export default FieldString
