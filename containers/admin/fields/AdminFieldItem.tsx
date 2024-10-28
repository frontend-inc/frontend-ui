'use client'

import React, { useEffect } from 'react'
import { Label, ResourceListItem } from '../../../components'
import { FieldIcon } from '../..'
import { Typography, IconButton } from '../../../components/core'
import { FilterIcon, SortAsc, Search } from 'lucide-react'
import { useResource } from 'frontend-js'
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from 'frontend-shadcn'

type AdminFieldItemProps = {
	url: string
	resource: any
	sortable?: boolean
	handleClick: () => void
	handleEdit: () => void
	handleDelete: () => void
	handleReload: () => void
}

const AdminFieldItem: React.FC<AdminFieldItemProps> = (props) => {
	const {
		url,
		resource,
		sortable,
		handleClick,
		handleEdit,
		handleDelete,
		handleReload,
	} = props

	const {
		loading,
		resource: field,
		setResource: setField,
		update: updateField,
	} = useResource({
		url,
		name: 'field',
	})

	const handleUpdateField = async (name: string) => {
		let newField = {
			...field,
			[name]: field[name] == true ? false : true,
		}
		setField(newField)
		await updateField(newField)
	}

	useEffect(() => {
		setField(resource)
	}, [resource])

	return (
		<ResourceListItem
			enableBorder
			sortable={sortable}
			avatar={<FieldIcon variant={field?.variant} />}
			primary={field?.label}
			secondaryAction={
        <Label label={field.variant} />
			}
			handleClick={handleClick}
			handleEdit={handleEdit}
			handleDelete={handleDelete}
		/>
	)
}

export default AdminFieldItem
