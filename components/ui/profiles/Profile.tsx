'use client'

import React from 'react'
import {
	Container,
	Stack,
	Row,
	AvatarImage,
	Typography,
	SocialLink,
} from '../..'
import { Heading } from '../../../components'

export type ProfileProps = {
	direction?: 'row' | 'column'
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
	const {
		direction,
		label,
		title,
		subtitle,
		image,
		description,
		socialLinks = [],
	} = props || {}

	const isRow = direction == 'row'

	return (
		<Container maxWidth="lg">
			<Stack direction={direction}>
				<Row size={isRow ? '1/4' : 'full'}>
					<Stack>
						<div className="h-[160px] w-[160px]">
							<AvatarImage alt={title} src={image} size={160} />
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
				</Row>
				<Row size={isRow ? '3/4' : 'full'}>
					<Stack spacing={4}>
						<Heading
							label={label}
							title={title}
							subtitle={subtitle}
							size="xl"
							textAlign={direction == 'row' ? 'left' : 'center'}
						/>
						<Typography
							variant="subtitle2"
							className="text-muted-foreground italic leading-loose"
						>
							{description}
						</Typography>
					</Stack>
				</Row>
			</Stack>
		</Container>
	)
}

export default Profile
