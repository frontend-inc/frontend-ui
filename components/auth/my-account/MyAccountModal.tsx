import React, { useEffect, useContext } from 'react'
import { AppContext } from '../../../context'
import { useAuth } from 'frontend-js'
import { Modal, MyAccountForm } from '../../../components'


const MyAccount: React.FC = () => {

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
    logout 
	} = useAuth()

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

  if(!currentUser) return null;
	return (		
    <Modal 
      open={myAccountOpen}
      handleClose={() => setMyAccountOpen(false)}
      title={
        currentUser?.id ? 
          `${currentUser?.first_name} ${currentUser?.last_name}` : 
          'My Account'
      }
    >
      <MyAccountForm
        loading={delayedLoading}
        user={user}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        handleDeleteAvatar={handleDeleteAvatar}
        handleLogout={ handleLogout }
      />
    </Modal>					
	)
}

export default MyAccount
