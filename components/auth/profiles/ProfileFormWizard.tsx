import React from 'react'
import { FormWizard, AuthRequired, FormWizard } from '../../../components'

export type ProfileFormWizardProps = {
	buttonText?: string
	variant?: 'contained' | 'outlined' | 'text'
	fields: any[]
	resource: any
	children?: React.ReactElement[]
}

const ProfileForm: React.FC<ProfileFormWizardProps> = (props) => {
  const { resource, buttonText, fields, ...rest } = props 
	return (
    <AuthRequired>
      <FormWizard 
        { ...rest }
        url="/api/v1/cms/profiles"        
        fields={fields}
        buttonText={buttonText}        
        handle={resource?.handle}
        onSuccessMessage='Profile updated successfully!'
      />
    </AuthRequired>
	)
}

export default ProfileForm

const sx = {
	root: {
		width: '100%',
	},
	button: {
		mt: 2,
	},
}
