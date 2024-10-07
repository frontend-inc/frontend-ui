import React from 'react'
import { Container, Stack, Typography } from '../../../tailwind'
import { Label, Image, BrandLogos } from '../..'
import { SpotlightListProps } from './SpotlightList'

const SpotlightCard: React.FC<SpotlightListProps> = (props) => {
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
    <div className={'pt-16 py-6 h-auto w-full'}>
      <Container maxWidth="xl">
        <Stack
          direction={'row'}
          spacing={6}
        >
          <Stack spacing={4} className="sm:min-h-[400px] md:items-start xs:items-center justify-center md:max-w-[600px] xs:max-w-full md:w-1/2 xs:w-full">
            {label && (
              <div>
                <Label label={label} />
              </div>
            )}
            <Typography 
              color="text.primary" 
              variant="h2" 
              className="md:text-left xs:text-center"
            >
              {primary}
            </Typography>
            {secondary && secondary}
            {actions && actions}
            {logos?.length > 0 && <BrandLogos logos={logos} />}
          </Stack>
          <div className="md:w-1/2 w-full">
            <Image
              src={image}
              alt={typeof primary === 'string' ? primary : 'Spotlight image'}
              height={400}
              objectFit="cover"
              {...slots.image}
            />
          </div>
        </Stack>
      </Container>
    </div>
  )
}

export default SpotlightCard