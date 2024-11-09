'use client'

import React from 'react'
import { ScrollArea } from 'frontend-shadcn'
import { cn } from 'frontend-shadcn'

type DataLayoutProps = {
	loading?: boolean
	layout?: 'grid' | 'list' | 'slider'
  size?: 'sm' | 'md' | 'lg'
	children: React.ReactNode
}

export default function DataLayout({
	loading,
	layout = 'grid',
  size = 'md',
	children,
}: DataLayoutProps) {

  const gridSize = {
    sm: 'grid-cols-[repeat(auto-fill,minmax(250px,1fr))]',
    md: 'grid-cols-[repeat(auto-fill,minmax(300px,1fr))]',
    lg: 'grid-cols-[repeat(auto-fill,minmax(350px,1fr))]',
  }

	return (
		<div className={cn('w-full', loading && 'opacity-50')}>
			{layout == 'grid' && (
				<div className={cn(
            "w-full gap-4 pb-1 grid",
            gridSize[size]
          )}>
					{children}
				</div>
			)}
			{layout == 'list' && (
				<div className="w-full flex flex-col space-y-4">{children}</div>
			)}
			{layout == 'slider' && (
				<ScrollArea
					className={cn(
						'w-full whitespace-nowrap pb-4',
						loading && 'opacity-50'
					)}
				>
					<div className="flex flex-row w-full space-x-4">{children}</div>
				</ScrollArea>
			)}
		</div>
	)
}
