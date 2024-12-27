'use client'

import React from 'react'
import { SyntheticEventType } from '../../../types'
import { InputLabel } from '../../../components'
import { cn } from 'frontend-shadcn'
import { Tab, Tabs } from '@nextui-org/react'

type TabsInputProps = {
	name: string
	label?: string
	handleChange: (ev: SyntheticEventType) => void
	options: {
		icon?: string
		label?: string
		value: string
	}[]
	value: string
	info?: string
}

export default function TabsInput({
	name,
	label,
	handleChange,
	options,
	value,
	info,
}: TabsInputProps) {
	const handleInputChange = (value: string) => {
		handleChange({
			target: {
				name,
				value,
			},
		})
	}

	return (
		<div
			className={'flex flex-row items-center justify-between w-full space-y-1'}
		>
			<InputLabel label={label} info={info} />
			<Tabs
				selectedKey={value.toString()}
				onSelectionChange={handleInputChange}
			>				
        {options.map((option) => (
          <Tab
            key={option.value}
            value={option.value.toString()}
            title={
              <div className='flex flex-row'>
                {option.icon && (
                  <span className={'inline-block mr-2'}>{option.icon}</span>
                )}
                { option.label }
              </div>
            }
          />                      
        ))}
			</Tabs>
		</div>
	)
}
