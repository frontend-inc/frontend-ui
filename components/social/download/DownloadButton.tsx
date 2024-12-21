'use client'

import React from 'react'
import { RemixIcon, IconButton } from '../..'
import { cn } from 'frontend-shadcn'

type DownloadButtonProps = {
	resource: any
	size?: 'small' | 'large'
	variant?: 'rounded' | 'circular'
}

export default function DownloadButton(props: DownloadButtonProps) {
	const { resource, size = 'small', variant = 'rounded' } = props

  const downloadUrl = resource?.image?.url || '#'

	return (
		<div>
      <a href={downloadUrl} download={downloadUrl}>
        <IconButton
          className={cn(
            variant == 'circular' ? 'rounded-full' : 'rounded-lg',
            size === 'large' && 'border border-divider'
          )}
        >
          <RemixIcon name="ri-download-line" />
        </IconButton>
      </a>
		</div>
	)
}
