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
	layout = 'grid',
	children,
}: DataLayoutProps) {
	return (
    <div className={cn(
      'w-full',
      loading && 'opacity-50'
    )}>
    { layout == 'grid' && (
    <div className='w-full grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-4 pb-1'>      
      {children}
      </div>  
    )}
    { layout == 'list' && (
      <div className='w-full flex flex-col space-y-4 border border-red-500'>
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
