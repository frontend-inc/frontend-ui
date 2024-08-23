import React from 'react'
import { Label, ResourceListItem } from '../../../components'

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

  console.log("ZAP", zap)

	return (
		<ResourceListItem
			enableBorder
			sortable={sortable}
			icon={zap.zap_type === 'email' ? 'Mail' : 'Webhook'}
			color="primary.main"
      primary={ zap?.zap_type }
			secondary={ zap?.url || zap?.email?.name }			
			secondaryActions={<Label label={zap?.event_type} />}
			handleClick={handleClick}
			handleEdit={handleEdit}
			handleDelete={handleDelete}
		/>
	)
}

export default ActionItem
