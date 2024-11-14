import React from 'react'
import { Icon, Typography } from '../../../components'
import { Avatar, AvatarFallback } from 'frontend-shadcn'
import { cn } from 'frontend-shadcn'
import { useButton } from '../../../hooks'
import { ActionType } from '../../../types'

export type LinkListItemProps = {
  color: string
  icon: string
  title: string
  subtitle: string
  action: ActionType
  path?: string
  url?: string
  src?: string
}

const LinkListItem: React.FC<LinkListItemProps> = (props) => {
  
  const {
    color,
    icon,
    title,
    subtitle,
    action,
    path,
    url,
    src 
  } = props 

  const { handleClick } = useButton({
    action,
    path,
    url,
    src 
  })

  return(
    <li className={"w-full overflow-hidden"}>
      <button
        onClick={ handleClick }
        className="w-full rounded-lg p-4 flex flex-row space-x-6 items-center focus:outline-none bg-muted/50 hover:bg-muted"
      >
        <Avatar>
          <AvatarFallback 
            className="rounded-lg bg-primary-500"
            style={{
              backgroundColor: color,
            }}
          >
            <Icon name={icon} className="h-5 w-5 text-white" />
          </AvatarFallback>
        </Avatar>
        <div className="flex flex-col space-y-0">          
          <Typography variant="subtitle1" className="font-medium">{title}</Typography>
          <Typography variant="body2" className="text-muted-foreground">{subtitle}</Typography>
        </div>
      </button>
    </li>
  )
}

export default LinkListItem
