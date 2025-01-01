'use client'

import React from 'react'
import { Button } from '@nextui-org/react'
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

export default function FormWizardButtons(props: FormWizardButtonsProps) {

  const {
    loading = false,
    buttonText,
    currentStep,
    totalSteps,
    handleNextStep,
    handlePrevStep,
    handleSubmit,
  } = props

	return (
		<div className="fixed bottom-0 left-0 w-full py-2 px-2 flex justify-center space-x-4">
			<Button
				size="lg"
				variant="ghost"
				onPress={handlePrevStep}
				className={'w-full sm:w-[260px] bg-background'}
				startContent={<RiArrowLeftLine className="h-4 w-4" />}
			>
				Prev
			</Button>
			{currentStep !== totalSteps ? (
				<Button
					size="lg"
          variant="solid"
          color="primary"
					onPress={handleNextStep}
					disabled={currentStep === totalSteps}
					className="w-full sm:w-[260px]"
					isLoading={loading}
					endContent={<RiArrowRightLine className="h-4 w-4" />}
				>
					Next
				</Button>
			) : (
				<Button
					size="lg"
					onPress={handleSubmit}
          variant="solid"
          color="primary"
					disabled={currentStep !== totalSteps}
					className="w-full sm:w-[260px]"
					isLoading={loading}
				>
					{buttonText}
				</Button>
			)}
		</div>
	)
}
