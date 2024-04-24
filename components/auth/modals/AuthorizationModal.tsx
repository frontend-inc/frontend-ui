import React, { useEffect, useContext } from 'react'
import { AppContext } from '../../../context'
import { useAuthorized, usePublicApp } from '../../../hooks'
import { Modal, AuthorizationForm } from '../../../components'

type AuthorizationModalProps = {
	app: any
}

const AuthorizationModal: React.FC<AuthorizationModalProps> = (props) => {
	const { app } = props
	const { loading, authorize } = usePublicApp()

	const { authorizationOpen, setAuthorizationOpen } = useContext(AppContext)

	const handleSubmit = async () => {
		let resp = await authorize(app?.id)
    //@ts-ignore 
		if (resp?.id) {
			setAuthorized(true)
			setAuthorizationOpen(false)
		}
	}

	const { authorized, setAuthorized } = useAuthorized({
		appId: app?.id,
	})

	useEffect(() => {
		setAuthorizationOpen(!authorized)
	}, [authorized])

	return (
		<Modal
			open={authorizationOpen}
			handleClose={() => setAuthorizationOpen(false)}
		>
			<AuthorizationForm
				loading={loading}
				app={app}
				handleSubmit={handleSubmit}
			/>
		</Modal>
	)
}

export default AuthorizationModal
