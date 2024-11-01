'use client'

import React from 'react'
import { CollectionList } from '../../../components'
import { CollectionListProps } from '../collections/CollectionList'

export type GeoNearbyListProps = CollectionListProps & {
  documentId: string
}

const GeoNearbyList: React.FC<GeoNearbyListProps> = (props) => {
  const { url, documentId } = props || {}
  const geosearchUrl = `${url}/${documentId}/geonearby`
	return <CollectionList {...props} url={geosearchUrl} />
}

export default GeoNearbyList
