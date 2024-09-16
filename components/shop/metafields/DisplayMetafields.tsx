import React from 'react'
import { DisplayMetafield } from '../..'
import { DisplayFieldType } from '../../../types'
import { Stack } from '@mui/material'

type DisplayMetafieldsProps = {
	fields: DisplayFieldType[]
	resource: any
	enableTitle?: boolean
	enableRatings?: boolean
	alignItems?: 'flex-start' | 'center' | 'flex-end'
}

const DisplayMetafields: React.FC<DisplayMetafieldsProps> = (props) => {
	const { fields, resource, alignItems = 'flex-start' } = props || {}

	return (
		<Stack
			sx={sx.root}
			direction={'column'}
			spacing={0}
		>
			{fields?.map((field, index) => (
				<DisplayMetafield          
					key={index}
					field={field}
					resource={resource}
          disablePadding
				/>
			))}
		</Stack>
	)
}

export default DisplayMetafields

const sx = {
	root: {
    borderTop: '1px solid',
    borderColor: 'divider',
		width: '100%',
	},
}
