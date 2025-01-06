'use client'

import React from 'react'
import { cn, Card, CardFooter } from '@nextui-org/react'
import { Typography } from '../..'
import { Image } from '../..'

export type CollectionCardProps = {
	ref?: React.Ref<HTMLDivElement>
	avatar?: React.ReactNode
	image: string
	label?: string
	primary: string
	secondary?: string | React.ReactNode
	actions?: React.ReactNode
	secondaryAction?: React.ReactNode
	compareAtPrice?: string
	handleClick?: () => void
	addToCart?: React.ReactNode
	disableBorder?: boolean
	slots?: {
		item?: any
		image?: any
	}
}

const CollectionCard = React.forwardRef<HTMLDivElement, CollectionCardProps>(
	(props, ref) => {
		const {
			label,
			primary,
			handleClick,
			image,
			slots = {
				item: {},
				image: {},
			},
		} = props

		return (
      <Card 
        ref={ ref }
        isFooterBlurred>
				<Image
					handleClick={handleClick}
					disableBorderRadius
					// @ts-ignore
					src={image}
					alt={primary}
					aspectRatio={1.0}
          {...slots.image}
				/>
				<CardFooter className="dark absolute bottom-0 left-0 w-full flex flex-col space-y-2 p-4 z-20">
          <Typography variant="caption" className="text-white text-ellipsis">
            { label }
          </Typography>
					<Typography variant="body1" className="text-white text-ellipsis">
						{primary}
					</Typography>
				</CardFooter>
			</Card>
		)
	}
)

CollectionCard.displayName = 'CollectionCard'

export default CollectionCard
