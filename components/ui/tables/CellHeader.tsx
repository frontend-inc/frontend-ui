'use client'

import React, { useEffect, useState } from 'react'
import { Button } from '../../../components'
import { ChevronUp } from 'lucide-react'
import { cn } from 'frontend-shadcn'

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
			className={cn(
				'w-full h-11 rounded-none flex justify-between items-center px-2',
				'hover:bg-muted hover:text-foreground'
			)}
			onClick={() => handleSort(field)}
		>
			<span className="font-medium">{field?.label}</span>
			{active && (
				<span
					className={cn(
						'transition-transform duration-200',
						sortDirection === 'desc' && 'rotate-180'
					)}
				>
					<ChevronUp className="h-5 w-5 text-muted-foreground" />
				</span>
			)}
		</Button>
	)
}
