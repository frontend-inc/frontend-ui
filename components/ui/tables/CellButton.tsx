'use client'

import React from 'react'
import { Button } from '@nextui-org/react'
import { RemixIcon } from '../../../components'

type CellButtonProps = {
	children: string | number
	icon: string
	handleClick?: (value: any, row?: any, field?: any) => void
}

const CellButton: React.FC<CellButtonProps> = (props) => {
	const { children, icon, handleClick } = props

	return (
		<Button
			fullWidth
			size="sm"
			variant="ghost"
			startContent={<RemixIcon name={icon} />}
			onPress={handleClick && handleClick}
		>
			{children}
		</Button>
	)
}

export default CellButton
