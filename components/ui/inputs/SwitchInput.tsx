'use client'

import React from 'react'
import { InputPropsType } from '../../../types'
import { Switch } from '@nextui-org/react'

type SwitchInputProps = InputPropsType & {
  value: boolean | undefined
}

export default function SwitchInput(props: SwitchInputProps) {

  const {
    name,
    value,
    label,
    placeholder,
    handleChange,
  } = props


	const onCheckedChange = (checked: boolean) => {
		handleChange({
			target: {
				name,
				value: checked,
			},
		})
	}

	return (				
		<Switch isSelected={value} onValueChange={onCheckedChange}>
      { label }
    </Switch>
	)
}
