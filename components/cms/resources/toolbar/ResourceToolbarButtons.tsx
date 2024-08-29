import React from 'react'
import { Stack, Button } from '@mui/material'
import { Icon } from '../../../../components'

type ResourceToolbarButtonsProps = {
	selected: any[]
	selectedIds: number[] | string[]
	buttons: {
		color?: 'primary' | 'secondary'
		variant?: 'contained' | 'outlined'
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
		<Stack direction="row" spacing={1}>
			{buttons?.map((button, index) => (
				<Button
					key={index}
					variant={button?.variant}
					color={button?.color}
					onClick={
						selected && button?.onClick
							? () => button?.onClick(selected)
							: undefined
					}
					startIcon={button?.icon && <Icon name={button?.icon} />}
				>
					{button?.label}
				</Button>
			))}
		</Stack>
	)
}

export default ResourceToolbarButtons
