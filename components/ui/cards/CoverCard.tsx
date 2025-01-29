'use client'

import React from 'react'
import { Card, CardFooter } from '@nextui-org/react'
import { Image } from '../..'
import { Typography } from '../../../components'
import { CardProps } from './Card'
import { useNavigate } from '../../../hooks'

type CoverCardProps = Omit<CardProps, "buttonText"> & {
  enableGradient?: boolean
  enableOverlay?: boolean
}

const CoverCard: React.FC<CoverCardProps> = (props) => {
	const {
    label,
		title,
		subtitle,
    path,
    url,
		image,
		enableGradient,
		enableOverlay,
	} = props || {}

  const onClick = useNavigate({ path, url })

	return (
		<Card 
      isFooterBlurred
      isPressable 
      onPress={ onClick }
    >
			<Image
				disableBorderRadius
				label={label}
				src={image}
				alt={title}
				aspectRatio={0.8}
				handleClick={onClick}
				enableGradient={enableGradient}
				enableOverlay={enableOverlay}
			/>
			<CardFooter className="dark absolute bottom-0 left-0 w-full p-4 z-20">
				<Typography variant="body1" className="text-white text-ellipsis">
					<Typography variant="subtitle1">{title}</Typography>
					<Typography variant="body2">{subtitle}</Typography>
				</Typography>
			</CardFooter>
		</Card>
	)
}

export default CoverCard
