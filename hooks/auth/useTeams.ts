import React, { useState } from 'react'
import { useApi, useResource } from 'frontend-js'
import { TeamType } from '../../types'

const useTeams = () => {
	  
	const { api } = useApi()
  const [user, setUser] = useState({})

  const {
    loading,
		delayedLoading,
		errors,
		resource: team,
		resources: teams,
		findOne: findTeam,
		findMany: findTeams,
		update: updateTeam,
		create: createTeam,
		destroy: deleteTeam,
		setResource: setTeam,
		handleChange,
		handleChangePage,
		reloadMany: reloadTeams,
		query,
		setQuery,
		page,
		numPages,
		perPage,
		totalCount,
		sortBy,
		sortDirection,
		handleSort,
		loadMore,
		loadingWrapper,
		paginate,
    removeAttachment
  } = useResource({
    name: 'team',
    url: '/api/v1/teams'
  })

  const selectTeam = async (teamId) => {
    return await loadingWrapper(
      () => api.post(`/api/v1/teams/${teamId}/select_team`)
    ) as unknown as TeamType
  }  
  
  const inviteUser = async (teamId, user) => {
    return await loadingWrapper(
      () => api.post(`/api/v1/teams/${teamId}/invite_user`, {
        user: user
      })
    )
  }  

  const deleteImage = async (teamId) => {
    return await loadingWrapper(
      () => api.post(`/api/v1/teams/${teamId}/delete_image`)
    )
  }  

	return {
		loading,
		delayedLoading,		
		errors,
		team,
		teams,    
		findTeam,
		findTeams,    
		updateTeam,
		createTeam,
		deleteTeam,
    selectTeam,
		setTeam,
    
    user,
    setUser,
    inviteUser,
    deleteImage,
		handleChange,
		handleChangePage,
		reloadTeams,
		query,
		setQuery,
		page,
		numPages,
		perPage,
		totalCount,
		sortBy,
		sortDirection,
		handleSort,
		loadMore,
		loadingWrapper,
		paginate,   
    removeAttachment 
	}
}

export default useTeams
