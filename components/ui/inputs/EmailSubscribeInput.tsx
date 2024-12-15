'use client'

import React from 'react'
import { Button } from '../../../components'
import { InputBase } from '../..'
import { InputBaseProps } from './InputBase'

export type EmailSubscribeInputProps = InputBaseProps & {
  loading?: boolean
	buttonText?: string
	handleSubmit?: () => void
}

const EmailSubscribeInput: React.FC<EmailSubscribeInputProps> = (props) => {
	
  const { 
    loading,
    buttonText = 'Subscribe',
    handleSubmit,
    ...rest 
  } = props || {}

	return (
    <div className="flex flex-row justify-center items-center">
      <div className="md:max-w-[360px] w-full p-1 flex flex-row justify-center items-center">
        <InputBase
          { ...rest }
          type="email"
          className="rounded-l-md text-base h-[48px] md:min-w-[280px] rounded-r-none border-r-0"
        />
        <Button
          size="lg"
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
