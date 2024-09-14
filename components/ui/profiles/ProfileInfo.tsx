import React from 'react'
import { Stack } from '@mui/material'
import { SocialLink, FieldString, FieldText } from '../../../components'

type ProfileInfoProps = {
	title: string
	description: string
	label?: string
  socialLinks?: {
    label: string
    value: string
    url: string
  }[]
}

const ProfileInfo: React.FC<ProfileInfoProps> = (props) => {
	const { title, description, label, socialLinks=[] } = props
	return (
		<Stack direction="column" spacing={1}>
			<Stack direction="column">
				<FieldString value={label} variant="caption" color="text.secondary" />
				<FieldString value={title} />
        { socialLinks?.length > 0 && (
        <Stack direction="row" spacing={1}>
          { socialLinks?.map((link, index) => (
            <SocialLink 
              key={index}
              provider={link.value}              
              url={link.url}
            />
          ))}
          </Stack>
        )}
				<FieldText value={description} variant="body2" color="text.secondary" />        
			</Stack>
		</Stack>
	)
}

export default ProfileInfo
