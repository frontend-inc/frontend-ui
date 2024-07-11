import React, { useContext } from 'react'
import { CollectionContext } from 'frontend-js'
import { Hidden, Grid } from '@mui/material'
import { GoogleMap, CollectionList } from '../..'
import { CollectionListProps } from './CollectionList'

export type CollectionGeoListProps = CollectionListProps

const CollectionGeoList: React.FC<CollectionGeoListProps> = (props) => {
	const { url, displayFields, ...rest } = props

	const { resources } = useContext(CollectionContext) as any

	return (
		<Grid container spacing={2}>
			<Grid item sm={12} md={7}>
				<CollectionList
					{...rest}
					url={url}
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

export default CollectionGeoList
