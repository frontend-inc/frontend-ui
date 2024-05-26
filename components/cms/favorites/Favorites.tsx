import React, { useEffect, useContext } from 'react'
import { AppContext } from '../../../context'
import { useResource } from 'frontend-js'
import { useAuth } from 'frontend-js'
import { useRouter } from 'next/router'
import { CollectionList } from '../../../components'

type FavoritesProps = {
	variant?: 'list' | 'grid'
	style?: 'card' | 'avatar' | 'cover'
	field: any
	url: string
	handle: string
	href?: any
	foreignUrl?: string
	perPage?: number
	query?: any
	editing?: boolean
	buttonText?: string
	enableBorder?: boolean
	enableGradient?: boolean
	enableOverlay?: boolean
}

const Favorites: React.FC<FavoritesProps> = (props) => {
	const { currentUser } = useAuth()

	const {
		variant = 'list',
		style = 'card',
		url,
		href,
		perPage = 5,
		editing = false,
		buttonText,
		query: defaultQuery = null,
		enableBorder = false,
		enableGradient = false,
	} = props

	const router = useRouter()

	const { clientUrl } = useContext(AppContext)

	const { loading, query, resources, findMany } = useResource({
		url,
	})

	const handleClick = (item) => {
		if (!editing && clientUrl && href && item?.handle) {
			router.push(`${clientUrl}${href}/${item?.handle}`)
		}
	}

	useEffect(() => {
		if (url && currentUser) {
			const documentIds = currentUser?.favorites?.map((document) => document.id)

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
	}, [currentUser, url, defaultQuery])

	return (
		<CollectionList
			actions={[]}
			resources={resources}
			variant={variant}
			style={style}
			handleClick={handleClick}
			enableBorder={enableBorder}
			enableGradient={enableGradient}
			enableEdit={false}
			enableDelete={false}
			handleEdit={() => null}
			handleDelete={() => null}
		/>
	)
}

export default Favorites
