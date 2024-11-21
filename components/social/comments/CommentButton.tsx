'use client'

import React from 'react'
import { useResourceContext } from 'frontend-js'
import { MessageSquare } from 'lucide-react'
import { RemixIcon, IconButton } from '../../../components'
import { cn } from 'frontend-shadcn'

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
				<RemixIcon name='ri-message-2-fill' className="text-foreground" />
			</IconButton>
		</div>
	)
}
