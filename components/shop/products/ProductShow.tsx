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
	fieldName?: string
	enableFavorites?: boolean
	enableLikes?: boolean
	enableSharing?: boolean
	enableRatings?: boolean
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
	} = props || {}

	if (!resource) return null
	return (
		<Modal
			open={openShow}
			handleClose={() => setOpenShow(false)}
			maxWidth="md"
			title={resource?.title}
		>
			<ProductDetails
				product={resource}
				buttons={buttons}
				displayFields={displayFields}
				enableRatings={enableRatings}
				enableLikes={enableLikes}
				enableFavorites={enableFavorites}
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
