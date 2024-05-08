import React, { useState } from 'react'
import { useApi, useResource } from 'frontend-js'

const useTeams = () => {
	  
	const { api } = useApi()
  const [user, setUser] = useState({})
  const [users, setUsers] = useState([])
  const [teamUsers, setTeamUsers] = useState([])

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
  } = useResource({
    name: 'team',
    url: '/api/v1/teams'
  })

  const selectTeam = async (teamId) => {
    return await loadingWrapper(
      () => api.post(`/api/v1/teams/${teamId}/select_team`)
    )
  }  
  
  const findUsers = async (teamId) => {
    let resp = await loadingWrapper(
      () => api.get(`/api/v1/teams/${teamId}/users`)
    )  
    if(resp){
      setUsers(resp)
    }
  }  

  const findTeamUsers = async (teamId) => {
    let resp = await loadingWrapper(
      () => api.get(`/api/v1/teams/${teamId}/team_users`)
    )  
    if(resp){
      setTeamUsers(resp)
    }
  }  

  const inviteUser = async (teamId, user) => {
    return await loadingWrapper(
      () => api.post(`/api/v1/teams/${teamId}/invite_user`, {
        user: user
      })
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
    users,
    findUsers, 
    teamUsers,
    findTeamUsers,   
    inviteUser,

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
	}
}

export default useTeams
