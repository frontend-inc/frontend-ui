'use client'

import React from 'react'
import { 
  Container, 
  Stack, 
  AvatarImage, 
  Typography,
  SocialLink 
} from '../..'
import { Heading } from '../../../components'

export type ProfileProps = {
  direction?: 'row' | 'column'
	image: string
	label?: string
	title: string
	subtitle: string
  description: string
	socialLinks?: {
		provider: string
		url: string
	}[]
}

const Profile: React.FC<ProfileProps> = (props) => {
	const { 
    direction,
    label, 
    title, 
    subtitle, 
    image, 
    description, 
    socialLinks = [] 
  } = props || {}

	return (
    <Container maxWidth='lg'>
      <Stack direction={direction} split="1/3">
        <div className="flex flex-col w-full items-center justify-center space-y-1">
					<div className="h-[160px] w-[160px]">
						<AvatarImage alt={title} src={image} size={160} />
					</div>
					<div className="flex flex-row">
						{socialLinks?.map((link, index) => (
							<div className="p-[2px]" key={index}>
								<SocialLink url={link.url} size={28} provider={link.provider} />
							</div>
						))}
					</div>
				</div>
        <Stack>
          <Heading 
            label={ label }
            title={ title }
            subtitle={ subtitle }
            size='xl'
            textAlign={direction == 'row' ? 'left' : 'center'}
          />     
          <Typography variant="subtitle2" className="text-muted-foreground italic leading-loose">
            { description }
          </Typography>
        </Stack>     
      </Stack>
    </Container>		
	)
}

export default Profile
