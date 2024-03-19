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
} from '../..'

type StyledListProps = {
	loading?: boolean
	resources: any
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
			cover: CoverHoriz,
		},
		grid: {
			card: CardVert,
			avatar: AvatarVert,
			cover: CoverVert,
		},
		carousel: {
			card: CardVert,
			avatar: AvatarVert,
			cover: CoverVert,
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
						<CarouselView
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
					icon={emptyIcon}
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
