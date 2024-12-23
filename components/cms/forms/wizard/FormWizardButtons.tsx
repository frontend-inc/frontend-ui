'use client'

import React from 'react'
import { Button } from '../../../../components'
import { ChevronLeft, ChevronRight, Loader2 } from 'lucide-react'
import { cn } from 'frontend-shadcn'
import { RiArrowLeftLine, RiArrowRightLine } from '@remixicon/react'

type FormWizardButtonsProps = {
	loading?: boolean
	currentStep: number
	totalSteps: number
	buttonText: string
	handleNextStep: () => void
	handlePrevStep: () => void
	handleSubmit: () => void
}

export default function FormWizardButtons({
	loading = false,
	buttonText,
	currentStep,
	totalSteps,
	handleNextStep,
	handlePrevStep,
	handleSubmit,
}: FormWizardButtonsProps) {
	return (
		<div className="fixed bottom-0 left-0 w-full py-2 px-2 flex justify-center space-x-4">
			<Button
				size="lg"
				variant="outline"
				onClick={handlePrevStep}
				className={'w-full sm:w-[260px] bg-background'}
				startIcon={<RiArrowLeftLine className="h-4 w-4" />}
			>
				Prev
			</Button>
			{currentStep !== totalSteps ? (
				<Button
					size="lg"
					onClick={handleNextStep}
					disabled={currentStep === totalSteps}
					className="w-full sm:w-[260px]"
					loading={loading}
					endIcon={<RiArrowRightLine className="h-4 w-4" />}
				>
					Next
				</Button>
			) : (
				<Button
					size="lg"
					onClick={handleSubmit}
					disabled={currentStep !== totalSteps}
					className="w-full sm:w-[260px]"
					loading={loading}
				>
					{buttonText}
				</Button>
			)}
		</div>
	)
}
