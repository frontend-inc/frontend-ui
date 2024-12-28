// @ts-nocheck
'use client'

import React from 'react'
import { Button, Input } from '@nextui-org/react'
import { SyntheticEventType, TextInputProps } from '../../../types'
import { cn } from 'frontend-shadcn'

export type EmailSubscribeInputProps = TextInputProps & {
  loading?: boolean
	buttonText?: string
	handleSubmit?: () => void
  size?: 'sm' | 'md' | 'lg'
}

const EmailSubscribeInput: React.FC<EmailSubscribeInputProps> = (props) => {
	
  const { 
    loading,
    name,
    placeholder='Enter your email',
    buttonText = 'Subscribe',
    handleSubmit,
    size='md',
    ...rest 
  } = props || {}

	return (
    <div className="flex flex-row items-center">
      <div className="md:max-w-[360px] w-full p-1 flex flex-col justify-center items-center">
        <Input
          label="Email"
          name={ name }
          placeholder={placeholder}
          type="email"
          size={size}
          classNames={{
            base: "rounded-r-none text-base"                          
          }}
          { ...rest }
        />
        <Button
          size={size}
          onPress={handleSubmit}
          className="rounded-l-none"
          loading={loading}
        >
          {buttonText}
        </Button>
      </div>
    </div>
	)
}

export default EmailSubscribeInput
