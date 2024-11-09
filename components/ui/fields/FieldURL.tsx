'use client'

import React from 'react'
import Link from 'next/link'
import { FieldWrapper } from '../../../components'
import { FieldElementProps } from './Field'

type FieldURLProps = FieldElementProps & {
	buttonText?: string
}

const FieldURL: React.FC<FieldURLProps> = (props) => {
	const { value, buttonText, label } = props

	return (
		<FieldWrapper label={label}>
			{value && (
				<Link
					className="p-0 h-auto text-foreground hover:underline"
					href={value || '#'}
					target="_blank"
					rel="noopener noreferrer"
				>
					{buttonText || value}
				</Link>
			)}
		</FieldWrapper>
	)
}

export default FieldURL
