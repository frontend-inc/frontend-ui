'use client'

import React from 'react'
import { Calendly } from '../../..'

export type FieldCalendlyProps = {
	value: string	
	label?: string
}

const FieldCalendly: React.FC<FieldCalendlyProps> = (props) => {
	const { value, label, ...rest } = props || {}
	return <Calendly calendlyUrl={value} buttonText={label} {...rest} />
}

export default FieldCalendly
