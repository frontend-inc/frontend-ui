'use client'

import React, { useState } from 'react'
import { Share } from 'lucide-react'
import { ShareModal, IconButton } from '../../../components'
import { cn } from 'frontend-shadcn'
import { RiShare2Fill } from '@remixicon/react'

type ShareButtonProps = {
	url: string
	size?: 'small' | 'large'
	variant?: 'rounded' | 'circular'
}

export default function ShareButton(props: ShareButtonProps) {

  const {
    url,
    variant = 'rounded',
    size = 'small',
  } = props
  
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
				<RiShare2Fill />
			</IconButton>
      <ShareModal 
        open={open}
        handleClose={ () => setOpen(false) }
        url={ url }
      />
		</div>
	)
}
