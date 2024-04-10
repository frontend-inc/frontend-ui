import React, { useState, useEffect, useContext } from 'react'
import { AppContext } from '../../../context'
import { useResource } from 'frontend-js'
import { useRouter } from 'next/router'
import { filterDocumentLinks } from '../../../helpers'
import { LoadMore, CollectionList } from '../../../components'
import { Box } from '@mui/material'

export type ForeignCollectionProps = {
	layout?: 'list' | 'grid'
	style?: 'card' | 'avatar' | 'cover'
	field: any
	resource: any
	url: string
	handle: string
	navigateUrl?: any
	foreignUrl?: string
	perPage?: number
	query?: any
	buttonText?: string
	enableBorder?: boolean
	enableGradient?: boolean
	enableLoadMore?: boolean
}

const ForeignCollection: React.FC<ForeignCollectionProps> = (props) => {
	const {
		field,
		resource,
		layout = 'list',
		style = 'card',
		foreignUrl,
		navigateUrl,
		perPage = 5,
		buttonText,
		query: defaultQuery = null,
		enableBorder = false,
		enableGradient = false,
		enableLoadMore = true,
	} = props

	const router = useRouter()

	const { clientUrl } = useContext(AppContext)

	const { loading, query, resources, findMany, page, numPages, loadMore } =
		useResource({
			url: foreignUrl,
		})

	const handleClick = (item) => {
		if (clientUrl && navigateUrl && item?.handle) {
			router.push(`${clientUrl}${navigateUrl}/${item?.handle}`)
		}
	}

	useEffect(() => {
		if (resource && field && foreignUrl) {
			const documents = filterDocumentLinks(
				resource,
				field?.foreign_content_type
			)
			const documentIds = documents?.map((document) => document.id)
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
	}, [resource, field, foreignUrl])

	return (
		<Box sx={sx.root}>
			<CollectionList
				layout={layout}
				style={style}
				resources={resources}
				handleClick={handleClick}
				buttonText={buttonText}
				enableBorder={enableBorder}
				enableGradient={enableGradient}
			/>
			{enableLoadMore && (
				<LoadMore page={page} numPages={numPages} loadMore={loadMore} />
			)}
		</Box>
	)
}

export default ForeignCollection

const sx = {
	root: {
		width: '100%',
	},
	content: {
		width: '100%',
	},
	list: {
		display: 'flex',
		flexDirection: 'column',
		gap: '16px',
	},
	grid: {
		display: 'grid',
		gridTemplateColumns: {
			md: '1fr 1fr 1fr',
			xs: '1fr',
		},
		gap: '16px',
	},
	item: {
		p: 2,
	},
}
