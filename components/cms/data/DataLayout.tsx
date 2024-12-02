'use client'

import React from 'react'
import { ScrollArea } from 'frontend-shadcn'
import { cn } from 'frontend-shadcn'

type DataLayoutProps = {
	loading?: boolean
	layout?: 'grid' | 'list' | 'slider'
	size?: 'sm' | 'md' | 'lg' | 'xl'
	children: React.ReactNode
}

export default function DataLayout(props: DataLayoutProps) {

  const {
    loading,
    layout = 'grid',
    size = 'lg',
    children,
  } = props
	
  const gridSize = {
		sm: 'md:grid-cols-[repeat(auto-fill,minmax(300px,1fr))]',
		md: 'md:grid-cols-[repeat(auto-fill,minmax(360px,1fr))]',
		lg: 'md:grid-cols-[repeat(auto-fill,minmax(420px,1fr))]',
    xl: 'md:grid-cols-[repeat(auto-fill,minmax(480px,1fr))]',
	}

	return (
		<div className={cn('w-full', loading && 'opacity-50')}>
			{layout == 'grid' && (
				<div className={cn(
          'w-full gap-6 pb-1 grid', 
          'grid-cols-[repeat(auto-fill,minmax(240px,1fr))]',
          gridSize[size])
          }>
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
