'use client'

import React from 'react'
import {
	Container,
	Stack,
	AvatarImage,
	Typography,
	SocialLink,
} from '../..'
import { Heading } from '../../../components'
import { HeadingProps } from '../../../types'

export type ProfileProps = HeadingProps & {
	direction?: 'row' | 'column'
	image: string
	description: string
	socialLinks?: {
		provider: string
		url: string
	}[]
}

const Profile: React.FC<ProfileProps> = (props) => {
	const {
		direction,
		label,
		title,
		subtitle,
		image,
		description,
		socialLinks = [],
    fontSize='xl',
    editable,
    handleChange 
	} = props || {}

	return (
		<Container maxWidth="lg">
			<Stack direction={direction}>
				<Stack direction={direction} size="1/4">
					<Stack className={ direction == 'row' ? "items-start" : "items-center"}>
						<div className="h-[160px] w-[160px]">
							<AvatarImage 
                //@ts-ignore
                alt={title} 
                src={image} 
                size={160} 
              />
						</div>
						<div className="flex flex-row">
							{socialLinks?.map((link, index) => (
								<div className="p-[2px]" key={index}>
									<SocialLink
										url={link.url}
										size={28}
										provider={link.provider}
									/>
								</div>
							))}
						</div>
					</Stack>
				</Stack>
				<Stack direction={direction} size="3/4">
					<Stack spacing={4}>
						<Heading
							label={label}
							title={title}
							subtitle={subtitle}
							size={fontSize}
							textAlign={direction == 'row' ? 'left' : 'center'}
              editable={editable}
              handleChange={handleChange}
						/>
						<Typography
							variant="subtitle2"
							className="text-muted-foreground italic leading-loose"
						>
							{description}
						</Typography>
					</Stack>
				</Stack>
			</Stack>
		</Container>
	)
}

export default Profile
