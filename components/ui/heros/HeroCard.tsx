import React from 'react'
import { cn } from '../../../shadcn/lib/utils'
import { Image } from '../..'

export type HeroCardProps = {
  label?: string
  image?: string
  primary?: string | React.ReactNode
  secondary?: React.ReactNode
  actions?: React.ReactNode
  secondaryAction?: React.ReactNode
  children?: React.ReactNode
  slots?: {
    image?: any
    content?: any
  }
}

const HeroCard: React.FC<HeroCardProps> = (props) => {
  const {
    label,
    image,
    primary,
    secondary,
    actions,
    secondaryAction,
    slots = {
      image: {},
      content: {},
    },
  } = props || {}

  return (
    <div className="flex flex-col space-y-2">
      {secondaryAction}
      <div className="w-full flex justify-center items-center">
        <div className="w-full flex flex-col md:flex-row gap-4 md:space-y-0 md:space-x-4 justify-start items-center md:items-start">
          <div className="w-full md:w-1/2 flex flex-col gap-2">
            <div className="w-full min-w-full sm:min-w-[420px] transition-all duration-500 ease-in-out rounded">
              <Image
                src={image}
                alt={typeof primary === 'string' ? primary : 'Hero image'}
                height={400}
                label={label}
                {...slots.image}
              />
            </div>
            {actions}
          </div>
          <div 
            className={cn(
              "w-full md:w-1/2 max-w-full md:max-w-[500px] flex flex-col space-y-2",
              slots.content.className
            )}
            {...slots.content}
          >
            <h4 className="text-primary text-2xl font-bold">
              {primary}
            </h4>
            {secondary}
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroCard