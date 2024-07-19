import React from 'react'
import { Calendly } from '../..'
import { get } from 'lodash'

export type AddonCalendlyProps = {
	fieldName: string
	resource: any
}

const AddonCalendly: React.FC<AddonCalendlyProps> = (props) => {
	const { resource, fieldName, ...rest } = props || {}
	const value = get(resource, fieldName)
	return <Calendly calendlyUrl={value} />
}

export default AddonCalendly
