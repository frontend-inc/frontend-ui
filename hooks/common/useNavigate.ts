'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import { useApp } from '..'

const useNavigation = () => {
  const { clientUrl } = useApp()

  const router = useRouter()

  const handleClick = (path: string) => {
    router.push(`${clientUrl}${path}`)
  }

	return { 
    handleClick 
  }
}

export default useNavigation
