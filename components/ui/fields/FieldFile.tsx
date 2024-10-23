'use client'

import React from 'react'
import { Icon, FieldWrapper } from '../../../components'
import { FieldElementProps } from './Field'
import Link from 'next/link'

const FieldFile: React.FC<FieldElementProps> = (props) => {
	const { value, label, color = 'text.secondary', disableLabel } = props
	return (
		<FieldWrapper label={label} color={color} disableLabel={disableLabel}>
			<div className="flex flex-row space-x-2">
				<Icon name="File" />
				{value?.content_type && (
					<Link href={value?.url || '#'}>{value?.content_type}</Link>
				)}
			</div>
		</FieldWrapper>
	)
}

export default FieldFile
