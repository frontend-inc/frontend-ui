'use client'

import React from 'react'
import { Card, CardContent } from 'frontend-shadcn'
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
		<Card className="w-full rounded-lg bg-background">
			<CardContent className="space-y-4 p-4 sm:p-6">
				<div className="space-y-2">
					<Typography variant="h4" className="text-center font-bold">
						{title}
					</Typography>
					{subtitle && (
						<Typography
							variant="body2"
							className="text-center text-muted-foreground"
						>
							{subtitle}
						</Typography>
					)}
				</div>
				{children}
			</CardContent>
		</Card>
	)
}
