import React from 'react'
import { GoogleMap } from '../..'
import { flattenDocument } from 'frontend-js'

export type AddonGoogleMapProps = {
	fieldName: string
  resource: any 
  zoom?: number
  darkTheme?: boolean
}

const AddonGoogleMap: React.FC<AddonGoogleMapProps> = (props) => {
	const { resource, zoom=14, darkTheme=false } = props || {}
	const { lat, lng } = flattenDocument(resource)
	return (
		<GoogleMap 
      darkTheme={darkTheme}
      zoom={zoom} 
      markers={
        [{ 
          lat, 
          lng,
          label: resource.title 
      }]
    }
    />
	)
}

export default AddonGoogleMap
