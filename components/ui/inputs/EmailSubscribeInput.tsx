// @ts-nocheck
'use client'

import React from 'react'
import { Button, Input } from '@nextui-org/react'
import { SyntheticEventType, TextInputProps } from '../../../types'
import { cn } from '@nextui-org/react'
import { RemixIcon } from '../../../components'

export type EmailSubscribeInputProps = TextInputProps & {
	loading?: boolean
	buttonText?: string
	handleSubmit?: () => void
	size?: 'sm' | 'md' | 'lg'
}

const EmailSubscribeInput: React.FC<EmailSubscribeInputProps> = (props) => {
	const {
		loading,
		label,
		name,
		value,
		handleChange,
		placeholder = 'Enter your email',
		buttonText = 'Subscribe',
		handleSubmit,
		size = 'md',
		...rest
	} = props || {}

	const handleValueChange = (text: string) => {
		handleChange({
			target: {
				name,
				value: text,
			},
		})
	}

	return (
		<div className="flex flex-row space-x-2 items-center w-full max-w-[280px]">
			<Input
				label={label}
				name={name}
				placeholder={placeholder}
				type="email"
				size={size}
				value={value}
				onValueChange={handleValueChange}
				startContent={<RemixIcon name="ri-mail-fill" />}
				classNames={{
					base: 'rounded-r-none text-base',
				}}
				{...rest}
			/>
			<Button
				size={size}
				variant="solid"
				color="primary"
				onPress={handleSubmit}
				isLoading={loading}
			>
				{buttonText}
			</Button>
		</div>
	)
}

export default EmailSubscribeInput
