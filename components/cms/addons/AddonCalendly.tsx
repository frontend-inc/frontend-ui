import React from 'react'
import { Calendly } from '../..'
import { flattenDocument } from 'frontend-js'

export type AddonCalendlyProps = {
	fieldName: string
  resource: any 
}

const AddonCalendly: React.FC<AddonCalendlyProps> = (props) => {
	const { resource, fieldName, ...rest } = props || {}
	const value = flattenDocument(resource)[fieldName]
	return (
		<Calendly calendlyUrl={value} />
	)
}

export default AddonCalendly
