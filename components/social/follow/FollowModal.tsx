import React, { useState } from 'react'
import { Box, Tabs, Tab } from '@mui/material'
import { Modal, Resources } from '../..'
import { UserType } from '../../../types'
import FollowUser from '../../users/cards/UserListItem'

type FollowModalProps = {
	open: boolean
	handleClose: () => void
	user: UserType
}

const FollowModal: React.FC<FollowModalProps> = (props) => {
	const { open, handleClose, user } = props || {}

	const [currentTab, setCurrentTab] = useState(0)
	const handleTabChange = (event, newValue) => {
		setCurrentTab(newValue)
	}

	return (
		<Modal open={open} handleClose={handleClose} title={`@${user?.username}`}>
			<Tabs variant="fullWidth" onChange={handleTabChange} value={currentTab}>
				<Tab label="Followers" value={0} />
				<Tab label="Following" value={1} />
			</Tabs>
			<Box sx={sx.container}>
				{currentTab == 0 && (
					<Resources
						name="user"
						url={`/api/v1/cms/users/${user?.username}/followers`}
						enableSearch
						component={FollowUser}
					/>
				)}
				{currentTab == 1 && (
					<Resources
						name="user"
						url={`/api/v1/cms/users/${user?.username}/following`}
						enableSearch
						component={FollowUser}
					/>
				)}
			</Box>
		</Modal>
	)
}

export default FollowModal

const sx = {
	container: {
		py: 2,
		minHeight: 200,
	},
}
