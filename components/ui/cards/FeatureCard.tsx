'use client'

import React from 'react'
import { RemixIcon } from '../..'
import { Typography } from '../..'
import { cn, Card, CardBody } from '@nextui-org/react'

type FeatureCardProps = {
	icon?: string
	title?: string
	subtitle?: string
	variant?: 'flat'| 'fill' | 'outline'
}

const FeatureCard: React.FC<FeatureCardProps> = (props) => {
	const { variant='flat', icon, title, subtitle } = props || {}
	return (
		<Card
      //@ts-ignore
      isHoverable
      shadow={ variant == "flat" ? "none" : "md" }
      className='w-full h-full'
		>
      <CardBody
        className={cn(
          'flex justify-start py-6 w-full items-start h-full',
          'flex-row items-start space-x-3 min-h-[90px]',
        )}      
      >
			{icon && <RemixIcon name={icon} size="lg" className="text-primary" />}
			<div className={cn('flex flex-col space-y-2')}>
				<Typography variant="h6">{title}</Typography>
				<Typography className={cn('text-foreground/70')} variant="body1">
					{subtitle}
				</Typography>
			</div>
      </CardBody>
		</Card>
	)
}

export default FeatureCard
