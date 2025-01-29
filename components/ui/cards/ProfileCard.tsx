'use client'

import React from 'react'
import { cn } from '@nextui-org/react'
import { SocialIconButtons, Typography } from '../..'
import { AvatarImage } from '../..'
import { Button, Card, CardBody } from '@nextui-org/react'
import { useNavigate } from '../../../hooks'
import { SocialLinkType } from '@/types'

export type ProfileCardProps = {
	avatar?: React.ReactNode
	image: string
	name: string
	description?: string | React.ReactNode
  url?: string
  path?: string
  buttonText?: string
	socialLinks?: SocialLinkType[]
}

const ProfileCard: React.FC<ProfileCardProps> = (props) => {

  const {
    name,
    description,
    socialLinks=[],
    image,
    buttonText='Message Me',			
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
      <CardBody className='w-full flex flex-col sm:flex-row gap-4 aspect-square'>    
       <div className='w-full max-w-[240px] flex flex-col items-center'>
          <div className='flex mx-auto w-full px-4'>
            <AvatarImage
              src={image}
              alt={name}
            />
          </div>
          <SocialIconButtons 
            links={ socialLinks }
          />
        </div>
        <div className="w-full h-full px-2 flex flex-col space-y-2">
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
            <div>
              <Button 
                variant="solid"
                color="primary"         
                onPress={onClick}
              >
                { buttonText }  
              </Button>
            </div>
          )}
        </div>
      </CardBody>
    </Card>
  )
}


export default ProfileCard
