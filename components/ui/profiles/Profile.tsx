'use client'

import React from 'react'
import { AvatarImage, SocialLink } from '../..'
import { Text } from '../../../components'

export type ProfileProps = {
	image: string
	label?: string
	title: string
	subtitle: string
  description: string
	socialLinks?: {
		provider: string
		url: string
	}[]
}

const Profile: React.FC<ProfileProps> = (props) => {
	const { label, title, subtitle, image, description, socialLinks = [] } = props || {}

	return (
		<div className="w-full flex flex-col items-center justify-center rounded">
			<div className="w-full max-w-screen-md flex flex-col space-y-4 items-start">
				<div className="flex flex-col w-full items-center justify-center space-y-1">
					<div className="h-[160px] w-[160px]">
						<AvatarImage alt={title} src={image} size={160} />
					</div>
					<div className="flex flex-row">
						{socialLinks?.map((link, index) => (
							<div className="p-[2px]" key={index}>
								<SocialLink url={link.url} size={28} provider={link.provider} />
							</div>
						))}
					</div>
				</div>
				<div className="flex flex-col space-y-1 w-full sm:w-auto">
          <Text 
            label={ label }
            title={ title }
            subtitle={ subtitle }
            description={ description }
          />          
				</div>
			</div>
		</div>
	)
}

export default Profile
