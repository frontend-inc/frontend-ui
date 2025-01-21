'use client'

import React from 'react'
import {
	Container,
	Stack,
	AvatarImage,
	Typography,
	SocialIconButtons,
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
		fontSize = 'md',
		isEditing,
		handleChange,
	} = props || {}

	return (
		<Container maxWidth="lg">
			<Stack direction={direction}>
				<Stack direction={direction} size="1/4">
					<Stack
						className={direction == 'row' ? 'items-start' : 'items-center'}
					>
						<div className="w-full flex flex-col space-y-2 items-center justify-center ">
							<div className="h-[160px] w-[160px]">
								<AvatarImage
									//@ts-ignore
									alt={title}
									src={image}
									size={160}
								/>
							</div>
							<div className="w-full flex flex-row items-center justify-center ">
								<SocialIconButtons links={socialLinks} />
							</div>
						</div>
					</Stack>
				</Stack>
				<Stack direction={direction} size="3/4">
					<Stack spacing={0}>
						<Heading
							label={label}
							title={title}
							subtitle={subtitle}
							size={fontSize}
							textAlign={direction == 'row' ? 'left' : 'center'}
							isEditing={isEditing}
							handleChange={handleChange}
						/>
						<Typography
							variant="subtitle2"
							className="w-full text-foreground/70 italic leading-loose"
							textAlign={direction == 'row' ? 'left' : 'center'}
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
