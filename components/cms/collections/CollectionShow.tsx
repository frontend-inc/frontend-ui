'use client'

import React from 'react'
import { 
  CommentList, 
  Drawer, 
  DisplayFields,
  SocialButtons
} from '../..'
import { useResourceContext } from 'frontend-js'
import { ButtonType, FormFieldType, ShowFieldType } from '../../../types'

export type ShowModalProps = {
	handle?: string
	enableBorder?: boolean
	enableOverlay?: boolean
	buttons: ButtonType[]
	displayFields: ShowFieldType[]
	fields?: FormFieldType[]
	fieldName?: string
	enableFavorites?: boolean
	enableLikes?: boolean
	enableSharing?: boolean
	enableComments?: boolean
}

const ShowModal: React.FC<ShowModalProps> = (props) => {
	const { openShow, setOpenShow, resource, url } = useResourceContext()

	const {
		buttons = [],
		displayFields = [],
		enableComments,
		enableLikes,
		enableFavorites,
		enableSharing,
	} = props || {}

	if (!resource) return null
	return (
		<Drawer
			disablePadding
			open={openShow}
			handleClose={() => setOpenShow(false)}
			title={resource?.title}
		>
      <div className="flex flex-col space-y-6 pb-[40px] w-full">
        <SocialButtons
          size="large"
          justifyContent={'center'}
          resource={resource}
          enableLikes={enableLikes}
          enableFavorites={enableFavorites}
          enableSharing={enableSharing}
        />
        {displayFields?.length > 0 && (
          <DisplayFields
            fields={displayFields}
            resource={resource}
          />
        )}  
        {enableComments && (
          <div className="px-2">
            <CommentList url={url} handle={resource?.handle} />
          </div>
        )}
      </div>
		</Drawer>
	)
}

export default ShowModal
