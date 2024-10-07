import React from 'react'
import { Box, Stack, Typography } from '../../../tailwind'
import { Image, ExpandableText } from '../..'
import { cn } from '../../../shadcn/lib/utils'

export type PDPProps = {
  label?: string
  image?: string
  price?: string
  compareAtPrice?: string
  description?: string
  primary?: string
  secondary?: React.ReactNode
  actions?: React.ReactNode
  addToCart?: React.ReactNode
  secondaryAction?: React.ReactNode
  children?: React.ReactNode
  slots?: {
    image?: any
    content?: any
  }
}

const PDP: React.FC<PDPProps> = (props) => {
  const {
    label,
    image,
    primary,
    secondary,
    addToCart,
    price,
    compareAtPrice,
    description,
    actions,
    secondaryAction,
    slots = {
      image: {},
      content: {},
    },
  } = props || {}

  return (
    <Stack spacing={4}>
      {secondaryAction}
      <Box className="w-full flex justify-center items-center">
        <Stack
          className={cn(
            'md:space-x-10'
          )}
          direction={'row'}
          spacing={5}
        >
          <Stack spacing={4} direction="column" className="w-full md:w-1/2 flex flex-col justify-center items-center">
            <Box 
              className={cn(
                "rounded-lg w-full",
              )}>
              <Image
                src={image}
                alt={primary}
                height={400}
                aspectRatio={1.0}
                label={label}
                {...slots.image}
              />
            </Box>
            {actions}
          </Stack>
          <Stack spacing={4} className={cn(
            "w-full md:w-1/2",
          )} {...slots.content}>
            <Typography color="text.primary" variant="h3">
              {primary}
            </Typography>
            <Stack direction="row" spacing={1}>
              <Typography color="text.primary" variant="h6">
                {price}
              </Typography>
              {compareAtPrice && (
                <Typography
                  color="text.secondary"
                  variant="subtitle2"
                  className="line-through"
                >
                  {compareAtPrice}
                </Typography>
              )}
            </Stack>
            {secondary}
            {addToCart}
            <ExpandableText text={description || ''} />
          </Stack>
        </Stack>
      </Box>
    </Stack>
  )
}

export default PDP