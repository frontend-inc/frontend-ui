import React, { useContext } from 'react'
import { ResourceContext } from 'frontend-js'
import { Hidden, Grid } from '@mui/material'
import { GoogleMap, CollectionListItems } from '../..'
import { CollectionListItemsProps } from './CollectionListItems'

export type GeoListListProps = CollectionListItemsProps & {
	url: string
}

const GeoListItems: React.FC<GeoListListProps> = (props) => {
	const { url, displayFields, ...rest } = props

	const { resources } = useContext(ResourceContext) as any

	return (
		<Grid container spacing={2}>
			<Grid item sm={12} md={7}>
				<CollectionListItems
					{...rest}
					displayFields={displayFields}
					style="list"
				/>
			</Grid>
			<Grid item sm={12} md={5}>
				<Hidden smDown>
					<GoogleMap
						enableBorder
						zoom={15}
						height={380}
						resources={resources}
						displayFields={displayFields}
					/>
				</Hidden>
			</Grid>
		</Grid>
	)
}

export default GeoListItems
