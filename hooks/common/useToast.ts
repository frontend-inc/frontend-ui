'use client'

import React from 'react'
import { toast } from 'frontend-shadcn'

const useToast = () => {
	
	const showAlertError = (message: string) => toast({
    variant: 'destructive',
    title: message
  })

	const showAlertSuccess = (message: string) => toast({
    variant: 'default',
    title: message
  })

	return {
		showAlertError,
		showAlertSuccess,
	}
}

export default useToast
