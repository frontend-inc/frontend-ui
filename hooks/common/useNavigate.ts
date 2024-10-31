'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import { useApp } from '..'

type UseNavigateParams = {
  handleClick?: (ev?: any) => void
}

const useNavigate = (params?: UseNavigateParams) => {
  const { handleClick } = params || {}

  const { clientUrl } = useApp()

  const router = useRouter()

  const onClick = (path?: string) => {
    if(handleClick){
      handleClick()
    }else if(path){
      window.scrollTo({
				top: 0,
				behavior: 'smooth',
			})
      router.push(`${clientUrl}${path}`)
    }    
  }

	return onClick    
}

export default useNavigate
