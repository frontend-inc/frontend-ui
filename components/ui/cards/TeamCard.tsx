'use client'

import React from 'react'
import { cn } from '@nextui-org/react'
import { SocialIconButtons, Typography } from '../..'
import { AvatarImage } from '../..'
import { Button, Card, CardBody, CardFooter } from '@nextui-org/react'
import { useNavigate } from '../../../hooks'
import { SocialLinkType } from '@/types'

export type TeamCardProps = {
	avatar?: React.ReactNode
	image: string
	name: string
	description?: string | React.ReactNode
  url?: string
  path?: string
  buttonText?: string
	socialLinks?: SocialLinkType[]
}

const TeamCard: React.FC<TeamCardProps> = (props) => {

  const {
    name,
    description,
    socialLinks=[],
    image,
    buttonText='Learn More',			
    url,
    path,
  } = props

  const onClick = useNavigate({
    path,
    url,      
  })

  return (
    <Card
      //@ts-ignore
      isPressable 
			onPress={ onClick }
      className="w-full overflow-hidden"
    >
      <CardBody className='w-full'>    
        <div className='w-full flex items-center justify-center'>
          <div className='flex mx-auto w-full max-w-[240px] px-4'>
            <AvatarImage
              src={image}
              alt={name}
            />
          </div>
        </div>
        <div className="w-full h-full flex flex-col space-y-2">
          <SocialIconButtons 
            links={ socialLinks }
          />
          <Typography variant="subtitle1">{name}</Typography>          
          {description && (
            <Typography
              className="text-sm text-foreground/70"
              variant="body2"
            >
              {description}
            </Typography>
          )}          
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


export default TeamCard
