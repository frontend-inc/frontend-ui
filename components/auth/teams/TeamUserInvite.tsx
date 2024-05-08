import React, { useState, useEffect } from 'react'
import { UserType } from 'frontend-js'
import { useAuth } from 'frontend-js'
import { useAlerts } from '../../../hooks'
import { useTeams } from '../../../hooks'
import TeamUserInviteForm from './TeamUserInviteForm'
import { Stack, Button } from '@mui/material'
import { IconLoading } from '../../../components'

type TeamUserInviteProps = {
  handleSuccess: () => void
  handleCancel: () => void
}

const TeamUserInvite: React.FC<TeamUserInviteProps> = (props) => {    
  
  const { handleSuccess, handleCancel } = props || {}
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
      <TeamUserInviteForm 
        errors={ errors }
        user={ user }
        handleChange={ handleChange }
      />
      <Stack sx={ sx.actions } direction={'row'} spacing={1}>
        <Button
          color="secondary"
          onClick={handleCancel}
          variant="contained"
          startIcon={<IconLoading loading={loading} />}
        >
          Cancel
        </Button>
        <Button
          color="primary"
          onClick={handleSubmit}
          variant="contained"
          startIcon={<IconLoading loading={loading} />}
        >
          Send Invite
        </Button>
      </Stack>
    </Stack>
  )
}

export default TeamUserInvite 

const sx = {
  actions: {
    width: '100%',
    justifyContent: 'flex-end'
  }
}