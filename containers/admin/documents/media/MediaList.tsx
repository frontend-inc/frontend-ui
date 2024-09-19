import React, { useEffect } from 'react'
import { useMedia } from '../../../../hooks'
import { Stack, Box, Button } from '@mui/material'
import { ExpandMore } from '@mui/icons-material'
import MediaListItem from './MediaListItem'
import { Placeholder, IconLoading } from '../../../../components'

type MediaItemListProps = {
	selectedIds: number[]
	handleSelect: (item: any) => void
}

const MediaItemList: React.FC<MediaItemListProps> = (props) => {
	const { selectedIds, handleSelect } = props

	const { loading, resources, findResources, loadMore, page, numPages } =
		useMedia()

	const handleLoadMore = async () => {
		await loadMore()
	}

	useEffect(() => {
		findResources({
			page: 1,
		})
	}, [])

	return (
		<Stack direction="column" spacing={1} width={'100%'}>
			<Box sx={sx.list}>
				{resources.map((item, idx) => (
					<MediaListItem
						key={item?.id}
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
						loading ? <IconLoading loading /> : <ExpandMore />
					}
				>
					Load More
				</Button>
			)}
		</Stack>
	)
}

export default MediaItemList

const sx = {
	list: {
		mt: 2,
		display: 'grid',
		gridTemplateColumns: '1fr 1fr',
		gap: '10px',
	},
}
