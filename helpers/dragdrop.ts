export const reorder = (items, startIndex, endIndex) => {
	const result = Array.from(items)
	const [removed] = result.splice(startIndex, 1)
	result.splice(endIndex, 0, removed)
	let sorted = result.map((item, index) => ({
    //@ts-ignore
		...item,
		position: index,
	}))
	return sorted
}

export const reorderList = (items, source, destination) => {
	const current = items.find((i) => i.id === source.droppableId)
	const next = items.find((i) => i.id === destination.droppableId)
	const target = current.items[source.index]

	// moving to same list
	if (source.droppableId === destination.droppableId) {
		const reordered = reorder(
			[...current.items],
			source.index,
			destination.index
		)
		const updatedItems = items.map((i) => {
			if (i.id === source.droppableId) {
				return {
					...i,
					items: reordered,
				}
			} else {
				return i
			}
		})
		return updatedItems
	} else {
		// moving to different list
		// remove from original
		current.items.splice(source.index, 1)
		// insert into next
		next.items.splice(destination.index, 0, target)
		const updatedItems = items.map((i) => {
			if (i.id === source.droppableId) {
				return current
			} else if (i.id === destination.droppableId) {
				return next
			} else {
				return i
			}
		})
		return updatedItems
	}
}
