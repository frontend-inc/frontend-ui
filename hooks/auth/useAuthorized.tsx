import React, { useState, useEffect } from "react"
import { useAuth } from 'frontend-js'

type AuthorizedParams = {
  appId: string | string[]
}

const useAuthorized = (params: AuthorizedParams) => {
  const { appId } = params
  const { currentUser } = useAuth()
  const [ authorized, setAuthorized ] = useState<boolean | null>(null)

  const checkUserAuthorized = (currentUser) => {
    if (
      !currentUser?.app_users
        ?.map((appUser: any) => appUser.app.handle)
        .includes(appId)
    ) {      
      setAuthorized(false)
    }else{
      setAuthorized(true)
    }         
  }

  useEffect(() => {
    if(currentUser?.id){
      checkUserAuthorized(currentUser)
    }
  }, [currentUser])

  return {
    authorized,
    setAuthorized
  }
}

export default useAuthorized


