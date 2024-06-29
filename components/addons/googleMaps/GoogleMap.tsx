import React, { useState, useEffect } from 'react'
import { Box } from '@mui/material'
import { Map } from '@vis.gl/react-google-maps'
import { GoogleMarkerType, DisplayFieldType } from '../../../types'
import { MAP_CONFIGS, MapConfig } from './styles/mapConfigs'
import GoogleMarker from './GoogleMarker'

export type GoogleMapProps = {
	darkTheme?: boolean
	resources: any[] 
	height?: number
	width?: number | string
	zoom?: number
	enableBorder?: boolean
	displayFields?: DisplayFieldType[]
}

// https://visgl.github.io/react-google-maps/docs/api-reference/components/map
// https://visgl.github.io/react-google-maps/docs/api-reference/components/advanced-marker
const GoogleMap: React.FC<GoogleMapProps> = (props) => {
	const {
		darkTheme = false,
		height = 300,
		width,
		resources,
		zoom = 16,
		enableBorder = false,
		displayFields = [],
	} = props

	const [mapConfig, setMapConfig] = useState<MapConfig>(MAP_CONFIGS[0])

	useEffect(() => {
		if (darkTheme) {
			setMapConfig(MAP_CONFIGS[1])
		} else {
			setMapConfig(MAP_CONFIGS[0])
		}
	}, [darkTheme])

  const [googleMarkers, setGoogleMarkers] = useState<GoogleMarkerType[]>([])

  const handleSetMarkers = (resources) => {
		let markers = resources
			?.filter((res) => res?.lat && res?.lng)
			?.map((res) => ({
				lat: res?.lat,
				lng: res?.lng,
				label: res?.title,
				resource: res,
			}))
		if (markers.length == 0) return setGoogleMarkers([])
		setGoogleMarkers(markers)
	}

	useEffect(() => {
		if (resources) {
			handleSetMarkers(resources)
		}
	}, [resources])


	if (googleMarkers?.length <= 0) return null
	return (
		<Box
			sx={{
				...sx.mapContainer,
				...(enableBorder && sx.mapBorder),
			}}
			height={height}
			width={width ? width : '100%'}
		>
			<Map
				scaleControl
				fullscreenControl
				mapTypeControl={false}
				streetViewControl={false}
				mapId={mapConfig.mapId || null}
				mapTypeId={mapConfig.mapTypeId}
				styles={mapConfig.styles}
				defaultZoom={zoom}
				defaultCenter={{
					lat: googleMarkers[0]?.lat,
					lng: googleMarkers[0]?.lng,
				}}
			>
				{googleMarkers.map((marker: any, index: number) => (
					<GoogleMarker
						key={index}
						marker={marker}
						displayFields={displayFields}
					/>
				))}
			</Map>
		</Box>
	)
}

export default GoogleMap

const sx = {
	mapContainer: {
		position: 'sticky',
		borderRadius: 1,
		overflow: 'hidden',
    transition: 'box-shadow 0.3s',
    '&:hover': {
      boxShadow: 2
    }
	},
	mapBorder: {
		border: '1px solid',
		borderColor: 'divider',
	},
}
