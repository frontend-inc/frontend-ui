'use client'

import React from 'react'
import { Button } from '../../../../components'
import { Icon } from '../../../../components'

type ResourceToolbarButtonsProps = {
	selected: any[]
	selectedIds: number[] | string[]
	buttons: {
		color?: 'primary' | 'secondary'
		variant?: 'default' | 'outline'
		icon?: string
		label: string
		onClick: (selected: any[]) => void
	}[]
}

const ResourceToolbarButtons: React.FC<ResourceToolbarButtonsProps> = (
	props
) => {
	const { selected, buttons } = props || {}

	return (
		<div className="flex flex-row space-x-2">
			{buttons?.map((button, index) => (
				<Button
					key={index}					
					onClick={
						selected && button?.onClick
							? () => button?.onClick(selected)
							: undefined
					}					
				>
					{button?.icon && (
						<Icon name={button?.icon} className="mr-2 h-4 w-4" />
					)}
					{button?.label}
				</Button>
			))}
		</div>
	)
}

export default ResourceToolbarButtons
