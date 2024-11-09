'use client'

import React, { useEffect, useState } from 'react'
import { Map, useMap } from '@vis.gl/react-google-maps'
import { GoogleMarkerType } from './GoogleMarker'
import { MAP_CONFIGS, MapConfig } from './styles/mapConfigs'
import GoogleMarker from './GoogleMarker'
import { cn } from 'frontend-shadcn'

export type GoogleMapProps = {
	darkTheme?: boolean
	lat: number
	lng: number
	label: string
	image?: string
	height?: number
	width?: number | string
	zoom?: number
	enableBorder?: boolean
}

const NYC_LAT = 40.7128
const NYC_LNG = -73.935242

export default function GoogleMap({
	darkTheme = false,
	height = 300,
	width,
	lat = NYC_LAT,
	lng = NYC_LNG,
	label,
	image,
	zoom = 16,
	enableBorder = false,
}: GoogleMapProps) {
	const [mapConfig, setMapConfig] = useState<MapConfig>(MAP_CONFIGS[0])

	useEffect(() => {
		setMapConfig(darkTheme ? MAP_CONFIGS[1] : MAP_CONFIGS[0])
	}, [darkTheme])

	const center = {
		lat,
		lng,
	}

	const map = useMap()

	useEffect(() => {
		if (map) {
			map.setCenter(center)
		}
	}, [center, map])

	return (
		<div
			className={cn(
				'sticky rounded overflow-hidden transition-shadow duration-300 hover:shadow-md',
				enableBorder && 'border border-divider'
			)}
			style={{
				height: height,
				width: width || '100%',
			}}
		>
			<Map
				scaleControl
				fullscreenControl
				mapTypeControl={false}
				streetViewControl={false}
				mapId={mapConfig.mapId || undefined}
				mapTypeId={mapConfig.mapTypeId}
				styles={mapConfig.styles}
				defaultZoom={zoom}
				defaultCenter={center}
			>
				<GoogleMarker lat={lat} lng={lng} image={image} label={label} />
			</Map>
		</div>
	)
}
