import React, { useState, useEffect } from 'react'
import { Box } from '@mui/material'
import { Map, AdvancedMarker, Pin, Marker} from '@vis.gl/react-google-maps';
import { GoogleMapMarker } from '../../../types';
import { MAP_CONFIGS, MapConfig } from './styles/mapConfigs'
import { useTheme } from '@mui/material/styles';

export type GoogleMapProps = {
  darkTheme?: boolean
	markers: GoogleMapMarker[]
  height?: number
  zoom?: number
}

// https://visgl.github.io/react-google-maps/docs/api-reference/components/map
// https://visgl.github.io/react-google-maps/docs/api-reference/components/advanced-marker
const GoogleMap: React.FC<GoogleMapProps> = (props) => {

	const { 
    darkTheme=false,
    height=300, 
    markers,
    zoom=3 
  } = props

  const calcCenterMarker = (markers: any) => {
    const lat = markers.reduce((sum: number, marker: any) => sum + marker.lat, 0) / markers.length
    const lng = markers.reduce((sum: number, marker: any) => sum + marker.lng, 0) / markers.length
    return { lat, lng }
  }

  const [center, setCenter] = useState(calcCenterMarker(markers))

  const theme = useTheme()

  useEffect(() => {
    if (markers.length > 1) {
      setCenter(calcCenterMarker(markers))
    }
  }, [markers])

  const [mapConfig, setMapConfig] = useState<MapConfig>(MAP_CONFIGS[0])

  useEffect(() => {
    if(darkTheme){
      setMapConfig(MAP_CONFIGS[1])
    }else{
      setMapConfig(MAP_CONFIGS[0])
    }
  }, [darkTheme])

  if(!markers || !center) return null;
	return (
    <Box height={ height } width="100%">
      <Map 
        zoomControl
        scaleControl
        fullscreenControl
        mapId={mapConfig.mapId || null}
        mapTypeId={mapConfig.mapTypeId}
        styles={mapConfig.styles}
        zoom={zoom} 
        center={center}
      >
        { markers.map((marker: any, index: number) => (
          <AdvancedMarker 
            key={index}                         
            position={{ 
              lat: marker.lat, 
              lng: marker.lng 
            }} 
          >
            <Pin 
              background={theme.palette.primary.main}
              borderColor={theme.palette.primary.main}
              glyphColor={theme.palette.primary.contrastText}
            />
          </AdvancedMarker>
        ))}
      </Map>
    </Box>
	)
}

export default GoogleMap
