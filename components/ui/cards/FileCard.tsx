'use client'

import React from 'react'
import { Avatar, AvatarFallback } from 'frontend-shadcn'
import { RemixIcon } from '../../../components'
import { CardProps } from './Card'
import { Typography } from '../../../components'

export type FileCardProps = CardProps & {
  icon: string	
}

const FileCard: React.FC<FileCardProps> = (props) => {
	
  const {
		title,
		subtitle,
		actions,
		secondaryAction,
		handleClick,
		icon='ri-file-2-fill',
	} = props || {}

	return (
    <div className='p-0 flex flex-row hover:bg-muted items-center border border-border rounded-lg'>
      <button
        onClick={handleClick}
        className="p-2 w-full flex flex-row items-center cursor-pointer transition-all duration-200"
      >
        <div className="w-[64px] pr-2 flex flex-row justify-center">
          {icon && (
            <Avatar className='rounded-lg'>
              <AvatarFallback className='rounded-lg bg-primary'>
                <RemixIcon name={ icon } className='text-primary-foreground' />
              </AvatarFallback>
            </Avatar>									
          )}
        </div>
        <div className="flex flex-col space-y-1 flex-grow-1 w-full">
          <Typography variant="subtitle1">{title}</Typography>
          <Typography variant="body2" className="text-muted-foreground">
            {subtitle}
          </Typography>
        </div>
      </button>
      <div className="flex flex-row flex-shrink-1 justify-end items-center w-full">
        {actions}
        {secondaryAction}  
      </div>
    </div>
	)
}

export default FileCard
