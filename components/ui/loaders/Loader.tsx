'use client'

import React from 'react'
import { cn, Spinner } from '@nextui-org/react'

type LoaderProps = {
	loading?: boolean
	delay?: number
}

export default function Loader({ loading }: LoaderProps) {
	if (!loading) return null

	return (
		<div
			className={cn(
				'flex flex-col items-center justify-center',
				'w-full h-full min-h-[200px]'
			)}
		>
			<Spinner />
		</div>
	)
}
