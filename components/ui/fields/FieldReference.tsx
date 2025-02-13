'use client'

import React from 'react'
import { Button } from '@nextui-org/react'
import { FieldWrapper } from '../../../components'
import { Repeat2 } from 'lucide-react'
import { FieldElementProps } from './Field'

type FieldReferenceProps = FieldElementProps & {
	handleClick?: () => void
}

const FieldReference: React.FC<FieldReferenceProps> = (props) => {
	const { value, label, handleClick } = props

	return (
		<FieldWrapper label={label}>
			<Button
				variant="ghost"
				endContent={<Repeat2 className="w-5 h-5" />}
				onPress={handleClick}
			>
				{value}
			</Button>
		</FieldWrapper>
	)
}

export default FieldReference
