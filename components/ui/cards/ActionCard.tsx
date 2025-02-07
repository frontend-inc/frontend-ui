'use client'

import React from 'react'
import { CardProps } from './Card'
import { Icon, Typography, RemixIcon } from '../..'
import { useNavigate } from '../../../hooks'
import { cn, Card, CardBody } from '@nextui-org/react'

type ActionCardProps = CardProps & {
  icon?: string
  buttonText?: string
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'default'
}

const ActionCard: React.FC<ActionCardProps> = (props) => {
	const {
		title,
		subtitle,
		icon,
    url,
    path,
    color='primary',
    className,
    shadow='sm'
	} = props || {}

  const onClick = useNavigate({
    url,
    path,
  })

	return (
		<Card
      //@ts-ignore
      isHoverable
      isPressable 
			onPress={ onClick }
      className={cn(
        "w-full overflow-hidden",
        className
      )}
      shadow={ shadow }
    >
      <CardBody className="flex flex-row space-x-4 w-full items-center">
        <div>
          { icon && (
            <Icon 
              size='lg'
              variant='solid'
              name={ icon }
              color={ color }
            />            
          )}          
        </div>
        <div className="flex flex-col space-y-1">
          <Typography variant="subtitle1">{title}</Typography>
          <Typography variant="body2" className="text-foreground/70">
            {subtitle}
          </Typography>
        </div>
      </CardBody>
  </Card>			
	)
}

export default ActionCard
