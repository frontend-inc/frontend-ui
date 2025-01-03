'use client'

import React, { useEffect, useState } from 'react'
import { Button } from '@nextui-org/react'
import { ChevronUp } from 'lucide-react'
import { cn } from '@nextui-org/react'

type CellHeaderProps = {
	field: {
		name: string
		label: string
	}
	sortBy: string
	sortDirection: string
	handleSort: (header: any) => void
}

export default function CellHeader({
	field,
	sortBy,
	sortDirection,
	handleSort,
}: CellHeaderProps) {
	const [active, setActive] = useState(false)

	useEffect(() => {
		setActive(sortBy === field?.name)
	}, [field, sortBy])

	return (
		<Button
			variant="ghost"
			onPress={() => handleSort(field)}
			endContent={
				active && (
					<span
						className={cn(
							'transition-transform duration-200',
							sortDirection === 'desc' && 'rotate-180'
						)}
					>
						<ChevronUp className="h-5 w-5 text-foreground/70" />
					</span>
				)
			}
		>
			{field?.label}
		</Button>
	)
}
