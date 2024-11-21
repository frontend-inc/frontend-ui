'use client'

import React, { useState } from 'react'
import { RemixIcon, ShareModal, IconButton } from '../../../components'
import { cn } from 'frontend-shadcn'

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
				<RemixIcon name='ri-share-2-fill' />
			</IconButton>
      <ShareModal 
        open={open}
        handleClose={ () => setOpen(false) }
        url={ url }
      />
		</div>
	)
}
