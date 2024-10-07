import React from 'react'
import { Stack, Typography } from '@mui/material'
import { TypographyVariantsType } from '../../../types'
import { cn } from '../../../shadcn/lib/utils'

type HeadingProps = {
  label?: string
  title?: string
  description?: string
  textAlign?: 'left' | 'center'
  textVariant?: TypographyVariantsType
  enableBorder?: boolean
  secondaryAction?: React.ReactNode
}

const Heading: React.FC<HeadingProps> = (props) => {
  const {
    label,
    title,
    description,
    textAlign = 'left',
    textVariant = 'h4',
    secondaryAction,
  } = props || {}

  if (!title && !description && !label) return null
  return (
    <div className="p-4 w-full flex justify-between items-center flex-col sm:flex-row">
      <Stack 
        className="w-full justify-between"        
      >
        <Stack
          direction={'column'}
          spacing={0}
          alignItems={textAlign}
        >
          {label && (
            <Typography variant="caption" color="text.secondary">
              {label}
            </Typography>
          )}
          {title && (
            <Typography
              variant={textVariant}              
              textAlign={textAlign}              
            >
              {title}
            </Typography>
          )}
          {description && (
            <Typography
              variant="body1"              
              textAlign={textAlign}              
            >
              {description}
            </Typography>
          )}
        </Stack>
        {secondaryAction}
      </Stack>
    </div>
  )
}

export default Heading