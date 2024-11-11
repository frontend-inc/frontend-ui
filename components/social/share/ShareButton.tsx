'use client'

import React, { useState } from 'react'
import { Share } from 'lucide-react'
import { ShareModal, IconButton } from '../../../components'
import { cn } from 'frontend-shadcn'

type ShareButtonProps = {
	url: string
	size?: 'small' | 'large'
	variant?: 'rounded' | 'circular'
}

export default function ShareButton({
	url,
	variant = 'rounded',
	size = 'small',
}: ShareButtonProps) {
	const [open, setOpen] = useState(false)

	const handleClick = () => {
		setOpen(true)
	}

	return (
		<div>
			<IconButton
				onClick={handleClick}
				className={cn(
					variant == 'circular' ? 'rounded-full' : 'rounded-lg',
					'text-foreground',
					size === 'large' && 'border border-divider'
				)}
			>
				<Share className="w-4 h-4" />
			</IconButton>
      <ShareModal 
        open={open}
        handleClose={ () => setOpen(false) }
        url={ url }
      />
		</div>
	)
}
