import React, { useState, useEffect } from 'react'
import { useAuth } from 'frontend-js'
import { Stack, Box, Button, List } from '@mui/material'
import {
	Placeholder,
	AlertModal,
	Loading,
	MyAccountUserItem,
} from '../../../components'
import { TeamUserType } from '../../../types'
import { useTeamUsers } from '../../../hooks'
import TeamUserForm from './TeamUserForm'

type TeamListProps = {
	handleAddUser: () => void
}

const TeamUsersList: React.FC<TeamListProps> = (props) => {
	const { handleAddUser } = props || {}

	const {
		delayedLoading: loading,
		errors,
		teamUser,
		setTeamUser,
		handleChange,
		updateTeamUser,
		deleteTeamUser,
		teamUsers,
		findTeamUsers,
	} = useTeamUsers()

	const { currentUser } = useAuth()

	const [isEditing, setIsEditing] = useState(false)
	const [openDeleteModal, setOpenDeleteModal] = useState(false)

	const handleClick = (teamUser: TeamUserType) => {}

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
		if (resp) {
			await findTeamUsers()
			setOpenDeleteModal(false)
		}
	}

	const handleSubmit = async () => {
		const updated = await updateTeamUser(teamUser)
		if (updated?.id) {
			findTeamUsers(currentUser?.team_id)
			setIsEditing(false)
		}
	}

	const handleLoadTeamUsers = async () => {
		await findTeamUsers(currentUser?.team_id)
	}

	useEffect(() => {
		if (currentUser?.team_id) {
			handleLoadTeamUsers()
		}
	}, [currentUser?.team_id])

	return (
		<>
			{!isEditing ? (
				<>
					<List dense>
						<Loading loading={loading} />
						{!loading &&
							teamUsers?.map((teamUser) => (
								<MyAccountUserItem
									key={teamUser.id}
									isAdmin={currentUser?.team_role === 'admin'}
									user={{
										...teamUser?.user,
										role: teamUser?.role,
									}}
									handleClick={
										// @ts-ignore
										() => handleClick(teamUser)
									}
									handleEdit={
										// @ts-ignore
										() => handleEdit(teamUser)
									}
									handleDelete={
										// @ts-ignore
										() => handleDeleteClick(teamUser)
									}
								/>
							))}
					</List>
					{!loading && teamUsers?.length == 0 && (
						<Placeholder
							icon="Users"
							title="No Teams"
							description="Add a team to get started"
						/>
					)}
					{currentUser?.team_id && (
						<Box sx={sx.buttons}>
							<Button
								onClick={handleAddUser}
								variant="contained"
								color="primary"
							>
								Add User
							</Button>
						</Box>
					)}
					<AlertModal
						loading={loading}
						open={openDeleteModal}
						title="Remove User"
						description={`Are you sure you want to remove ${teamUser?.user?.name}?`}
						handleClose={() => setOpenDeleteModal(false)}
						handleConfirm={handleDelete}
					/>
				</>
			) : (
				<Stack direction="column" spacing={1.5}>
					<TeamUserForm
						//@ts-ignore
						teamUser={teamUser}
						handleChange={handleChange}
						errors={errors}
					/>
					<Stack sx={sx.buttons} direction="row" spacing={1}>
						<Button
							variant="contained"
							color="secondary"
							onClick={() => setIsEditing(false)}
						>
							Cancel
						</Button>
						<Button variant="contained" color="primary" onClick={handleSubmit}>
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
	buttons: {
		width: '100%',
		display: 'flex',
		justifyContent: 'flex-end',
	},
}
