import React from 'react'
import { FieldString } from '../../../components'
import moment from 'moment'

type FieldDateProps = {
	value?: any
	label?: string
	rest?: any
	color?: string
}

const FieldDate: React.FC<FieldDateProps> = (props) => {
	const { value, label, ...rest } = props
	let formattedValue = moment(value).format('MM/DD/YYYY')
	return <FieldString label={label} value={formattedValue} {...rest} />
}

export default FieldDate
