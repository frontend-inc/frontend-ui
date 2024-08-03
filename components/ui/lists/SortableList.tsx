import React, { useEffect, useState } from 'react'
import { Box, List } from '@mui/material'
import { DragDropContext, Draggable, Droppable } from '@hello-pangea/dnd'

type SortableListProps = {
	items: any[]
	droppableId: string
	renderItem: (item: any, index: number) => JSX.Element
	handleDrop: (items: any[]) => void
}

const SortableList: React.FC<SortableListProps> = (props) => {
	const { items, droppableId, renderItem, handleDrop } = props

	const [sorted, setSorted] = useState(items)

	const reorder = (items: any[], startIndex: number, endIndex: number) => {
		const [removed] = items.splice(startIndex, 1)
		items.splice(endIndex, 0, removed)
		return items.map((item: any, index: number) => ({
			...item,
			position: index + 1,
		}))
	}

	const onDragEnd = (result: any) => {
		if (!result.destination) {
			return items
		}
		const sortedItems = reorder(
			items,
			result.source.index,
			result.destination.index
		)
		setSorted(sortedItems)
		handleDrop(sorted)
	}

	useEffect(() => {
		setSorted(items)
	}, [items])

	return (
		<DragDropContext onDragEnd={onDragEnd}>
			<Droppable droppableId={String(droppableId)}>
				{(provided) => (
					<Box sx={sx.root}>
						<List
							dense
							disablePadding
							sx={sx.list}
							{...provided.droppableProps}
							ref={provided.innerRef}
						>
							{sorted?.map((item, index) => (
								<Draggable
									key={item?.id || index}
									draggableId={String(item?.id || index)}
									index={index}
								>
									{(provided, snapshot) => (
										<Box
											ref={provided.innerRef}
											{...provided.draggableProps}
											{...provided.dragHandleProps}
											sx={{
												...sx.draggableItem,
												...(snapshot.isDragging && sx.isDragging),
											}}
										>
											{renderItem({
													...item,
													isDragging: snapshot.isDragging,
												},
												index
											)}
										</Box>
									)}
								</Draggable>
							))}
						</List>
						{provided.placeholder}
					</Box>
				)}
			</Droppable>
		</DragDropContext>
	)
}

export default SortableList

const sx = {
	root: {
		width: '100%',
	},
	list: {
		overflowY: 'scroll',
		width: '100%',
    '&::-webkit-scrollbar': {
			display: 'none',
		},
	},
	draggableItem: {},
	isDragging: {},
}
