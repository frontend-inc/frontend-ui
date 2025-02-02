'use client'

import React, { useContext } from 'react'
import { ResourceContext } from 'frontend-js'
import { GoogleMaps, DocumentListItems } from '../..'
import { DocumentListItemsProps } from './DocumentListItems'

export type PlacesListListProps = DocumentListItemsProps & {
	url: string
}

export default function PlacesListItems({
	url,
	metafields,
	...rest
}: PlacesListListProps) {
	const { resources } = useContext(ResourceContext) as any

	return (
		<div className="flex flex-col md:flex-row -mx-2">
			<div className="w-full md:w-7/12 px-2 mb-4 md:mb-0">
				<DocumentListItems {...rest} metafields={metafields} style="list" />
			</div>
			<div className="w-full md:w-5/12 px-2 hidden md:block">
				<GoogleMaps
					darkTheme
					enableBorder
					zoom={15}
					height={380}
					resources={resources}
				/>
			</div>
		</div>
	)
}
