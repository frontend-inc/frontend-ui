'use client'

import React from 'react'
import { Button, Typography } from '../..'
import { RemixIcon } from '../..'
import { cn } from 'frontend-shadcn'
import { useNavigate } from '../../../hooks'
import { formatCurrency } from '../../../helpers'

type SubscriptionPlanProps = {
	label?: string
	title: string
	subtitle?: string
	features?: string[]
	price: number
  compareAtPrice?: number
	buttonText?: string
	url?: string
	path?: string
	interval?: string
	popular?: boolean
  precision?: number  
  variant?: 'outline' | 'fill' | 'default'
  handleClick?: () => void
}

const SubscriptionPlan: React.FC<SubscriptionPlanProps> = (props) => {
	
  const {
		popular,
		title,
    subtitle,
		features,
		interval = 'month',
		buttonText = 'Subscribe',
		price,
    compareAtPrice,
		path,
		url,
    handleClick,
    precision = 0,
    variant='outline'
	} = props

	const onClick = useNavigate({
		path,
		url,
    handleClick
	})

	return (
		<div
			className={cn(
				'w-full p-2 bg-background rounded-xl transition duration-200 flex flex-col space-y-4 justify-between',				
        variant == 'outline' && 'border border-divider p-6',
        variant == 'fill' && 'bg-muted-background/50 p-6',
        popular && 'border-2 z-10 border-primary p-6',
			)}
		>
			<div className="flex flex-col space-y-8 min-h-[300px]">
        <div className="flex flex-col space-y-1">
          <Typography variant="subtitle2">{title}</Typography>
          <Typography variant="body2" className='text-foreground/70'>
            {subtitle}
          </Typography>
        </div>
        <div className="flex flex-col space-y-4 w-full">
          <div className="flex flex-row space-x-4 w-full items-end">
            <div className="flex flex-row items-center space-x-1">
              <Typography variant="h3" className='font-bold'>{ price == 0 ? 'FREE' : formatCurrency(price, precision)}</Typography>
              <Typography variant="body2" className='text-xs text-foreground/70'>per<br />{interval}</Typography>
            </div>
            { compareAtPrice && (
              <Typography variant="subtitle2" className='line-through text-foreground/70'>
                { compareAtPrice == 0 ? 'FREE' : formatCurrency(compareAtPrice, precision)}
              </Typography>
            )}
          </div>
          <Button 
            size='lg' 
            onClick={onClick}
          >
            {buttonText}
          </Button>
          <Typography variant="body2" className="text-foreground/70">
            This includes:
          </Typography>
          <ul className="flex flex-col space-y-3">
            {features?.map((feature, i) => (
              <li className="flex flex-row space-x-2" key={i}>
                <RemixIcon
                  name="ri-checkbox-circle-fill"
                  className="text-foreground bg-background"
                />
                <Typography variant="body2">{feature}</Typography>
              </li>
            ))}
          </ul>
        </div>
      </div>
		</div>
	)
}

export default SubscriptionPlan
