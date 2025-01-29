'use client'

import React from 'react'
import { Image } from '../../../components'
import { CardProps } from './Card'
import { Typography } from '../../../components'
import { useNavigate } from '../../../hooks'
import { Button, Card, CardBody } from '@nextui-org/react'

const ListCard: React.FC<CardProps> = (props) => {
	const {
		label,
		title,
		subtitle,
		image,
    url,
    path,
    buttonText,
	} = props || {}

  const onClick = useNavigate({
    url,
    path,
  })

	return (
		<Card
      //@ts-ignore
      isPressable 
			onPress={ onClick }
      className="w-full overflow-hidden"
    >
      <CardBody>
        <div className="flex flex-row space-x-4 w-[240px]">
          <Image
            label={label}
            src={image}
            alt={title}
            className='aspect-square'
          />
        </div>
        <div className="flex flex-col justify-between min-h-[120px] flex-grow">
          <div className="flex flex-col space-y-1">
            <Typography variant="subtitle1">{title}</Typography>
            <Typography variant="body2" className="text-foreground/70">
              {subtitle}
            </Typography>
          </div>
          { buttonText && (
            <Button 
              fullWidth    
              variant="solid"
              color="primary"         
              onPress={onClick}
            >
              { buttonText }
            </Button>
          )}
        </div>
      </CardBody>
  </Card>			
	)
}

export default ListCard
