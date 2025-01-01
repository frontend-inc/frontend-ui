'use client'

import React from 'react'
import { useDroppable } from '@dnd-kit/core'
import { cn } from '@nextui-org/react'

interface DroppableProps {
	id: string
	children?: React.ReactNode
}

const Droppable: React.FC<DroppableProps> = ({ id, children }) => {
	const { isOver, setNodeRef } = useDroppable({
		id,
	})

	return (
		<div
			ref={setNodeRef}
			className={cn(
				'flex flex-row items-center justify-center w-[260px] h-full p-2 rounded',
				'border border-divider',
				isOver && 'border-primary'
			)}
		>
			{children}
		</div>
	)
}

export default Droppable
