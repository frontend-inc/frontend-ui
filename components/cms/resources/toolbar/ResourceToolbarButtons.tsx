'use client'

import React from 'react'
import { Button } from '@nextui-org/react'
import { RemixIcon } from '../../../../components'

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
					onPress={
						selected && button?.onClick
							? () => button?.onClick(selected)
							: undefined
					}
          startContent={
            button?.icon && <RemixIcon name={button?.icon} />
          }
				>
					{button?.label}
				</Button>
			))}
		</div>
	)
}

export default ResourceToolbarButtons
