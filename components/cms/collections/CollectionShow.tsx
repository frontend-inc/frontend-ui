import React from 'react'
import { Box } from '@mui/material'
import { CommentList, Drawer, ShowItem } from '../..'
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
	enablePayments?: boolean
	handleEdit?: () => void
	enableComments?: boolean
}

const ShowModal: React.FC<ShowModalProps> = (props) => {
	const { openShow, setOpenShow, resource, url } = useResourceContext()

	const {
		buttons = [],
		displayFields = [],
		enableComments,
		enableRatings,
		enableLikes,
		enableFavorites,
		enableSharing,
		enablePayments,
    enableAddToList,
		enableEdit,
		handleEdit,
	} = props || {}

	if (!resource) return null
	return (
		<Drawer
			disablePadding
			open={openShow}
			handleClose={() => setOpenShow(false)}
			title={resource?.title}
		>
			<ShowItem
				style="snippet"
				resource={resource}
				enableEdit={enableEdit}
				buttons={buttons}
				displayFields={displayFields}
				enableRatings={enableRatings}
				enablePayments={enablePayments}
				handleEdit={handleEdit}        
				enableLikes={enableLikes}
				enableFavorites={enableFavorites}
        enableAddToList={enableAddToList}
				enableSharing={enableSharing}
        slots={{
          image: {
            disableBorderRadius: true,
          }
        }}
			/>
			{enableComments && (
				<Box px={2}>
					<CommentList url={url} handle={resource?.handle} />
				</Box>
			)}
		</Drawer>
	)
}

export default ShowModal
