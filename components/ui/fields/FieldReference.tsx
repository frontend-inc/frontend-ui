import React from 'react'
import { Button } from '../../../tailwind'
import { FieldWrapper } from '../../../components'
import { Repeat2 } from 'lucide-react'

type FieldReferenceProps = {
	value?: any
	displayValue?: any
	headerName?: any
	handleClick?: () => void
	label?: string
	rest?: any
	color?: string
}

const FieldReference: React.FC<FieldReferenceProps> = (props) => {
	const { value, label, color, handleClick, ...rest } = props

	return (
		<FieldWrapper label={label} color={color} {...rest}>
			<Button
				color="primary"
				variant="outlined"				
				endIcon={<Repeat2 className='w-5 h-5' />}
				onClick={handleClick}
			>
				{value}
			</Button>
		</FieldWrapper>
	)
}

export default FieldReference
