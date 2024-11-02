'use client'

import React from 'react'
import { DetailsProps } from '../../cms/details/Details'
import { AuthGuard, Details } from '../..'
import { useAuth } from 'frontend-js'
import { ShowFieldType } from '../../../types'

export type CurrentUserDetailsProps = DetailsProps & {
	displayFields: ShowFieldType[]
	url: string
	enableBorder?: boolean
}

const CurrentUserDetails: React.FC<CurrentUserDetailsProps> = (props) => {
	const { currentUser } = useAuth()
	return (
		<AuthGuard requireAuth>
			<Details {...props} resource={currentUser} enableBorder />
		</AuthGuard>
	)
}

export default CurrentUserDetails
