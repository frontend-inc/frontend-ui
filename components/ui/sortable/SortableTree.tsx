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
import { File, Folder } from 'lucide-react'
import { MenuButton } from '../..'

interface Item {
	id: string
	label: string
	type: 'file' | 'folder'
	parentId: string | null	
	position?: number
}

type SortableItemProps = {
	item: Item
	items: Item[]
	depth?: number
	handleDelete: (item: any) => void
	handleEdit: (item: any) => void
	toggleFolder: (id: string) => void
}

function SortableItem(props: SortableItemProps) {
	const {
		item,
		items,
		depth = 0,
		handleDelete,
		handleEdit,
		toggleFolder,
	} = props || {}

	const { attributes, listeners, setNodeRef, transform, transition } =
		useSortable({ id: item.id })

	const style = {
		transform: CSS.Transform.toString(transform),
		transition,
	}

	const childItems = items.filter((i) => i.parentId === item.id)

	const handleItemClick = () => {
		if (item.type === 'folder') {
			toggleFolder(item.id)
		}
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
					{item.type === 'file' ? <File size={16} /> : <Folder size={16} />}
					<span>{item.label}</span>
				</div>
				<MenuButton
					handleEdit={() => handleEdit(item)}
					handleDelete={() => handleDelete(item)}
				/>
			</div>
			{item.type === 'folder' && childItems.length > 0 && (
				<ul className="ml-6 mt-2 space-y-2">
					{childItems.map((childItem) => (
						<SortableItem
							key={childItem.id}
							item={childItem}
							items={items}
							depth={depth + 1}
							toggleFolder={toggleFolder}
							handleEdit={() => handleEdit(childItem)}
							handleDelete={() => handleDelete(childItem)}
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
	handleDelete: (id: string) => void
	handleEdit: (id: string) => void
	handleDrop: (item: Item, sorted: Item[]) => void
}

export default function SortableTree(props: SortableTreeProps) {
	const { items, setItems, handleDrop, handleDelete, handleEdit } = props || {}

	const sensors = useSensors(
		useSensor(PointerSensor),
		useSensor(KeyboardSensor, {
			coordinateGetter: sortableKeyboardCoordinates,
		})
	)

	function handleDragEnd(event: DragEndEvent) {
		const { active, over } = event

		if (active.id !== over?.id) {
			setItems((items) => {
				const oldIndex = items.findIndex((item) => item.id === active.id)
				const newIndex = items.findIndex((item) => item.id === over?.id)
				const sortedItems = arrayMove(items, oldIndex, newIndex)

				// Check if the dragged item is being dropped into a folder
				const draggedItem = sortedItems[newIndex]
				const targetItem = sortedItems[newIndex - 1] // The item before the dragged item

				if (targetItem && targetItem.type === 'folder' ) {
					draggedItem.parentId = targetItem.id
				} else if (
					targetItem &&
					draggedItem.type == 'file' &&
					targetItem.type == 'file' &&
					targetItem.parentId
				) {
					draggedItem.parentId = targetItem.parentId
				} else {
					draggedItem.parentId = null
				}

				// Update positions of all items in the updated array
				sortedItems.forEach((item, index) => {
					item.position = index
				})

				handleDrop(draggedItem, sortedItems)
				return [...sortedItems]
			})
		}
	}

	const toggleFolder = (itemId: string) => {
		setItems(
			items.map((item) =>
				item.id === itemId ? { ...item } : item
			)
		)
	}

	const rootItems = items.filter((item) => item.parentId === null)

	return (
		<DndContext
			sensors={sensors}
			collisionDetection={closestCenter}
			onDragEnd={handleDragEnd}
		>
			<SortableContext
				items={items.map((item) => item.id)}
				strategy={verticalListSortingStrategy}
			>
				<ul className="space-y-2 w-full mx-auto">
					{rootItems.map((item) => (
						<SortableItem
							key={item.id}
							item={item}
							items={items}
							toggleFolder={toggleFolder}
							handleEdit={handleEdit}
							handleDelete={handleDelete}
						/>
					))}
				</ul>
			</SortableContext>
		</DndContext>
	)
}
