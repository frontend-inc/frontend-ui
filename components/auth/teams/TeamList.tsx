import React, { useState, useEffect } from 'react'
import { useAuth } from 'frontend-js'
import { Box, Button, List } from '@mui/material'
import {
  TeamAvatar,
  SelectableListItem,  
  TeamForm,
  Placeholder,
  AlertModal
} from '../../../components'
import { useTeams } from '../../../hooks'

const TeamList: React.FC = (props) => {    

  const {     
    delayedLoading: loading,
    errors,
    team,
    setTeam,
    updateTeam,
    createTeam,
    deleteTeam,
    teams, 
    findTeams,
    handleChange,
    reloadTeams,
    deleteImage
  } = useTeams()

  const { currentUser, fetchMe } = useAuth()
  const { selectTeam } = useTeams()

  const [isEditing, setIsEditing] = useState(false)
  const [openDeleteModal, setOpenDeleteModal] = useState(false)
  const [activeTeamId, setActiveTeamId] = useState(-1)

  const handleAddTeamClick = () => {
    setTeam({})
    setIsEditing(true)
  }

  const handleEditClick = (team) => {
    setTeam(team)
    setIsEditing(true)
  }

  const handleDelete = async () => {
    let resp = await deleteTeam(team?.id)    
    setOpenDeleteModal(false)
    reloadTeams()    
  }

  const handleSubmit = async () => {
    let resp 
    if(team?.id){
      resp = await updateTeam(team)
    }else{
      resp = await createTeam(team)
    }
    if(resp?.id){
      setIsEditing(false)
      reloadTeams()
    }
  }

  const handleDeleteImage = async () => {
    let resp = await deleteImage(team?.id)
    if(resp?.id){
      setTeam(resp)
    }
    findTeams()
  }

  const handleDeleteClick = (team) => {
    setTeam(team)
    setOpenDeleteModal(true)
  }

  const handleClick = async (team) => {
    let resp = await selectTeam(team.id)         
    //@ts-ignore
    if(resp?.team_id){
      //@ts-ignore
      setActiveTeamId(resp?.team_id)
      fetchMe()
    }    
  }

  useEffect(() => {    
    if(currentUser?.id){
      setActiveTeamId(currentUser?.team_id)
      findTeams()    
    }
  }, [currentUser?.id])

  return(
    <>   
    { !isEditing ? (
     <>
     <List>
      { teams?.map((team) => {
        const selected = team?.id == activeTeamId
        return(                  
        <SelectableListItem      
          key={team.id}
          selected={selected}
          avatar={ 
            <TeamAvatar team={team } />
          }
          title={team.name}          
          handleClick={() => handleClick(team)}
          handleEdit={selected ? () => handleEditClick(team): undefined}
          handleDelete={selected ? () => handleDeleteClick(team): undefined}
        />
      )})}
    </List>
    { !teams?.length && (
      <Placeholder 
        icon='Users'
        title="No Teams"
        description="Add a team to get started"        
      />
    )}
    <Box sx={ sx.actions }>
      <Button 
        variant="contained" 
        onClick={handleAddTeamClick}
      >
        Add Team
      </Button>
    </Box>
    </>
    ):(
      <TeamForm 
        loading={loading}
        errors={errors}
        team={team}
        handleChange={ handleChange }
        handleSubmit={ handleSubmit }
        handleCancel={() => setIsEditing(false)}
        handleSuccess={() => setIsEditing(false)}
        handleDeleteImage={handleDeleteImage}
      />
    )}    
    <AlertModal 
      open={openDeleteModal}
      title="Delete Team"
      description="Are you sure you want to delete this team?"
      handleConfirm={handleDelete}
      handleClose={() => setOpenDeleteModal(false)}
    />
  </>
  )
}

export default TeamList

const sx = {
  actions: {
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-end',    
  }
}