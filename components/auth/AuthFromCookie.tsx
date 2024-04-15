import { useEffect } from 'react'
import { useAuth } from 'frontend-js'
import { getCookie } from 'cookies-next'

const AuthFromCookie: React.FC = () => {
	const { authCookie, fetchMe, currentUser, authenticateFromToken } = useAuth()

	useEffect(() => {
		let authToken = getCookie(authCookie)
		if (authToken) {
			authenticateFromToken(String(authToken))
			if (!currentUser) {
				fetchMe()
			}
		}
	}, [])

	return null
}

export default AuthFromCookie
