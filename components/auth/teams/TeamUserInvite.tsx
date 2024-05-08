import React, { useState, useEffect } from 'react'
import { UserType } from 'frontend-js'
import { useAuth } from 'frontend-js'
import { useAlerts } from '../../../hooks'
import { useTeams } from '../../../hooks'
import TeamUserForm from './TeamUserForm'
import { Stack, Button } from '@mui/material'
import { IconLoading } from '../../../components'

type TeamUserInviteProps = {
  handleSuccess: () => void
}

const TeamUserInvite: React.FC<TeamUserInviteProps> = (props) => {    
  
  const { handleSuccess } = props || {}
  const { showAlertSuccess } = useAlerts()

  const { currentUser } = useAuth()

  const { 
    loading,
    errors, 
    user,
    setUser, 
    inviteUser 
  } = useTeams() 

  const handleChange = (e) => {
    setUser({ 
      ...user, 
      [e.target.name]: e.target.value 
    })
  }

  const handleSubmit = async () => { 
    let resp = await inviteUser(currentUser?.team_id, user)
    if(resp?.id){
      setUser({ username: '', first_name: '', last_name: '', email: '' })
      showAlertSuccess('User invited successfully')      
      handleSuccess()
    }
  }

  return(
    <Stack direction='column' spacing={1.5}>
      <TeamUserForm 
        errors={ errors }
        user={ user }
        handleChange={ handleChange }
      />
      <Button
				fullWidth
				color="primary"
				onClick={handleSubmit}
				variant="contained"
				startIcon={<IconLoading loading={loading} />}
			>
				Send Invite
			</Button>
    </Stack>
  )
}

export default TeamUserInvite 