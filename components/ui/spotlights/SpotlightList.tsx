import React from 'react'
import { Box, Typography } from '../../../tailwind'
import { Container, BrandLogos, Label, Image } from '../..'

export type SpotlightListProps = {
  label?: string
  image?: string
  logos?: {
    image: string
    title: string
  }[]
  primary?: string | React.ReactNode
  secondary?: React.ReactNode
  actions?: React.ReactNode
  secondaryAction?: React.ReactNode
  styles?: any
  slots?: {
    image?: any
    content?: any
  }
}

const Spotlight: React.FC<SpotlightListProps> = (props) => {
  const {
    image,
    label,
    primary,
    secondary,
    actions,
    logos = [],
    styles = {},
    slots = {
      image: {},
    },
  } = props || {}

  return (
    <div className='h-auto w-full'>
      <Container maxWidth="md">
        <div className="flex flex-col space-y-3 px-2 w-full justify-start items-center">
          <div className="flex flex-col space-y-5 max-w-[800px] h-full w-full text-center">
            {label && (
              <div className='w-full flex justify-center'>
                <Label label={label} />
              </div>
            )}
            <Typography variant='h2' textAlign='center'>
              {primary}
            </Typography>

            {secondary && secondary}
            {actions && actions}
            {logos?.length > 0 && <BrandLogos logos={logos} />}
            <Image
              disableBorderRadius
              src={image}
              alt={primary}
              height={600}
              objectFit="cover"
              {...slots.image}
            />            
          </div>          
        </div>
      </Container>
    </div>
  )
}

export default Spotlight