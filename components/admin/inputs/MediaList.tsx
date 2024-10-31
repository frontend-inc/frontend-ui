'use client'

import React, { useEffect } from 'react'
import { useAdminMedia } from '../../../hooks'
import { ChevronDown } from 'lucide-react'
import MediaListItem from './MediaListItem'
import { Placeholder, IconLoading } from '../../../components'
import { Button } from '../../../components'

type MediaListProps = {
	selectedIds: number[]
	handleSelect: (item: any) => void
}

const MediaList: React.FC<MediaListProps> = ({ selectedIds, handleSelect }) => {
	const {
		loading,
		resources,
		findResources,
		deleteResource,
		reloadResources,
		loadMore,
		page,
		numPages,
	} = useAdminMedia()

	const handleRemove = async (resource: any) => {
		await deleteResource(resource.id)
		reloadResources()
	}

	const handleLoadMore = async () => {
		await loadMore()
	}

	useEffect(() => {
		findResources({
			page: 1,
		})
	}, [])

	return (
		<div className="flex flex-col space-y-4 w-full">
			<div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
				{resources.map((item) => (
					<MediaListItem
						key={item?.id}
						item={item}
						selected={selectedIds.includes(item?.id)}
						handleClick={() => handleSelect(item)}
						handleRemove={() => handleRemove(item)}
					/>
				))}
			</div>
			{resources?.length === 0 && (
				<Placeholder
					icon={'Image'}
					title="No media"
					description="Upload or import media."
				/>
			)}
			{numPages > page && (
				<Button variant="secondary" className="w-full" onClick={handleLoadMore}>
					{loading ? (
						<IconLoading className="mr-2 h-4 w-4" />
					) : (
						<ChevronDown className="mr-2 h-4 w-4" />
					)}
					Load More
				</Button>
			)}
		</div>
	)
}

export default MediaList
