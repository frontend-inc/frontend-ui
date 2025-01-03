'use client'

import React from 'react'
import { ExpandableText, Typography, FieldWrapper } from '../../../components'
import { FieldElementProps } from './Field'

type FieldTextProps = FieldElementProps & {
	maxChars?: number
	expandable?: boolean
}

const FieldText: React.FC<FieldTextProps> = (props) => {
	const { value, label, expandable, maxChars = 80, className } = props
	return (
		<FieldWrapper label={label}>
			{expandable ? (
				<ExpandableText
					text={value}
					className={className}
					maxChars={maxChars}
				/>
			) : (
				<Typography variant="body1" className={className}>
					{value}
				</Typography>
			)}
		</FieldWrapper>
	)
}

export default FieldText
