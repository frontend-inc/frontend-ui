import React from 'react'
import { List, Stack } from '@mui/material'
import { Autosuggest, UserListItem } from '../../../components'
import { TeamUserType } from '../../../types'
import { USER_ROLES } from '../../../constants'

type TeamUserFormProps = {
	teamUser: TeamUserType
	errors: Record<string, any>
	handleChange: (ev: any) => void
}

const TeamUserForm: React.FC<TeamUserFormProps> = (props) => {
	const {    
		errors,
		teamUser,
		handleChange,    
	} = props || {}

	return (
		<Stack spacing={1.5}>
      <List dense disablePadding>
        <UserListItem 
          selected
          user={ teamUser?.user }
          handleEdit={() => null}
          handleDelete={() => null}
        />         
      </List>
      <Autosuggest 
        errors={errors}
        name="role"
        label="Select role"
        value={teamUser?.role}
        placeholder="Select role"
        options={USER_ROLES}
        handleChange={handleChange}
      />			
		</Stack>
	)
}

export default TeamUserForm
