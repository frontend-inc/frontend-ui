'use client'

import React from 'react'
import { cn } from 'frontend-shadcn'

type DataLayoutProps = {
	loading?: boolean
	grid?: boolean
	children: React.ReactNode
}

export default function DataLayout({
	loading,
	grid = false,
	children,
}: DataLayoutProps) {
	return (
		<div
			className={cn(
				'w-full',
				grid
					? 'grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-4 pb-1'
					: 'flex flex-col space-y-4',
				loading && 'opacity-50'
			)}
		>
			{children}
		</div>
	)
}
