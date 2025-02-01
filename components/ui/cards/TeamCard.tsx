'use client'

import React from 'react'
import { cn } from '@nextui-org/react'
import { SocialIconButtons, Typography } from '../..'
import { Image } from '../..'
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
      <CardBody className='w-full p-0'>            
        <Image
          src={image}
          alt={name}
          disableBorderRadius
          className='aspect-square'
        />
      </CardBody>
      <CardFooter className='w-full flex flex-col space-y-2 items-between min-h-[180px]'>
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
        </div>
        { buttonText && (
          <Button 
            fullWidth    
            variant="solid"
            color="primary"  
            className="min-h-[40px]"       
            onPress={onClick}
          >
            { buttonText }  
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}


export default TeamCard
