'use client'

import React from 'react'
import { useResourceContext } from 'frontend-js'
import { MessageSquare } from 'lucide-react'
import { IconButton } from '../../core'
import { cn } from 'frontend-shadcn'
import { RiMessage2Fill } from '@remixicon/react'

type CommentButtonProps = {
	resource: any
	size?: 'small' | 'large'
}

export default function CommentButton({
	resource,
	size = 'small',
}: CommentButtonProps) {
	const { openShow, setOpenShow, setResource } = useResourceContext()

	const handleClick = () => {
		setResource(resource)
		setOpenShow(!openShow)
	}

	return (
		<div>
			<IconButton
				onClick={handleClick}
				className={cn(size === 'large' && 'border border-divider')}
			>
				<RiMessage2Fill className="text-foreground" />
			</IconButton>
		</div>
	)
}
