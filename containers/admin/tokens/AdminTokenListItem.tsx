'use client'

import React from 'react'
import { useToast } from '../../../hooks'
import { ResourceListItem } from '../../../components'
import copy from 'copy-to-clipboard'
import { truncate } from '../../../helpers'
import { Badge } from 'frontend-shadcn'

type AdminTokenListItemProps = {
	resource: any
	handleEdit: (token: any) => void
	handleDelete: (token: any) => void
}

const AdminTokenListItem: React.FC<AdminTokenListItemProps> = (props) => {
	const { resource: token, handleEdit, handleDelete } = props

	const { showAlertSuccess } = useToast()

	const handleCopyToken = () => {
		copy(token.api_key)
		showAlertSuccess(`${token.name} API Key copied to clipboard`)
	}

	return (
		<ResourceListItem
			enableBorder
			disableImage
			primary={token?.name}
			secondary={truncate(token?.api_key, 20)}
			icon="Key"
			color={token?.internal ? 'bg-purple-500' : 'bg-teal-500'}
			handleClick={handleCopyToken}
			handleEdit={!token?.internal ? () => handleEdit(token) : undefined}
			handleDelete={!token?.internal ? () => handleDelete(token) : undefined}
			secondaryAction={
				<>
					<Badge>{token?.admin ? 'Admin' : 'Public'}</Badge>
					{token.internal && <Badge>system</Badge>}
				</>
			}
		/>
	)
}

export default AdminTokenListItem
