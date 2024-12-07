'use client'

import React from 'react'
import { Stack, Container, Typography } from '../../../components'
import { Avatar, AvatarImage, AvatarFallback } from 'frontend-shadcn'

type SwipeableTestimonialCardProps = {
	author: string
	text: string
	avatar: string
	size?: 'small' | 'large'
	direction?: 'row' | 'column'
}

const SwipeableTestimonialCard: React.FC<SwipeableTestimonialCardProps> = (
	props
) => {
	const { direction, author, avatar, text } = props

	return (
		<Container maxWidth="lg">
			<Stack direction={direction}>
				<Stack>
					{text && (
						<Typography
							variant="body1"
							className="italic text-xl text-center font-medium leading-loose text-muted-foreground"
						>
							{text}
						</Typography>
					)}
				</Stack>
				<Stack>
					<div className="flex flex-col space-y-4 items-center justify-center w-full">
						<Avatar className="h-[96px] w-[96px] rounded-full">
							<AvatarImage src={avatar} alt={author} />
							<AvatarFallback></AvatarFallback>
						</Avatar>
						<Typography variant="body2" className="text-muted-foreground">
							{author}
						</Typography>
					</div>
				</Stack>
			</Stack>
		</Container>
	)
}

export default SwipeableTestimonialCard
