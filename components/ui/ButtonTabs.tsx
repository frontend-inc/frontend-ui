'use client'

import React from 'react'
import { Tabs, TabsList, TabsTrigger } from 'frontend-shadcn'
import { Icon } from '..'
import { cn } from 'frontend-shadcn'

type ButtonTabsProps = {
  handleChange: (value: string | number) => void
  options: {
    icon?: string
    label?: string
    value: string | number
  }[]
  className?: string
  fullWidth?: boolean
  value: string | number
}

export default function ButtonTabs({
  handleChange,
  options,
  value,
  className,
  fullWidth,
}: ButtonTabsProps) {
  return (
    <Tabs value={value.toString()} onValueChange={handleChange}>
      <TabsList 
        className={cn(
          'bg-muted p-1',
          className,
          fullWidth && 'w-full'
        )}
      >
        {options.map((tab, i) => {
          return (
            <TabsTrigger
              key={i}
              value={tab.value.toString()}
              className={cn(
                'w-full flex items-center justify-center gap-2 transition-all',
                'data-[state=active]:bg-background data-[state=active]:text-foreground',
                'data-[state=active]:shadow-sm',
                'hover:bg-muted-foreground/10'
              )}
            >
              {tab.icon && (
                <Icon name={tab.icon} className="h-5 w-5" />
              )}
              {tab.label && (
                <span className="text-sm">{tab.label}</span>
              )}
            </TabsTrigger>
          )
        })}
      </TabsList>
    </Tabs>
  )
}