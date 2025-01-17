'use client'

import React from 'react'
import { SocialLinks, FieldString, FieldText } from '../../../components'

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
	const { title, description, label, socialLinks = [] } = props
	return (
		<div className="flex flex-col space-y-2">
			<div className="flex flex-col">
				<FieldString
					value={label}
					variant="caption"
					className="text-foreground/70"
				/>
				<FieldString value={title} />
				<SocialLinks links={socialLinks} />
				<FieldText
					value={description}
					variant="body2"
					className="text-foreground/70"
				/>
			</div>
		</div>
	)
}

export default ProfileInfo
