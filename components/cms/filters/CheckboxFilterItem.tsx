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
			<button className="cursor-pointer hover:bg-muted/20 flex py-1 px-2 items-center w-full" onClick={handleClick}>
				<div className="flex flex-row space-x-2 items-center">
					<Checkbox            
						checked={values.includes(option.value)}
						onCheckedChange={handleClick}
					/>
          <Typography variant="body1" className="font-medium">{option?.label}</Typography>
				</div>
			</button>
		</li>
	)
}

export default CheckboxFilterItem
