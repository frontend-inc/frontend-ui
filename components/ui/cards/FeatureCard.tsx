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
  shadow?: 'none' | 'sm' | 'md' | 'lg' | 'xl'
  className?: string
}

const FeatureCard: React.FC<FeatureCardProps> = (props) => {
	const { icon, title, subtitle, shadow='sm', className } = props || {}
	return (
		<Card
      shadow={shadow}
      //@ts-ignore      
      className={cn(
        'w-full h-full',
        className
      )}
		>
      <CardBody
        className={cn(
          'flex justify-start w-full items-start h-full',
          'flex-col items-start space-y-3',
        )}      
      >
			{icon && (
        <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10">
          <RemixIcon name={icon} size="lg" className="text-primary" />
        </div>
      )}
			<div className={cn('flex flex-col space-y-2')}>
				<Typography variant="subtitle1" fontWeight="semibold">{title}</Typography>
				<Typography color='text-foreground/70' variant="body1">
					{subtitle}
				</Typography>
			</div>
      </CardBody>
		</Card>
	)
}

export default FeatureCard
