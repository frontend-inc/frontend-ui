// @ts-nocheck
'use client'

import React from 'react'
import { Button } from '../../../components'
import { InputBase } from '../..'
import { SyntheticEventType, TextInputProps } from '../../../types'
import { cn } from 'frontend-shadcn'

export type EmailSubscribeInputProps = TextInputProps & {
  loading?: boolean
	buttonText?: string
	handleSubmit?: () => void
  size?: 'sm' | 'default' | 'lg'
}

const EmailSubscribeInput: React.FC<EmailSubscribeInputProps> = (props) => {
	
  const { 
    loading,
    name,
    placeholder='Enter your email',
    buttonText = 'Subscribe',
    handleSubmit,
    size='default',
    ...rest 
  } = props || {}

  const sizeClasses = {
    sm: 'h-[38px] md:min-w-[160px]',
    default: 'h-[38px] md:min-w-[220px]',
    lg: 'h-[48px] md:min-w-[280px]',
  }

	return (
    <div className="flex flex-row items-center">
      <div className="md:max-w-[360px] w-full p-1 flex flex-row justify-center items-center">
        <InputBase
          name={ name }
          placeholder={placeholder}
          type="email"
          className={cn(
            "rounded-l-md text-base rounded-r-none border-r-0",
            sizeClasses[size]
          )}
          { ...rest }
        />
        <Button
          size={size}
          onClick={handleSubmit}
          className="rounded-l-none rounded-r-md text-base"
          loading={loading}
        >
          {buttonText}
        </Button>
      </div>
    </div>
	)
}

export default EmailSubscribeInput
