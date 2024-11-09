'use client'

import React from 'react'
import { useClickOrDrag } from '../../../hooks'
import { cn } from 'frontend-shadcn'

type TouchableOpacityProps = {
	children: any
	handleClick?: () => void
	className?: string
}

const TouchableOpacity: React.FC<TouchableOpacityProps> = (props) => {
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

export default TouchableOpacity
