import React, { useState, useEffect } from 'react'
import { useResource } from 'frontend-js'
import { Box } from '@mui/material'
import { Field } from '../../../components'
import { flattenDocument } from '../../../helpers'

type DetailsProps = {
	fields: any[]
	url: string
	handle: string
}

const Details: React.FC<DetailsProps> = (props) => {
	const { fields, url, handle } = props
	const [document, setDocument] = useState<any>()

	const { resource, findOne } = useResource({
		url,
	})

	useEffect(() => {
		if (handle) {
			findOne(handle)
		}
	}, [handle])

	useEffect(() => {
		if (resource) {
			setDocument(flattenDocument(resource))
		}
	}, [resource])

	return (
		<Box sx={sx.root}>
			{document &&
				fields.map((field, i) => (
					<Field key={i} field={field} document={document} />
				))}
		</Box>
	)
}

export default Details

const sx = {
	root: {
		width: '100%',
	},
}
