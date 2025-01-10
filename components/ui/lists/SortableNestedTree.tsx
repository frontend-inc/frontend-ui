'use client'

import React from 'react'
import {
	DndContext,
	closestCenter,
	KeyboardSensor,
	PointerSensor,
	useSensor,
	useSensors,
	DragEndEvent,
} from '@dnd-kit/core'
import {
	arrayMove,
	SortableContext,
	sortableKeyboardCoordinates,
	verticalListSortingStrategy,
	useSortable,
} from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import { MenuButton } from '../../../components'

interface Item {
	id: string
	name: string
	parent_id: string | null
	isOpen?: boolean
	position?: number
	children?: Item[]
}

type SortableItemProps = {
	item: Item
	items: Item[]
	depth?: number
	handleDelete: (item: Item) => void
	handleEdit: (item: Item) => void
	toggleOpen: (id: string) => void
}

function SortableItem(props: SortableItemProps) {
	const { item, depth = 0, handleDelete, handleEdit, toggleOpen } = props

	const { attributes, listeners, setNodeRef, transform, transition } =
		useSortable({ id: item.id })

	const style = {
		transform: CSS.Transform.toString(transform),
		transition,
	}

	const handleItemClick = () => {
		toggleOpen(item.id)
	}

	return (
		<li>
			<div className="flex flex-row w-full items-center shadow-md justify-between">
				<div
					ref={setNodeRef}
					style={style}
					{...attributes}
					{...listeners}
					onClick={handleItemClick}
					className={`
            bg-content2 hover:bg-content3 rounded-lg
            w-full p-2 cursor-move
            transition-colors duration-200 ease-in-out
            flex items-center space-x-2
          `}
				>
					<span>{item.name}</span>
				</div>
				<MenuButton
					handleEdit={() => handleEdit(item)}
					handleDelete={() => handleDelete(item)}
				/>
			</div>
			{ item.children && item.children.length > 0 && (
				<ul className="ml-6 mt-2 space-y-2">
					{item.children.map((childItem) => (
						<SortableItem
							key={childItem.id}
							item={childItem}
							items={item.children!}
							depth={depth + 1}
							toggleOpen={toggleOpen}
							handleEdit={handleEdit}
							handleDelete={handleDelete}
						/>
					))}
				</ul>
			)}
		</li>
	)
}

interface SortableTreeProps {
	items: Item[]
	setItems: React.Dispatch<React.SetStateAction<Item[]>>
	handleDelete: (item: Item) => void
	handleEdit: (item: Item) => void
	handleDrop: (item: Item, sorted: Item[]) => void
}

export default function SortableTree(props: SortableTreeProps) {
	const { items, setItems, handleDrop, handleDelete, handleEdit } = props

	const sensors = useSensors(
		useSensor(PointerSensor),
		useSensor(KeyboardSensor, {
			coordinateGetter: sortableKeyboardCoordinates,
		})
	)

	// Ensure all items have `parent_id` set to null if undefined
	const initializeItems = (items: Item[]): Item[] =>
		items.map((item) => ({
			...item,
			parent_id: item.parent_id ?? null,
			children: item.children ? initializeItems(item.children) : [],
		}))

	function handleDragEnd(event: DragEndEvent) {
		const { active, over } = event

		if (active.id !== over?.id) {
			setItems((prevItems) => {
				const findItemById = (items: Item[], id: string): Item | null => {
					for (const item of items) {
						if (item.id === id) return item
						if (item.children) {
							const found = findItemById(item.children, id)
							if (found) return found
						}
					}
					return null
				}

				const removeItem = (items: Item[], id: string): Item[] =>
					items.reduce((acc, item) => {
						if (item.id === id) return acc
						return [
							...acc,
							{ ...item, children: item.children ? removeItem(item.children, id) : [] },
						]
					}, [] as Item[])

				const targetItem = findItemById(prevItems, over!.id)!
				const draggedItem = findItemById(prevItems, active.id)!
				const updatedItems = removeItem(prevItems, active.id)

				draggedItem.parent_id = targetItem.id
				if (targetItem.children) {
					targetItem.children.push(draggedItem)
				} else {
					targetItem.children = [draggedItem]
				}

				handleDrop(draggedItem, updatedItems)
				return initializeItems([...updatedItems])
			})
		}
	}

	const toggleOpen = (itemId: string) => {
		setItems((prevItems) =>
			prevItems.map((item) =>
				item.id === itemId ? { ...item, isOpen: !item.isOpen } : item
			)
		)
	}

	const rootItems = initializeItems(items)

	return (
		<DndContext
			sensors={sensors}
			collisionDetection={closestCenter}
			onDragEnd={handleDragEnd}
		>
			<SortableContext
				items={rootItems.map((item) => item.id)}
				strategy={verticalListSortingStrategy}
			>
				<ul className="space-y-2 w-full mx-auto">
					{rootItems.map((item) => (
						<SortableItem
							key={item.id}
							item={item}
							items={rootItems}
							toggleOpen={toggleOpen}
							handleEdit={handleEdit}
							handleDelete={handleDelete}
						/>
					))}
				</ul>
			</SortableContext>
		</DndContext>
	)
}
