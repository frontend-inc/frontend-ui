'use client'

import React from 'react'
import { TableCell, TableHead } from 'frontend-shadcn'
import { cn } from 'frontend-shadcn'

type TableCellProps = {
	children?: React.ReactNode
	header?: boolean
	sticky?: boolean
	small?: boolean
	variant?: 'head' | 'body'
}

export default function CustomTableCell({
	children,
	header = false,
	sticky = false,
	small = false,
	variant = 'body',
}: TableCellProps) {
	const cellClasses = cn(
		'px-1 min-w-[100px] bg-background overflow-x-auto whitespace-nowrap max-w-[240px] scrollbar-hide',
		small && 'min-w-[40px] w-[40px]',
		sticky && 'sticky left-0 z-20'
	)

	if (variant === 'head' || header) {
		return <TableHead className={cellClasses}>{children}</TableHead>
	}

	return <TableCell className={cellClasses}>{children}</TableCell>
}
