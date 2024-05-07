import React, { useContext } from 'react'
import { AuthContext } from 'frontend-js/context'
import { useApi, useAuth } from 'frontend-js'
import { useLoadingWrapper } from '../../hooks'

const useTeams = () => {
	
  const { serverPath } = useContext(AuthContext) as any 
  const { api } = useApi()

  const { 
    loading,
    loadingWrapper
  } = useLoadingWrapper()

  const selectTeam = async (teamId) => {
    return await loadingWrapper(
      () => api.post(`${serverPath}/select_team`, { 
        team_id: teamId 
      })
    )
  }

	return {
		loading,
    selectTeam
	}
}

export default useTeams
