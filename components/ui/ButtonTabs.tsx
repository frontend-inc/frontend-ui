'use client'

import React from 'react'
import { RemixIcon } from '..'
import { cn } from 'frontend-shadcn'
import {Tabs, Tab } from "@nextui-org/react";
import { NextUIProvider } from '@nextui-org/react';

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

export default function ButtonTabs(props: ButtonTabsProps) {
	const { handleChange, options, value, className, fullWidth } = props

	return (
    //@ts-ignore 
		<Tabs 
      fullWidth={fullWidth}
      selectedKey={value.toString()} 
      onSelectionChange={handleChange}
      className={className}
    >			
      {options.map((tab, i) => (
          <Tab							
            key={tab.value}
            title={
              <>
              {tab.icon && (
                <RemixIcon
                  name={tab.icon}
                  className={cn(tab.label && 'mr-2')}
                />
              )}
              {tab.label && <span className="text-sm">{tab.label}</span>}
              </>
            }              
          />						
        ))}
		</Tabs>
	)
}
