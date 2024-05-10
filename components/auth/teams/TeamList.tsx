import React, { useState, useEffect } from 'react'
import { useAuth } from 'frontend-js'
import { List } from '@mui/material'
import {
  TeamAvatar,
  SelectableListItem,  
  TeamForm
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
    teams, 
    findTeams,
    handleChange,
    reloadTeams,
    deleteImage
  } = useTeams()

  const { currentUser, fetchMe } = useAuth()
  const { selectTeam } = useTeams()

  const [isEditing, setIsEditing] = useState(false)
  const [activeTeamId, setActiveTeamId] = useState(-1)

  const handleEditClick = (team) => {
    setTeam(team)
    setIsEditing(true)
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
        />
      )})}
    </List>
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
  </>
  )
}

export default TeamList