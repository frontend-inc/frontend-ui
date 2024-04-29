import React from 'react'
import { ActionType, DocumentType, FieldType } from '../../../types'
import { AuthRequired, Show } from '../../../components'

export type ProfileProps = {
	displayFields: FieldType[]
  fields: FieldType[]
	url: string
	actions?: ActionType[]
	resource: DocumentType
  enableBorder?: boolean
  enableEdit?: boolean
}

const Profile: React.FC<ProfileProps> = (props) => {
	const { url, fields, displayFields, enableBorder, enableEdit, actions, resource } = props || {}
	return (
    <AuthRequired>
      <Show 
        style='person'
        url={url}
        resource={resource}
        actions={actions}
        fields={fields}        
        displayFields={displayFields}
        enableBorder={enableBorder}
        enableEdit={enableEdit}
      />
    </AuthRequired> 
	)
}

export default Profile

const sx = {
	root: {
		width: '100%',
	},
}
