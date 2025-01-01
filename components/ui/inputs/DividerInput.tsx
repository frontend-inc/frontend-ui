'use client'

import React from 'react'
import { Separator } from 'frontend-shadcn'
import { cn } from '@nextui-org/react'

type DividerInputProps = {
	label: string
	className?: string
}

export default function DividerInput({ label, className }: DividerInputProps) {
	return (
		<div className={cn('flex flex-col space-y-1.5', className)}>
			<h6 className="text-sm font-medium text-foreground/70">{label}</h6>
			<Separator className="mt-2 mb-1" />
		</div>
	)
}
