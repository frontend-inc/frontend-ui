import React, { useState, useEffect } from 'react'
import { Box, Grid } from '@mui/material'
import { Field } from '../..'
import { flattenDocument } from '../../../helpers'

type DetailsProps = {
	fields: any[]
	url: string
	resource: any
	enableBorder?: boolean
}

const FULL_WIDTH_VARIANTS = ['text', 'image']

const Details: React.FC<DetailsProps> = (props) => {
	const { resource, fields, enableBorder = false } = props
	const [document, setDocument] = useState<any>()

	useEffect(() => {
		if (resource) {
			setDocument(flattenDocument(resource))
		}
	}, [resource])

	return (
		<Box sx={sx.root}>
			<Grid container spacing={1}>
				{document &&
					fields?.map((field, i) => (
						<Grid
							key={i}
							item
							xs={12}
							sm={FULL_WIDTH_VARIANTS.includes(field?.variant) ? 12 : 4}
						>
							<Box
								sx={{
									...sx.item,
									...(enableBorder && sx.itemBorder),
								}}
							>
								<Field field={field} document={document} />
							</Box>
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
	item: {
		p: 2,
		width: '100%',
		borderRadius: (theme) => `${theme.shape.borderRadius}px`,
		minHeight: 110,
	},
	itemBorder: {
		border: '1px solid',
		borderColor: 'divider',
	},
	itemFullWidth: {
		gridColumn: 'span 3',
	},
}
