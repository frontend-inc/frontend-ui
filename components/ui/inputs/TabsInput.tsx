'use client'

import React from 'react'
import { SyntheticEventType } from '../../../types'
import { RemixIcon, InputLabel } from '../../../components'
import { Tab, Tabs } from '@nextui-org/react'

type TabsInputProps = {
	label?: string
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
	const { label, name, handleChange, options, value } = props || {}

  const [selectedKey, setSelectedKey] = React.useState(value)

	const handleInputChange = (value: string) => {
    setSelectedKey(value)
		handleChange({
			target: {
				name,
				value,
			},
		})
	}

	return (
		<div className="flex flex-row space-x-6 items-center justify-between w-full">
			{label && <InputLabel label={label} />}
      <Tabs
        fullWidth
        selectedKey={selectedKey?.toString()}
        onSelectionChange={handleInputChange}
      >
        {options.map((option) => (
          <Tab
            key={option?.value}
            value={option?.value}
            title={
              <div className="flex flex-row items-center">
                {option.icon && (
                  <RemixIcon size="lg" name={option.icon} className="mr-2" />
                )}
                {option.label}
              </div>
            }
          />
        ))}
      </Tabs>
		</div>
	)
}
