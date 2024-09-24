import React from 'react'
import {
	ResourceListItem,
} from '../../../../components'
import { ResourceItemProps } from '../../../../components/cms/resources/ResourceItem'

const AdminQuestionItem: React.FC<ResourceItemProps> = (props) => {
	const {
		resource: question,
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
			selectable={selectable}
			selected={selected}
			image={question?.image?.url}
			primary={question?.title}
			handleClick={handleClick}
      handleDelete={handleDelete}
			handleSelect={handleSelect}
			{...rest}
		/>
	)
}

export default AdminQuestionItem
