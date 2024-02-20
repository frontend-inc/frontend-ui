import React, { useState, useEffect } from 'react'
import { useResource } from 'frontend-js'
import { Box, useTheme } from '@mui/material'
import { Icon, AccordionItem, Placeholder } from '../../../components'
import { getDocumentValue } from '../../../helpers'

type AccordionHasManyProps = {
	field: any
	url: string
	handle: string
	foreignUrl: string
	perPage?: number
	query?: any
}

const AccordionHasMany: React.FC<AccordionHasManyProps> = (props) => {
	const {
		field,
		url,
		foreignUrl,
		handle,
		perPage = 5,
		query: defaultQuery = null,
	} = props

	const theme = useTheme()

	const [documents, setDocuments] = useState<any[]>([])

	const { resource, findOne } = useResource({
		url,
	})

	const { loading, query, resources, findMany } = useResource({
		url: foreignUrl,
	})

	useEffect(() => {
		if (handle) {
			findOne(handle)
		}
	}, [handle])

	useEffect(() => {
		if (resource && field) {
			setDocuments(getDocumentValue(resource, field))
		}
	}, [resource, field])

	useEffect(() => {
		if (foreignUrl && documents) {
			const documentIds = documents.map((document) => document.id)
			findMany({
				...query,
				...defaultQuery,
				filters: {
					AND: [
						{
							id: {
								in: documentIds,
							},
						},
					],
				},
				per_page: perPage,
				page: 1,
			})
		}
	}, [documents, foreignUrl, defaultQuery])

	return (
		<Box sx={sx.root}>
			{resources?.map((resource, i) => (
				<AccordionItem
					key={i}
					title={resource?.title}
					description={resource?.description}
					image={resource?.image}
				/>
			))}
			{!loading && resources?.length === 0 && (
				<Placeholder
					enableBorder
					icon={<Icon name="Search" />}
					title="No results found"
					description="Try adjusting your search or filters"
				/>
			)}
		</Box>
	)
}

export default AccordionHasMany

const sx = {
	root: {
		width: '100%',
	},
}
