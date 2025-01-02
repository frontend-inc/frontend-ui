'use client'

import React from 'react'
import { useClickOrDrag } from '../../../hooks'
import { cn } from '@nextui-org/react'

type ClickOrDragButtonProps = {
	children: any
	handleClick?: () => void
	className?: string
}

const ClickOrDragButton: React.FC<ClickOrDragButtonProps> = (props) => {
	const { children, className, handleClick } = props

	const { onMouseDown, onMouseUp } = useClickOrDrag({
		onClick: handleClick,
	})

	return (
		<button
			onMouseDown={onMouseDown}
			onMouseUp={onMouseUp}
			className={cn('focus:outline-none', className)}
		>
			{children}
		</button>
	)
}

export default ClickOrDragButton
