'use client'

import React, { useContext } from 'react'
import { ResourceContext } from 'frontend-js'
import { GoogleMaps, CollectionListItems } from '../..'
import { CollectionListItemsProps } from './CollectionListItems'

export type GeoListListProps = CollectionListItemsProps & {
	url: string
}

export default function GeoListItems({
	url,
	metafields,
	...rest
}: GeoListListProps) {
	const { resources } = useContext(ResourceContext) as any

	return (
		<div className="flex flex-col md:flex-row -mx-2">
			<div className="w-full md:w-7/12 px-2 mb-4 md:mb-0">
				<CollectionListItems
					{...rest}
					metafields={metafields}
					style="list"
				/>
			</div>
			<div className="w-full md:w-5/12 px-2">
				<div className="hidden md:block">
					<GoogleMaps
						enableBorder
						zoom={15}
						height={380}
						resources={resources}
					/>
				</div>
			</div>
		</div>
	)
}
