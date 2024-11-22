'use client'

import React from 'react'
import { Button } from '../../../../components'
import { Avatar, AvatarFallback } from 'frontend-shadcn'
import { Heading, Image } from '../../../../components'
import { HeadingProps } from '../../../../types'
import { RiCheckLine } from '@remixicon/react'

type FormCardProps = HeadingProps & {
	image?: string
	buttonText: string
	checkMark?: boolean
	handleClick: () => void
}

const FormCard: React.FC<FormCardProps> = (props) => {
	const {
		title,
		subtitle,
		image,
		checkMark,
		handleClick,
		buttonText = 'Continue',
	} = props

	return (
		<div className="flex flex-col items-center space-y-4">
			{checkMark && (
				<Avatar>
					<AvatarFallback className="bg-primary">
						<RiCheckLine size={28} className="text-primary-foreground" />
					</AvatarFallback>
				</Avatar>
			)}
			{image && (
				<Image
					src={image}
					height={320}
					alt={title || 'Form image'}
					className="w-full object-cover"
				/>
			)}
			<Heading title={title} subtitle={subtitle} textAlign="center" />
			<div>
				<Button onClick={handleClick} variant="default">
					{buttonText}
				</Button>
			</div>
		</div>
	)
}

export default FormCard
