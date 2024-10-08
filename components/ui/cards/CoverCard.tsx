import React from 'react'
import { cn } from "../../../shadcn/lib/utils"
import { Image, TouchableOpacity, LightDarkMode } from '../..'
import { Typography } from '../../../tailwind'
import { CardProps } from './Card'

const CoverCard: React.FC<CardProps> = (props) => {
  const {
    label,
    primary,
    secondary,
    actions,
    secondaryAction,
    handleClick,
    image,
    height = 340,
    slots = {
      item: {},
      image: {},
    },
  } = props || {}

  return (
    <LightDarkMode mode="dark">
      <div 
        className={cn(
          "relative flex flex-col overflow-hidden w-full rounded",
          slots.item.className
        )}
      >
        <TouchableOpacity handleClick={handleClick}>
          <Image
            label={label}
            src={image}
            height={height}
            alt={primary}
            aspectRatio={3/4}
            className={cn("w-full", slots.image.className)}
          />
        </TouchableOpacity>
        <div className="absolute bottom-0 left-0 z-10 w-full p-1">
          <div className="flex flex-row items-center w-full space-x-1">
            <div className="flex flex-col justify-center items-start w-full px-0">
              <div className="flex flex-col justify-between items-end w-full">
                <div className="w-full">
                  <Typography variant="subtitle1">
                    {primary}
                  </Typography>
                  <Typography variant="body2">
                    {secondary}
                  </Typography>
                  <div className="flex flex-row justify-between">
                    {actions}
                    {secondaryAction}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LightDarkMode>
  )
}

export default CoverCard