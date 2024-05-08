import React, { useState } from 'react'
import { useApi, useResource } from 'frontend-js'

const useTeamUsers = () => {

  const {
    loading,
		delayedLoading,
		errors,
		resource: teamUser,
		resources: teamUsers,
		findOne: findTeamUser,
		findMany: findTeamUsers,
		update: updateTeamUser,
		create: createTeamUser,
		destroy: deleteTeamUser,
		setResource: setTeamUser,
		handleChange,
		handleChangePage,
		reloadMany: reloadTeamUsers,
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
    name: 'team_user',
    url: '/api/v1/team_users'
  })


	return {
		loading,
		delayedLoading,		
		errors,
		teamUser,
		teamUsers,    
		findTeamUser,
		findTeamUsers,    
		updateTeamUser,
		createTeamUser,
		deleteTeamUser,
		setTeamUser,        
		handleChange,
		handleChangePage,
		reloadTeamUsers,
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

export default useTeamUsers
