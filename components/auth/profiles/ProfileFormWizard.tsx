import React from 'react'
import { FormWizard, AuthRequired } from '../../../components'
import { FormWizardProps } from '../../../components/cms/forms/FormWizard'

export type ProfileFormWizardProps = FormWizardProps & {	
	resource: any	
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
