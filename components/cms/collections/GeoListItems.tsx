import React, { useContext } from 'react'
import { ResourceContext } from 'frontend-js'
import { Hidden, Grid } from '@mui/material'
import { GoogleMap, ListItems } from '../..'
import { ListItemsProps } from './ListItems'

export type GeoListListProps = ListItemsProps

const GeoListItems: React.FC<GeoListListProps> = (props) => {
	
  const { 
    url, 
    displayFields, 
    ...rest 
  } = props

	const { resources } = useContext(ResourceContext) as any

	return (
		<Grid container spacing={2}>
			<Grid item sm={12} md={7}>
				<ListItems
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

export default GeoListItems
