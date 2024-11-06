import React from 'react'
import { useResource } from 'frontend-js'
import { useApp } from '../../hooks'

const usePolicies = () => {

  const { apiUrl } = useApp()

  const { 

    loading,
    resource: policy,
    resources: policies,
    findOne: findPolicy, 
    findMany: findPolicies
  } = useResource({
    name: 'policy',
    url: `${apiUrl}/cms/policies`
  })

  return {
    loading,
    policy,
    policies,
    findPolicy,
    findPolicies
  }
}

export default usePolicies