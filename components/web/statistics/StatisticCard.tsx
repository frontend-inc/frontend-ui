'use client'

import React from 'react'
import { RemixIcon } from '../..'
import { Typography } from '../..'
import { cn } from '@nextui-org/react'
import { Card } from '@nextui-org/react'

type StatisticProps = {
	icon?: string
	title?: string
	subtitle?: string	
  shadow?: 'sm' | 'md' | 'lg'
  className
}

const StatisticCard: React.FC<StatisticProps> = (props) => {
	const { shadow='sm', icon, title, subtitle, className } = props || {}
	return (
		<Card 
			className={cn(
        'shadow-md p-4 bg-content1 rounded-xl',
				'flex justify-start w-full items-start h-full',
				'flex-row space-x-3 items-center min-h-[90px]',
        className
			)}
      shadow={shadow}
		>
			{icon && (
				<div className="w-8 h-8 rounded-lg bg-content1 flex items-center justify-center">
					<RemixIcon name={icon} size="lg" className="text-primary" />
				</div>
			)}
			<div className='flex flex-col space-y-0'>
				<Typography className="text-foreground/70" variant="caption">
					{subtitle}
				</Typography>
				<Typography variant="h3">{title}</Typography>
			</div>
		</Card>
	)
}

export default StatisticCard
