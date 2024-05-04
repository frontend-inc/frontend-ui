import React from 'react'
import { FieldWrapper, FieldString } from '../../../components'

type FieldJSONProps = {
	value?: any
	label?: string
	rest?: any
}

const FieldJSON: React.FC<FieldJSONProps> = (props) => {
	const { value, label, ...rest } = props
	return <FieldString value={JSON.stringify(value, null, 2)} />
}

export default FieldJSON
