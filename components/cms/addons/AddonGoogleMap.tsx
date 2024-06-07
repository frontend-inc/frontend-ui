import React from 'react'
import { GoogleMap } from '../..'
import { flattenDocument } from 'frontend-js'
import { DisplayFieldType } from '../../../types'

export type AddonGoogleMapProps = {
	fieldName: string
  resource: any 
  zoom?: number
  displayFields?: DisplayFieldType[]
  darkTheme?: boolean
}

const AddonGoogleMap: React.FC<AddonGoogleMapProps> = (props) => {
	const { resource, zoom=16, darkTheme=false, displayFields=[] } = props || {}
	const { lat, lng } = flattenDocument(resource)

  const marker = { 
    lat, 
    lng,
    label: resource?.title,
    resource 
  }

	return (
		<GoogleMap 
      darkTheme={darkTheme}
      zoom={zoom} 
      markers={[marker]}
      displayFields={displayFields}
    />
	)
}

export default AddonGoogleMap
