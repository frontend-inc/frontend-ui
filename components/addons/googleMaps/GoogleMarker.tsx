'use client'

import React, { useState } from 'react'
import { Typography } from '../../core'
import {
	AdvancedMarker,
	Pin,
	useAdvancedMarkerRef,
	InfoWindow,
} from '@vis.gl/react-google-maps'
import { Image } from '../../../components'

export type GoogleMarkerType = {
	label?: string
	image?: string
	lat: number
	lng: number
}

const NYC_LAT = 40.7128
const NYC_LNG = -74.006

// https://visgl.github.io/react-google-maps/docs/api-reference/components/map
// https://visgl.github.io/react-google-maps/docs/api-reference/components/advanced-marker
const GoogleMarker: React.FC<GoogleMarkerType> = (props) => {
	const { label, image, lat = NYC_LAT, lng = NYC_LNG } = props

	const position = {
		lat,
		lng,
	}

	const [markerRef, setMarkerRef] = useAdvancedMarkerRef()
	const [infoWindowShown, setInfoWindowShown] = useState(false)

	const handleMarkerClick = (ev) => {
		setInfoWindowShown(!infoWindowShown)
	}

	const handleClose = () => {
		setInfoWindowShown(false)
	}

	return (
		<>
			<AdvancedMarker
				ref={markerRef}
				position={position}
				onClick={handleMarkerClick}
			>
				<Pin />
			</AdvancedMarker>
			{infoWindowShown && (
				<InfoWindow anchor={setMarkerRef} onClose={handleClose}>
					<div className="flex flex-col space-y-2 min-w-[160px]">
						{image && (
							<div className="w-[64px] h-[64px]">
								<Image alt={label} aspectRatio={1.0} src={image} />
							</div>
						)}
						<Typography variant="subtitle2" className="text-gray-900">
							{label}
						</Typography>
					</div>
				</InfoWindow>
			)}
		</>
	)
}

export default GoogleMarker
