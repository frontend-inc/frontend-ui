import React from 'react'
import { GoogleMap } from '../..'
import { get } from 'lodash'
import { DisplayFieldType } from '../../../types'

export type AddonGoogleMapProps = {
	fieldName: string
	resource: any
	zoom?: number
	displayFields?: DisplayFieldType[]
	darkTheme?: boolean
}

const AddonGoogleMap: React.FC<AddonGoogleMapProps> = (props) => {
	const {
		resource,
		zoom = 16,
		darkTheme = false,
		displayFields = [],
	} = props || {}

	return (
		<GoogleMap
			darkTheme={darkTheme}
			zoom={zoom}
			resources={[resource]}
			displayFields={displayFields}
		/>
	)
}

export default AddonGoogleMap
