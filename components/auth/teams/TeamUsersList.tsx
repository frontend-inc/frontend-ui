import React, { useState, useEffect } from 'react'
import { useAuth } from 'frontend-js'
import { Stack, Box, Button, List } from '@mui/material'
import {
  AlertModal,
  UserListItem  
} from '../../../components'
import {  TeamUserType } from '../../../types'
import { useTeamUsers } from '../../../hooks'
import TeamUserForm from './TeamUserForm'

type TeamListProps = {
  handleAddUser: () => void
}

const TeamUsersList: React.FC<TeamListProps> = (props) => {    

  const { handleAddUser } = props || {}

  const { 
    loading,   
    errors,  
    teamUser,
    setTeamUser,
    handleChange,
    updateTeamUser,
    deleteTeamUser,
    teamUsers,
    findTeamUsers 
  } = useTeamUsers()

  const { currentUser } = useAuth()  

  
  const [isEditing, setIsEditing] = useState(false)
  const [openDeleteModal, setOpenDeleteModal] = useState(false)

  const handleClick = (teamUser: TeamUserType) => {
  }

  const handleEdit = (teamUser: TeamUserType) => {
    setTeamUser(teamUser)
    setIsEditing(true)
  }

  const handleDeleteClick = (teamUser: TeamUserType) => {
    setTeamUser(teamUser)
    setOpenDeleteModal(true)
  }

  const handleDelete = async () => {
    let resp = await deleteTeamUser(teamUser?.id)
    if(resp){
      await findTeamUsers()
      setOpenDeleteModal(false)
    }
  }

  const handleSubmit = async () => {
    const updated = await updateTeamUser(teamUser)
    if(updated?.id){
      findTeamUsers(currentUser?.team_id)
      setIsEditing(false)
    }
  }

  useEffect(() => {   
    if(currentUser?.team_id){      
      findTeamUsers(currentUser?.team_id)    
    }
  }, [currentUser?.team_id])

  return(
    <>
    { !isEditing ? (
      <>
        <List dense>
          { teamUsers?.map((teamUser: TeamUserType) => (
            <UserListItem      
              key={teamUser.id}  
              isAdmin={ currentUser?.team_role === 'admin' }        
              user={{ 
                ...teamUser?.user,
                role: teamUser?.role
              }}
              handleClick={() => handleClick(teamUser)}
              handleEdit={() => handleEdit(teamUser)}
              handleDelete={() => handleDeleteClick(teamUser)}
            />
          ))}
        </List>
        <Box sx={ sx.actions }>
          <Button         
            onClick={handleAddUser}
            variant='contained'
            color="primary"
          >
            Add User
          </Button>
        </Box>
        <AlertModal
          loading={loading}
          open={openDeleteModal}
          title="Remove User"
          description={`Are you sure you want to remove ${teamUser?.user?.full_name}?`}
          handleClose={() => setOpenDeleteModal(false)}
          handleConfirm={handleDelete}
        />
      </>    
    ):(
      <Stack direction="column" spacing={1.5}>
        <TeamUserForm 
          //@ts-ignore 
          teamUser={ teamUser }
          handleChange={ handleChange }
          errors={ errors }
        />
        <Stack sx={ sx.actions } direction="row" spacing={1}>
          <Button 
            variant="contained" 
            color="secondary" 
            onClick={ () => setIsEditing(false) }
          >
            Cancel
          </Button>
          <Button 
            variant="contained" 
            color="primary" 
            onClick={ handleSubmit }
          >
            Update 
          </Button>
        </Stack>
      </Stack> 
    )}
    </>
  )
}

export default TeamUsersList

const sx = {
  actions: {
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-end'
  }
}