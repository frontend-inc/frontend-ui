'use client'

import React from 'react'
import { Card, CardBody } from '@nextui-org/react'
import { Typography } from '../../../components'

type AuthScreenProps = {
	title: string
	subtitle?: string
	children: React.ReactNode
}

export default function AuthScreen({
	title,
	subtitle,
	children,
}: AuthScreenProps) {
	return (
		<Card className="w-full bg-content1">
			<CardBody className="flex flex-col space-y-4 p-4 sm:p-6">
				<div className="flex flex-col space-y-2">
					<Typography variant="h4" className="text-center font-bold">
						{title}
					</Typography>
					{subtitle && (
						<Typography
							variant="body2"
							className="text-center text-foreground/70"
						>
							{subtitle}
						</Typography>
					)}
				</div>
				{children}
			</CardBody>
		</Card>
	)
}
