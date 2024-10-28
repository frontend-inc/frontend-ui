'use client'

import React from 'react'
import { Typography } from '../../core'
import { Checkbox } from 'frontend-shadcn'

type CheckboxFilterItemProps = {
	label?: string
	option: {
		label: string
		value: string | number | boolean
	}
	values?: any[]
	handleClick: () => void
}

const CheckboxFilterItem: React.FC<CheckboxFilterItemProps> = (props) => {
	const { values = [], option, handleClick } = props

	return (
		<li className="list-none">
			<button className="cursor-pointer flex p-1 items-center w-full" onClick={handleClick}>
				<div className="mr-1">
					<Checkbox
						checked={values.includes(option.value)}
						onCheckedChange={handleClick}
					/>
          <Typography variant="button">{option?.label}</Typography>
				</div>
			</button>
		</li>
	)
}

export default CheckboxFilterItem
