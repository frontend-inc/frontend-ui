import React from 'react'
import Link from 'next/link'
import { Checkbox } from "../../../shadcn/ui/checkbox"
import { Icon, Image, AvatarImage } from '../..'
import { CardProps } from './Card'
import { Typography, Stack } from '../../../tailwind'
import { cn } from '../../../shadcn/lib/utils'

export type ListCardProps = CardProps & {
  circular?: boolean
  disableImage?: boolean
}

const ListCard: React.FC<ListCardProps> = (props) => {
  const {
    circular = false,
    sortable = false,
    selectable = false,
    selected = false,
    label,
    primary,
    secondary,
    actions,
    secondaryAction,
    handleClick,
    handleSelect,
    image,
    size = 140,
    disableImage,
    slots = {
      item: {},
      image: {},
    },
  } = props || {}

  return (
    <div className="p-4 border-b border-border last:border-b-0 hover:bg-gray-50 transition-colors duration-200">
      <Stack direction="row" alignItems="center" spacing={0} className="w-full">
        {selectable && (
          <div className='mr-2'>
            <Checkbox
              value={selected ? true : false}
              handleChange={ handleSelect }
            />
          </div>
        )}
        {sortable && <Icon name="GripVertical" className="text-muted-foreground" />}
        <Stack          
          spacing={1}
          direction={'row'}
          className="justify-start items-start"
        >
          {!disableImage && (
          <div className="flex-start w-[180px]">
            <div className="w-full pr-2 h-full flex justify-center sm:justify-start items-center">
              {circular ? (
                <AvatarImage
                  label={label}
                  src={image}
                  height={size}
                  alt={primary}
                  onClick={handleClick}
                  {...slots.image}
                />
              ) : (
                <Image
                  label={label}
                  src={image}
                  height={size}
                  alt={primary}
                  aspectRatio={1.0}
                  onClick={handleClick}
                  {...slots.image}
                />
              )}
            </div>
          </div>
          )}
          <div 
            className={
              'h-[140px] flex flex-col justify-between w-full'
            }>
            <Stack direction="column" spacing={1}>
              <Link
                href="#"
                onClick={handleClick}
                className="text-foreground no-underline"
              >
                <Typography variant="subtitle1">
                  {primary}
                </Typography>
              </Link>
              <Typography variant="body2" className="text-muted-foreground">
                {secondary}
              </Typography>
            </Stack>    
            <div className='flex flex-row justify-between items-center w-full'>
              {actions}
              {secondaryAction}            
            </div>      
          </div>
        </Stack>
      </Stack>
    </div>
  )
}

export default ListCard