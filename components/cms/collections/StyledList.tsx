import React from 'react'
import { Box } from '@mui/material'
import {
	Icon,
	ListView,
	GridView,
	CarouselView,
	Placeholder,
	CardVert,
	CardHoriz,
	CoverVert,
	CoverHoriz,
	AvatarVert,
	AvatarHoriz,
	AvatarChip,
	ImageVert,
	ImageHoriz,
} from '../..'
import { DocumentType } from '../../../types'

type StyledListProps = {
	loading?: boolean
	resources: DocumentType[]
	layout?: 'list' | 'grid' | 'carousel'
	style?: 'card' | 'avatar' | 'image' | 'cover' | 'chip'
	handleClick?: (item: any) => void
	editing?: boolean
	buttonText?: string
	enableBorder?: boolean
	enableGradient?: boolean
	enableOverlay?: boolean
	emptyTitle?: string
	emptyDescription?: string
	emptyIcon?: string
}

const StyledList: React.FC<StyledListProps> = (props) => {
	const {
		loading = false,
		editing = false,
		resources,
		layout = 'list',
		style = 'card',
		buttonText,
		enableBorder = false,
		enableGradient = false,
		enableOverlay = false,
		emptyTitle = 'No results found',
		emptyDescription = 'Try adjusting your search or filters',
		emptyIcon = 'Search',
		handleClick,
	} = props

	const COMPONENTS = {
		list: {
			card: CardHoriz,
			avatar: AvatarHoriz,
			image: ImageHoriz,
			cover: CoverHoriz,
			chip: AvatarChip,
		},
		grid: {
			card: CardVert,
			avatar: AvatarVert,
			image: ImageVert,
			cover: CoverVert,
			chip: AvatarChip,
		},
		carousel: {
			card: CardVert,
			avatar: AvatarVert,
			image: ImageVert,
			cover: CoverVert,
			chip: AvatarChip,
		},
	}

	let component = COMPONENTS[layout][style] || CardVert

	return (
		<Box sx={sx.root}>
			{resources && (
				<>
					{layout == 'list' && (
						<ListView
							editing={editing}
							items={resources}
							handleClick={handleClick}
							buttonText={buttonText}
							component={component}
							enableBorder={enableBorder}
							enableGradient={enableGradient}
							enableOverlay={enableOverlay}
						/>
					)}
					{layout == 'grid' && (
						<GridView
							editing={editing}
							items={resources}
							handleClick={handleClick}
							buttonText={buttonText}
							component={component}
							enableBorder={enableBorder}
							enableGradient={enableGradient}
							enableOverlay={enableOverlay}
						/>
					)}
					{layout == 'carousel' && (
						<ListView
							flexDirection="row"
							editing={editing}
							items={resources}
							handleClick={handleClick}
							buttonText={buttonText}
							component={component}
							enableBorder={enableBorder}
							enableGradient={enableGradient}
							enableOverlay={enableOverlay}
						/>
					)}
				</>
			)}
			{!loading && resources?.length === 0 && (
				<Placeholder
					icon={<Icon name={emptyIcon} />}
					title={emptyTitle}
					description={emptyDescription}
				/>
			)}
		</Box>
	)
}

export default StyledList

const sx = {
	root: {
		width: '100%',
	},
}
