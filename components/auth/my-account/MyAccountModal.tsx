import React, { useEffect, useContext, useState } from 'react'
import { AppContext } from '../../../context'
import { useAuth } from 'frontend-js'
import { Modal, MyAccountForm } from '../../../components'
import { TeamList } from '../../../components'
import MyAccountTabs from './MyAccountTabs'
import { Box } from '@mui/material'

type MyAccountModalProps = {
  enableTeams?: boolean
}

const MyAccountModal: React.FC<MyAccountModalProps> = (props) => {
  const { enableTeams } = props || {}
	const { myAccountOpen, setMyAccountOpen } = useContext(AppContext)

	const {
		loading,
		delayedLoading,
		user,
		setUser,
		currentUser,
		updateMe,
		handleChange,
		fetchMe,
		deleteAvatar,
		logout,
	} = useAuth()

  const [currentTab, setCurrentTab] = useState(0)
  const handleTabChange = (ev, newValue) => {
    setCurrentTab(newValue)
  }

	const handleLogout = async () => {
		await logout()
		setMyAccountOpen(false)
	}

	const handleDeleteAvatar = async () => {
		await deleteAvatar()
	}

	const handleSubmit = async () => {
		await updateMe(user)
	}

	useEffect(() => {
		if (!currentUser) {
			fetchMe()
		} else {
			setUser(currentUser)
		}
	}, [currentUser])

	if (!currentUser) return null
	return (
		<Modal
      disablePadding
			open={myAccountOpen}
			handleClose={() => setMyAccountOpen(false)}
			title={
				currentUser?.id
					? `${currentUser?.first_name} ${currentUser?.last_name}`
					: 'My Account'
			}
		>
      { enableTeams && (
        <MyAccountTabs 
          tab={ currentTab }
          handleChange={ handleTabChange }
        />
      )}
      <Box sx={ sx.content }>
      { currentTab == 0 && (
        <MyAccountForm
          loading={delayedLoading}
          user={user}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          handleDeleteAvatar={handleDeleteAvatar}
          handleLogout={handleLogout}
        />
      )}
      { currentTab == 1 && (
        <TeamList /> 
      )}
      </Box>
		</Modal>
	)
}

export default MyAccountModal

const sx = {
  content: {
    p: 2
  }
}