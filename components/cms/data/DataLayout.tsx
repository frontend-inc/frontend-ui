'use client'

import React from 'react'
import { ScrollArea } from 'frontend-shadcn'
import { cn } from 'frontend-shadcn'

type DataLayoutProps = {
	loading?: boolean
	layout?: 'grid' | 'list' | 'slider'
	children: React.ReactNode
}

export default function DataLayout({
	loading,
	layout = 'list',
	children,
}: DataLayoutProps) {
	return (
    <div className={cn(
      'w-full',
      loading && 'opacity-50'
    )}>
    { layout == 'grid' && (
    <div className='grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-4 pb-1'>      
      {children}
      </div>  
    )}
    { layout == 'list' && (
      <div className='flex flex-col space-y-4'>
        {children}
      </div> 
    )}
    { layout == 'slider' && (
      <ScrollArea 
        className={cn(
				  'w-full whitespace-nowrap pb-4',
				  loading && 'opacity-50'
			  )}
      >
        <div className="flex flex-row w-full space-x-4">
			    {children}
        </div> 
      </ScrollArea>
    )}
    </div>
	)
}
