import React from 'react'
import { cn } from "../../../shadcn/lib/utils"
import { Typography } from '../../../tailwind'
import { Card as ShadcnCard, CardContent, CardFooter } from "../../../shadcn/ui/card"
import { Image } from '../..'

export type CardProps = {
  ref?: React.Ref<HTMLDivElement>
  sortable?: boolean
  selectable?: boolean
  selected?: boolean
  avatar?: React.ReactNode
  image: string
  label?: string
  primary: string
  secondary?: string | React.ReactNode
  actions?: React.ReactNode
  secondaryAction?: React.ReactNode
  handleClick?: () => void
  handleSelect?: () => void
  height?: number
  slots?: {
    item?: any
    image?: any
  }
}

// @ts-ignore 
const Card: React.FC<CardProps> = React.forwardRef<HTMLDivElement, CardProps>((props, ref) => {
  const {
    label,
    primary,
    secondary,
    actions,
    secondaryAction,
    handleClick,
    image,
    height = 240,
    slots = {
      item: {},
      image: {},
    },
  } = props

  return (
    <ShadcnCard 
      ref={ref}
      className={cn(
        "w-full min-w-[280px] overflow-hidden transition-shadow duration-300 ",
        `min-h-[${height + 80}px]`
      )}
      {...slots.item}
    >
      <div className={`h-[230px] min-h-[230px] w-full relative overflow-hidden`}>
        <Image
          src={image}
          height={height}
          alt={primary}
          label={label}
          handleClick={handleClick}
          disableBorderRadius          
          {...slots.image}
        />
      </div>
      <CardContent className="py-2 w-full flex flex-col justify-between h-full">
        <div className="h-full">
          <Typography variant="h6">{primary}</Typography>
          {secondary && (
            <Typography variant="body2">
              {secondary}
            </Typography>
          )}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between p-1">
        {actions}
        {secondaryAction}
      </CardFooter>
    </ShadcnCard>
  )
})

Card.displayName = "Card"

export default Card