import React, { useState, useEffect } from 'react'
import { Box } from '@mui/material'
import { 
  Map, 
} from '@vis.gl/react-google-maps';
import { GoogleMarkerType } from '../../../types';
import { MAP_CONFIGS, MapConfig } from './styles/mapConfigs'
import GoogleMarker from './GoogleMarker';

export type GoogleMapProps = {
  darkTheme?: boolean
	markers: GoogleMarkerType[]
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
    darkTheme=false,
    height=300, 
    width,
    markers,
    zoom=16,
    enableBorder=false,
    displayFields=[] 
  } = props

  const [mapConfig, setMapConfig] = useState<MapConfig>(MAP_CONFIGS[0])

  useEffect(() => {
    if(darkTheme){
      setMapConfig(MAP_CONFIGS[1])
    }else{
      setMapConfig(MAP_CONFIGS[0])
    }
  }, [darkTheme])

  if(markers?.length <= 0) return null;
	return (
    <Box 
      sx={{ 
        ...sx.mapContainer,
        ...(enableBorder && sx.mapBorder)
      }} 
      height={ height } 
      width={ width ? width : '100%' }
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
          lat: markers[0]?.lat,
          lng: markers[0]?.lng
        }}
      >
        { markers.map((marker: any, index: number) => (
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
  },
  mapBorder: {
    border: '1px solid',
    borderColor: 'divider',
  }
}
