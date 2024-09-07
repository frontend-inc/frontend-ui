import React from 'react'
import {
	ToolbarModal,
	ToolbarUpdateButton,
	ToolbarAddToListButton,
	ToolbarDeleteButton,
} from '../..'
import { ToolbarButtonType } from '../../../types'

type ProductToolbarModalProps = {
	enableDelete?: boolean
	enableAddToList?: boolean
	toolbarButtons?: ToolbarButtonType[]
}

const ProductToolbar: React.FC<ProductToolbarModalProps> = (props) => {
	const { enableDelete, enableAddToList, toolbarButtons = [] } = props || {}

	return (
		<ToolbarModal>
			{enableAddToList && (
				<ToolbarAddToListButton
					query={{
						current_user: true,
					}}
				/>
			)}
			{enableDelete && <ToolbarDeleteButton />}
			{toolbarButtons?.map((button, index) => (
				<ToolbarUpdateButton
					key={index}
					icon={button?.icon}
					buttonText={button?.buttonText}
					fields={[
						{
							label: button.label,
							name: button.name,
							variant: button.variant,
						},
					]}
				/>
			))}
		</ToolbarModal>
	)
}

export default ProductToolbar
