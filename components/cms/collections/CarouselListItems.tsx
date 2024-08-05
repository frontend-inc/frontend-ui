import React, { useState, useContext } from 'react'
import { ResourceContext } from 'frontend-js'
import { Box, Stack } from '@mui/material'
import { Carousel } from '../..'
import { AppContext } from '../../../context'
import { useRouter } from 'next/router'
import ListCard from './ListCard'
import { useForms } from '../../../hooks'
import { ListItemsProps } from './ListItems'

export type CarouselListListProps = ListItemsProps & {
	enableAutoPlay?: boolean
	enableArrows?: boolean
	enableDots?: boolean
}

const CarouselListList: React.FC<CarouselListListProps> = (props) => {
	const router = useRouter()
	const { clientUrl } = useContext(AppContext)

	const {
		actions,
		href,
		displayFields,
		enableAutoPlay = true,
		enableArrows = false,
		enableDots = false,
		enableGradient = false,
		enableOverlay = false,
		enableEdit = false,
		enableDelete = false,
		enableRatings = false,
		enableUsers = false,
		enableFavorites = false,
		enableLikes = false,
	} = props

	const { handleEdit, handleDeleteClick } = useForms()

	const { setOpenShow, loading, resource, resources, setResource } = useContext(
		ResourceContext
	) as any

	const handleClick = (resource) => {
		if (href) {
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

	return (
		<Stack
			spacing={1}
			sx={{
				...sx.root,
				...(loading && sx.loading),
			}}
		>
			<Carousel
				enableDots={enableDots}
				enableAutoPlay={enableAutoPlay}
				enableArrows={enableArrows}
			>
				{resources?.map((resource, index) => (
					<Box
						key={index}
						sx={{
							...sx.item,
							pt: enableArrows ? 5 : 1,
							pb: enableDots ? 4 : 1,
						}}
					>
						<ListCard
							actions={actions}
							style="card"
							resource={resource}
							displayFields={displayFields}
							enableEdit={enableEdit}
							enableDelete={enableDelete}
							handleEdit={() => handleEdit(resource)}
							handleDelete={() => handleDeleteClick(resource)}
							handleClick={() => handleClick(resource)}
							enableGradient={enableGradient}
							enableFavorites={enableFavorites}
							enableRatings={enableRatings}
							enableUsers={enableUsers}
							enableLikes={enableLikes}
						/>
					</Box>
				))}
			</Carousel>
		</Stack>
	)
}

export default CarouselListList

const sx = {
	root: {
		width: '100%',
	},
	loading: {
		opacity: 0.5,
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
