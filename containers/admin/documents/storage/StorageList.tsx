import React, { useEffect } from 'react'
import { useStorage } from 'hooks'
import { Box, Button, CircularProgress } from '@mui/material'
import { ExpandMore } from '@mui/icons-material'
import StorageItemListItem from './StorageItem'
import { useRouter } from 'next/router'
import { Placeholder } from 'frontend-ui/components'
import { RouterParams } from 'frontend-ui/types'

type StorageItemListProps = {
	selectedIds: number[]
	handleSelect: (item: any) => void
}

const StorageItemList: React.FC<StorageItemListProps> = (props) => {
	const { selectedIds, handleSelect } = props

	const router = useRouter()
	const { app_id: appId } = router?.query as RouterParams

	const { loading, resources, findResources, loadMore, page, numPages } =
		useStorage({
			appId,
		})

	const handleLoadMore = async () => {
		await loadMore()
	}

	useEffect(() => {
		findResources({
			page: 1,
		})
	}, [])

	return (
		<>
			<Box sx={sx.list}>
				{resources.map((item, idx) => (
					<StorageItemListItem
						key={idx}
						item={item}
						size={164}
						selected={selectedIds.includes(item?.id)}
						handleClick={() => handleSelect(item)}
					/>
				))}
			</Box>
			{resources?.length == 0 && (
				<Placeholder
					icon={'Image'}
					title="No media"
					description="Upload or import media."
				/>
			)}
			{numPages > page && (
				<Button
					fullWidth
					color="secondary"
					variant="contained"
					onClick={handleLoadMore}
					endIcon={
						loading ? <CircularProgress disableShrink /> : <ExpandMore />
					}
				>
					Load More
				</Button>
			)}
		</>
	)
}

export default StorageItemList

const sx = {
	list: {
		mt: 2,
		display: 'grid',
		gridTemplateColumns: '1fr 1fr',
		gap: '10px',
	},
}
