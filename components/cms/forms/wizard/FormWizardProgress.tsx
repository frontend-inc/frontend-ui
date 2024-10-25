'use client'

import React from 'react'
import { Progress } from 'frontend-shadcn'
import { Badge } from 'frontend-shadcn'

type FormWizardProgressProps = {
	currentStep: number
	totalSteps: number
}

export default function FormWizardProgress({
	currentStep,
	totalSteps,
}: FormWizardProgressProps) {
	const progressValue = (currentStep / totalSteps) * 100

	return (
		<div className="w-full">
			<Progress value={progressValue} className="w-full h-2.5 rounded-none" />
			<div className="m-4">
				<Badge variant="outline" className="text-sm font-medium py-1 px-2">
					Step {currentStep} of {totalSteps}
				</Badge>
			</div>
		</div>
	)
}
