'use client'

import React from 'react'
import { AvatarImage, Label, ExpandableText, SocialLink } from '../..'
import { Typography } from '../../core'
import { cn } from 'frontend-shadcn'

export type ProfileProps = {
	image: string
	label?: string
	title: string
	subtitle?: string
  description?: string
	socialLinks?: {
		provider: string
		url: string
	}[]
}

const Profile: React.FC<ProfileProps> = (props) => {
	const { label, title, subtitle, image, description, socialLinks = [] } = props || {}

	return (
		<div className="w-full flex flex-col items-center justify-center rounded">
			<div className="w-full max-w-[600px] flex flex-col space-y-4 items-start  sm:flex-row sm:space-x-6 sm:space-y-0">
				<div className="flex flex-col items-center space-y-1">
					<div className="h-[200px] w-[200px]">
						<AvatarImage alt={title} src={image} size={200} />
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
					<Label label={label} />
					<Typography variant="h4">{title}</Typography>
          <Typography variant="subtitle2">{subtitle}</Typography>
					{description && <ExpandableText text={description} />}
				</div>
			</div>
		</div>
	)
}

export default Profile
