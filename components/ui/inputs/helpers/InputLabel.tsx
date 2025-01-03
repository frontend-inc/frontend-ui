'use client'

import React from 'react'
import { Button, Tooltip } from '@nextui-org/react'
import { RiInformation2Line } from '@remixicon/react'

type InputLabelProps = {
	label?: string
	info?: string
}

const InputLabel: React.FC<InputLabelProps> = (props) => {
	const { label, info } = props

	return (
		<div className="min-w-[100px] flex flex-row gap-2">
			{label && (
				<label className="text-sm text-bold text-foreground">{label}</label>
			)}
			{info && (
				<Tooltip title={info}>
					<Button isIconOnly variant="light" className="min-w-8 h-8 w-8">
						<RiInformation2Line
							name="Info"
							size="sm"
							className="text-foreground/70"
						/>
					</Button>
				</Tooltip>
			)}
		</div>
	)
}

export default InputLabel
