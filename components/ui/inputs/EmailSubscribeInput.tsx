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
    <div className="flex flex-row space-x-2 items-center w-full max-m-[260px]">      
      <Input
        label="Email"
        name={ name }
        placeholder={placeholder}
        type="email"
        size={size}          
        classNames={{
          base: "rounded-r-none text-base",                          
        }}
        { ...rest }
      />
      <Button 
        size='lg'
        variant="solid"
        color="primary"
        onPress={handleSubmit}
        loading={loading}
      >
        {buttonText}
      </Button>        
    </div>
	)
}

export default EmailSubscribeInput
