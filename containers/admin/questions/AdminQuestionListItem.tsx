'use client'

import React from 'react'
import { ResourceListItem } from '../../../components'
import { ResourceItemProps } from '../../../components/cms/resources/ResourceItem'
import QuestionIcon from './QuestionIcon'

const AdminQuestionItem: React.FC<ResourceItemProps> = (props) => {
	const {
		resource: question,
		sortable,
		selectable,
		selected,
		handleClick,
		handleEdit,
		handleDelete,
		handleSelect,
		...rest
	} = props

	return (
		<ResourceListItem
      disableImage
			sortable={sortable}
			selectable={selectable}
			selected={selected}
			avatar={<QuestionIcon variant={question?.variant} />}
			primary={question?.title}
			handleEdit={handleEdit}
			handleDelete={handleDelete}
			handleClick={handleClick}
			handleSelect={handleSelect}
			{...rest}
		/>
	)
}

export default AdminQuestionItem