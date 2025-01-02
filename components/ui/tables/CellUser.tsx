'use client'

import React from 'react'
import { Button } from '@nextui-org/react'
import { UserType } from 'frontend-js'
import { UserAvatar } from '../../../components'

type CellUserProps = {
	children: string
	handleClick?: () => void
	value?: UserType
}

const CellUser: React.FC<CellUserProps> = (props) => {
	const { value: user, handleClick } = props
	if (!user?.id) return null
	return (
		<div className="w-full flex flex-row justify-start">
			<Button
				size="sm"
				variant="ghost"
				onPress={handleClick}
				startContent={<UserAvatar user={user} />}
			>
				{user?.first_name} {user?.last_name}
			</Button>
		</div>
	)
}

export default CellUser
