import React, { useEffect, useState } from 'react'
import { Label, ResourceListItem } from '../../../components'
import { FieldIcon } from '../..'
import { IconButton, Tooltip, Box } from '@mui/material'
import {
	EditNote,
	FilterAltOutlined,
	FilterAltOffOutlined,
	SortByAlpha,
	TableRowsOutlined,
	ManageSearch,
} from '@mui/icons-material'
import { useResource } from 'frontend-js'

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
			secondary={field?.name}
			secondaryAction={
				<>
					{field.column && !field.array && (
						<Tooltip title="Search filter field">
							<IconButton onClick={() => handleUpdateField('filter_field')}>
								{field.filter_field ? (
									<FilterAltOutlined color="primary" />
								) : (
									<FilterAltOffOutlined />
								)}
							</IconButton>
						</Tooltip>
					)}
					{field.column && !field.array && (
						<Tooltip title="Search sort field">
							<IconButton onClick={() => handleUpdateField('sort_field')}>
								{field.sort_field ? (
									<SortByAlpha color="primary" />
								) : (
									<SortByAlpha />
								)}
							</IconButton>
						</Tooltip>
					)}
					{(field.column || field.attachment) && field?.name != 'title' && (
						<Tooltip title="Display in search results">
							<IconButton onClick={() => handleUpdateField('display_field')}>
								{field.display_field ? (
									<ManageSearch color="primary" />
								) : (
									<ManageSearch />
								)}
							</IconButton>
						</Tooltip>
					)}
					<Tooltip title="Display in forms">
						<IconButton onClick={() => handleUpdateField('form_field')}>
							{field.form_field ? <EditNote color="primary" /> : <EditNote />}
						</IconButton>
					</Tooltip>
					{(field.column || field.attachment) && (
						<Tooltip title="Display as table header">
							<IconButton onClick={() => handleUpdateField('table_header')}>
								{field.table_header ? (
									<TableRowsOutlined fontSize="small" color="primary" />
								) : (
									<TableRowsOutlined fontSize="small" />
								)}
							</IconButton>
						</Tooltip>
					)}
					<Label label={field?.variant} />
				</>
			}
			handleClick={handleClick}
			handleEdit={handleEdit}
			handleDelete={handleDelete}
		/>
	)
}

export default AdminFieldItem
