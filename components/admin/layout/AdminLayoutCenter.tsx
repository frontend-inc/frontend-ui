'use client'

import React from 'react'
import { cn } from 'frontend-shadcn'

type AdminLayoutCenterProps = {
  disablePadding?: boolean
	children: React.ReactNode
}

export default function AdminLayoutCenter(props: AdminLayoutCenterProps) {

  const {
    disablePadding,
    children,
  } = props

	return (
		<div
			className={cn(
				'bg-background w-full h-screen overflow-hidden',
				'flex flex-col justify-between',
        !disablePadding && 'px-3'
			)}
		>
			<div
				className={cn(
					'flex flex-col justify-start',
					'h-full overflow-y-hidden'
				)}
			>
				{children}
			</div>
		</div>
	)
}
