'use client'

import React from 'react'
import { SyntheticEventType } from '../../../types'
import { RemixIcon, } from '../../../components'
import { Tab, Tabs } from '@nextui-org/react'

type TabsInputProps = {
  name: string
  value?: string  
	handleChange: (ev: SyntheticEventType) => void
	options: {
		icon?: string
		label?: string
		value: string
	}[]
}

export default function TabsInput(props: TabsInputProps) {

  const {
    name,
    handleChange,
    options,
    value='',
  } = props || {}

	const handleInputChange = (value: string) => {
		handleChange({
			target: {
				name,
				value,
			},
		})
	}

	return (
    <Tabs
      fullWidth
      selectedKey={value.toString()}
      onSelectionChange={handleInputChange}
    >				
      {options.map((option) => (
        <Tab
          key={option.value}
          value={option.value.toString()}
          title={
            <div className='flex flex-row items-center'>
              {option.icon && (
                <RemixIcon size='lg' name={ option.icon } className="mr-2" />
              )}
              { option.label }
            </div>
          }
        />                      
      ))}
    </Tabs>
	)
}
