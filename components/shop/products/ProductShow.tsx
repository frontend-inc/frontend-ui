import React from 'react'
import { Modal, ProductDetails } from '../..'
import { useResourceContext } from 'frontend-js'
import { ButtonType, FormFieldType, DisplayFieldType } from '../../../types'

export type ShowModalProps = {
	handle?: string
	enableBorder?: boolean
	enableOverlay?: boolean
	buttons: ButtonType[]
	displayFields: DisplayFieldType[]
	fields?: FormFieldType[]
	fieldName?: string
	enableEdit?: boolean
	enableCreate?: boolean
	enableFavorites?: boolean
	enableLikes?: boolean
	enableSharing?: boolean
	enableRatings?: boolean
	enableAddToList?: boolean
	enableUsers?: boolean
	handleEdit?: () => void
}

const ShowModal: React.FC<ShowModalProps> = (props) => {
	const { openShow, setOpenShow, resource, url } = useResourceContext()

	const {
		buttons = [],
		displayFields = [],
		enableRatings,
		enableLikes,
		enableFavorites,
		enableSharing,
		enableAddToList,
		enableEdit,
		handleEdit,
	} = props || {}

	if (!resource) return null
	return (
		<Modal
			disablePadding
			open={openShow}
			handleClose={() => setOpenShow(false)}
      maxWidth='md'
			title={resource?.title}
		>
			<ProductDetails
				product={resource}
				enableEdit={enableEdit}
				buttons={buttons}
				displayFields={displayFields}
				enableRatings={enableRatings}
				handleEdit={handleEdit}
				enableLikes={enableLikes}
				enableFavorites={enableFavorites}
				enableAddToList={enableAddToList}
				enableSharing={enableSharing}
				slots={{
					image: {
						disableBorderRadius: true,
					},
				}}
			/>
		</Modal>
	)
}

export default ShowModal
