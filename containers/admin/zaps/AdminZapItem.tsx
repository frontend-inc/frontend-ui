import React from 'react'
import { Label, ResourceListItem } from 'frontend-ui/components'

type ActionItemProps = {
	resource: any
	sortable?: boolean
	handleClick: () => void
	handleEdit: () => void
	handleDelete: () => void
}

const ActionItem: React.FC<ActionItemProps> = (props) => {
	const {
		resource: zap,
		sortable,
		handleClick,
		handleEdit,
		handleDelete,
	} = props

	return (
		<ResourceListItem
			enableBorder
			sortable={sortable}
			icon={zap.zap_type === 'email' ? 'Mail' : 'Webhook'}
			color="primary.main"
			resource={{
				title: zap?.zap_type,
				...zap,
			}}
			displayFields={[
				{
					label: 'URL',
					variant: 'string',
					name: 'url',
				},
				{
					label: 'Email',
					variant: 'string',
					name: 'email.name',
				},
			]}
			secondaryActions={<Label label={zap?.event_type} />}
			handleClick={handleClick}
			handleEdit={handleEdit}
			handleDelete={handleDelete}
		/>
	)
}

export default ActionItem
