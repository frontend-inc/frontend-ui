import React, { useState, useEffect } from 'react'
import { Stack, Typography, Box, Button } from '@mui/material'
import { InputPropsType } from '../../../types'
import { Plus } from 'lucide-react'
import JsonForm from './json/JsonForm'
import JsonItem from './json/JsonItem'
import { useMenu } from '../../../hooks'
import { SortableList, InputLabel, Drawer } from '../../../components'

type JsonArrayInputProps = InputPropsType & {
	title?: string
	fields: Record<string, any>[]
	name: string
	label?: string
	info?: string
	value: any[]
	handleChange: any
}

const JsonArrayInput: React.FC<JsonArrayInputProps> = (props) => {
	const {
		title,
		name,
		label,
		fields = [],
		value: items = [],
		handleChange,
		info,
	} = props

	const { open, anchorEl, openMenu, closeMenu } = useMenu()
	const [activeItem, setActiveItem] = useState({})
	const [currentIndex, setCurrentIndex] = useState(0)
	const [titleField, setTitleField] = useState('title')

	const buildEmptyItem = (fields) => {
		let emptyItem = {}
		fields.forEach((field) => {
			emptyItem[field.name] = field.default
		})
		return emptyItem || {}
	}

	const handleEditClick = (ev, value, index) => {
		openMenu(ev)
		setActiveItem(value)
		setCurrentIndex(index)
	}

	const handleAddClick = (ev) => {
		setActiveItem(buildEmptyItem(fields))
		setCurrentIndex(-1)
		openMenu(ev)
	}

	const handleSubmit = () => {
		let newItems = [...items]
		let index = currentIndex
		if (index == -1) {
			newItems = [...items, activeItem]
		} else {
			newItems[index] = activeItem
		}
		closeMenu()
		handleChange({
			target: {
				name: name,
				value: newItems,
			},
		})
	}

	const handleRemove = (index: number) => {
		let newValues = [...items]
		newValues = newValues.filter((_, i) => i !== index)
		handleChange({
			target: {
				name: name,
				value: newValues,
			},
		})
	}

	const handleInputChange = (ev) => {
		const { name, value } = ev.target
		setActiveItem({
			...activeItem,
			[name]: value,
		})
	}

	const handleDrop = (sorted) => {
		handleChange({
			target: {
				name: name,
				value: sorted,
			},
		})
	}

	useEffect(() => {
		if (fields?.length > 0) {
			setTitleField(fields?.find((f) => f.titleField)?.name || 'title')
		}
	}, [fields])

	return (
		<Stack direction="column" spacing={0.5} sx={sx.root}>
			<InputLabel label={label} info={info} />
			<SortableList
				droppableId={`json-array-${name}`}
				handleDrop={handleDrop}
				items={items}
				renderItem={(item, index) => (
					<JsonItem
						key={index}
						index={index}
						item={item}
						titleField={titleField}
						handleClick={handleEditClick}
						handleRemove={handleRemove}
					/>
				)}
			/>
			<Box>
				<Button
					color="secondary"
					variant="contained"
					onClick={handleAddClick}
					startIcon={<Plus size={24} />}
				>
					Add
				</Button>
			</Box>
			<Drawer
				title={title}
				open={open}
				handleClose={closeMenu}
				actions={
					<Button
						fullWidth
						variant="contained"
						color="primary"
						onClick={handleSubmit}
					>
						Save
					</Button>
				}
			>
				<JsonForm
					index={currentIndex}
					item={activeItem}
					fields={fields}
					handleChange={handleInputChange}
					direction="column"
				/>
			</Drawer>
		</Stack>
	)
}

export default JsonArrayInput

const sx = {
	root: {
		alignItems: 'flex-start',
	},
	value: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'flex-start',
	},
	ValuesInputs: {
		display: 'flex',
		flexDirection: 'column',
	},
	list: {
		width: '100%',
	},
}
