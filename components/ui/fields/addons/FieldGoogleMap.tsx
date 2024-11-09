'use client'

import React from 'react'
import { GoogleMap } from '../../../'

export type FieldGoogleMapProps = {
	value: string
	lat: number
	lng: number
	label: string
	image?: string
	zoom?: number
}

const FieldGoogleMap: React.FC<FieldGoogleMapProps> = (props) => {
	const { value, lat, lng, label, image, zoom = 16 } = props || {}

	return (
		<div className="flex flex-col space-y-3 w-full">
			<GoogleMap zoom={zoom} lat={lat} lng={lng} label={label} image={image} />
			<div className="text-sm text-foreground">{value}</div>
		</div>
	)
}

export default FieldGoogleMap
