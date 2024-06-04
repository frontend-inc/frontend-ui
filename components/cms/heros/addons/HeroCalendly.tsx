import React from 'react'
import { Calendly } from '../../..'
import { HeroProps } from '../Hero'
import { flattenDocument } from 'frontend-js'
import HeroContainer from '../HeroContainer'

export type HeroCalendlyProps = HeroProps & {
	fieldName: string
}

const HeroCalendly: React.FC<HeroCalendlyProps> = (props) => {
	const { actions, resource, fieldName, ...rest } = props || {}
	const calendlyUrl = flattenDocument(resource)[fieldName]
	return (
		<HeroContainer {...rest} actions={actions} resource={resource}>
			<Calendly calendlyUrl={calendlyUrl} />
		</HeroContainer>
	)
}

export default HeroCalendly
