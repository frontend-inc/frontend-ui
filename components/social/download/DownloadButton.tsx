'use client'

import React from 'react'
import { RemixIcon, IconButton } from '../..'
import { cn } from 'frontend-shadcn'
import { cloudinaryDownloadUrl } from '../../../helpers'

type DownloadButtonProps = {
	resource: any
	size?: 'small' | 'large'
	variant?: 'rounded' | 'circular'
}

export default function DownloadButton(props: DownloadButtonProps) {
	const { resource, size = 'small', variant = 'rounded' } = props

  let { image, file, video } = resource || {}

  let downloadUrl = file?.url || video?.url || image?.url || '#'
  let fileName = file?.filename || video?.filename || image?.filename || 'download'
  downloadUrl = cloudinaryDownloadUrl(downloadUrl,  fileName)

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
