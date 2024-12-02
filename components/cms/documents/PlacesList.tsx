'use client'

import React from 'react'
import { DocumentList } from '../..'
import { DocumentListProps } from './DocumentList'
import PlacesListItems from './PlacesListItems'

export type PlacesListProps = DocumentListProps

const PlacesList: React.FC<PlacesListProps> = (props) => {
	let { ...rest } = props

	return (
		<DocumentList
			{...rest}
			list={PlacesListItems}
		/>
	)
}

export default PlacesList
