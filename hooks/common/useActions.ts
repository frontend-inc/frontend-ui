import React, { useState, useContext } from 'react'
import { AppContext } from '../../context'
import { useRouter } from 'next/router'
import { ActionType } from '../../types'
import { useLoadingWrapper } from '.'

type UseActionParams = {
  action: ActionType 
  resource?: any
}

const useActions = (params: UseActionParams) => {

  const {
    loading,
    data,
    errors,
    loadingWrapper 
  } = useLoadingWrapper()

  const { action, resource } = params
  
  const router = useRouter()
	const { clientUrl } = useContext(AppContext)

  const handleClick = async (ev) => {
    switch(action?.name){
      case 'navigate':
        let url = `${clientUrl}${action?.path}`
        if(resource){
          url = `${clientUrl}${action?.path}/${resource.handle}`
        }
        router.push(url)
        break
      case 'url':
        window.open(action?.path, '_blank')
        break
      case 'webhook': 
        await loadingWrapper(() => fetch(action.url, {
            method: action?.options?.method,
            headers: action?.options?.headers,
            body: JSON.stringify(action?.options?.body)
          })
        )
        break;
      default:
        break        
    }
  }  

  return {
    loading,
    data,   
    errors, 
    handleClick 
  }
}

export default useActions