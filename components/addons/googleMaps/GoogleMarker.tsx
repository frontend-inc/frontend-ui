import React, { useState, useEffect } from 'react'
import { Typography } from '@mui/material'
import {
	AdvancedMarker,
	Pin,
	useAdvancedMarkerRef,
	InfoWindow,
} from '@vis.gl/react-google-maps'
import { GoogleMarkerType, DisplayFieldType } from '../../../types'
import { useTheme } from '@mui/material/styles'
import { Image, DisplayFields } from '../../../components'
import { Box, Stack } from '@mui/material'

export type GoogleMarkerProps = {
	marker: GoogleMarkerType
	displayFields: DisplayFieldType[]
}

// https://visgl.github.io/react-google-maps/docs/api-reference/components/map
// https://visgl.github.io/react-google-maps/docs/api-reference/components/advanced-marker
const GoogleMarker: React.FC<GoogleMarkerProps> = (props) => {
	const { marker, displayFields } = props

	const NYC_LAT = 40.7128
	const NYC_LNG = -74.006

	const position = {
		lat: marker?.lat || NYC_LAT,
		lng: marker?.lng || NYC_LNG,
	}

	const [markerRef, setMarkerRef] = useAdvancedMarkerRef()
	const [infoWindowShown, setInfoWindowShown] = useState(false)

	const theme = useTheme()

	const handleMarkerClick = (ev) => {
		setInfoWindowShown(!infoWindowShown)
	}

	const handleClose = () => {
		setInfoWindowShown(false)
	}

	const { resource } = marker || {}
	return (
		<>
			<AdvancedMarker
				ref={markerRef}
				position={position}
				onClick={handleMarkerClick}
			>
				<Pin
					background={theme.palette.primary.main}
					borderColor={theme.palette.primary.main}
					glyphColor={theme.palette.primary.contrastText}
				/>
			</AdvancedMarker>
			{infoWindowShown && (
				<InfoWindow anchor={setMarkerRef} onClose={handleClose}>
					<Stack direction="column" spacing={1} sx={sx.infoWindow}>
						{resource?.image?.url && (
							<Box sx={sx.imageContainer}>
								<Image height={64} width={64} src={resource?.image?.url} />
							</Box>
						)}
						<Typography variant="subtitle2" color="grey.900">
							{marker?.label}
						</Typography>
						<DisplayFields
							fields={displayFields}
							resource={resource}
						/>
					</Stack>
				</InfoWindow>
			)}
		</>
	)
}

export default GoogleMarker

const sx = {
	infoWindow: {
		height: 'auto',
		width: 'auto',
		minWidth: 160,
	},
	imageContainer: {
		height: 64,
		width: 64,
		overflow: 'hidden',
		borderRadius: 1,
	},
}
