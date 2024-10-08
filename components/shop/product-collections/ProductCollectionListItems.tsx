import React from 'react'
import { Stack } from '../../../tailwind'
import { LoadMore } from '../..'
import { useResourceContext } from 'frontend-js'
import { useApp } from '../../../hooks'
import { useRouter } from 'next/router'
import { ProductCollectionListItem, DataLayout } from '../..'
import { ButtonType, DisplayFieldType } from '../../../types'

export type ProductCollectionListItemsProps = {
	grid?: boolean
	href?: string
	style?: 'list' | 'card' | 'avatar' | 'cover' | 'text'
	buttons: ButtonType[]
	displayFields: DisplayFieldType[]
	handleClick?: (resource: any) => void
	enableGradient?: boolean
	enableOverlay?: boolean
	enableFavorites?: boolean
	enableLikes?: boolean
	enableRatings?: boolean
	enableSharing?: boolean
	slots?: {
		list?: any
		item?: any
	}
}

const ProductCollectionListItems: React.FC<ProductCollectionListItemsProps> = (props) => {
	const router = useRouter()
	const { clientUrl } = useApp()

	const {
		setResource,
		loading,
		resources,
		page,
		numPages,
		loadMore,
		setOpenShow,
	} = useResourceContext()

	const {
		grid = false,
		buttons = [],
		style = 'list',
		href,
		handleClick,
		displayFields = [],
		enableGradient = false,
		enableOverlay = false,
		enableFavorites = false,
		enableLikes = false,
		enableRatings = false,
		slots = {
			item: {},
		},
	} = props

	const handleShowClick = (resource) => {
		if (handleClick) {
			handleClick(resource)
		} else if (href) {
			if (clientUrl && href && resource?.handle) {
				window.scrollTo({
					top: 0,
					behavior: 'smooth',
				})
				router.push(`${clientUrl}${href}/${resource?.handle}`)
			}
		} else {
			setResource(resource)
			setOpenShow(true)
		}
	}

	const handlePaginate = async () => {
		await loadMore()
	}

	return (
		<Stack direction="column" spacing={2}>
			<DataLayout {...slots.list} grid={grid} loading={loading}>
				{resources?.map((resource,) => (
					<ProductCollectionListItem
						key={resource?.id}
						style={style}
						resource={resource}
						displayFields={displayFields}
						handleClick={() => handleShowClick(resource)}
						buttons={buttons}
						enableFavorites={enableFavorites}
						enableLikes={enableLikes}
						enableRatings={enableRatings}
						enableGradient={enableGradient}
						enableOverlay={enableOverlay}
						{...slots.item}
					/>
				))}
			</DataLayout>
			<LoadMore
				page={page}
				numPages={numPages}
				handlePaginate={handlePaginate}
			/>
		</Stack>
	)
}

export default ProductCollectionListItems