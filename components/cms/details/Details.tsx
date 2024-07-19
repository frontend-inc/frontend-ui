import React from 'react'
import { Box, Grid } from '@mui/material'
import { Field } from '../..'
import { DisplayFieldType } from '../../../types'

export type DetailsProps = {
	displayFields: DisplayFieldType[]
	url: string
	resource: any
	enableBorder?: boolean
}

const FULL_WIDTH_VARIANTS = ['text', 'image', 'url']

const Details: React.FC<DetailsProps> = (props) => {
	const { resource, displayFields, enableBorder = false } = props

	return (
		<Box sx={sx.root}>
			<Grid container spacing={1}>
				{document &&
					displayFields?.map((field, i) => (
						<Grid
							key={i}
							item
							xs={12}
							sm={FULL_WIDTH_VARIANTS.includes(field?.variant) ? 12 : 6}
						>
							<Field
								field={field}
								enableBorder={enableBorder}
								resource={resource}
							/>
						</Grid>
					))}
			</Grid>
		</Box>
	)
}

export default Details

const sx = {
	root: {
		width: '100%',
	},
	itemFullWidth: {
		gridColumn: 'span 3',
	},
}
