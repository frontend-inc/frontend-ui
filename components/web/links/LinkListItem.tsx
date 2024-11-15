import React from 'react'
import { IconButton, RemixIcon, Typography } from '../../../components'
import { Avatar, AvatarFallback } from 'frontend-shadcn'
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
        className="w-full flex justify-between items-center rounded-xl p-4 focus:outline-none hover:bg-muted"
      >
        <div className=" flex flex-row space-x-6 items-center">
          <Avatar>
            <AvatarFallback 
              className="rounded-lg bg-primary-500"
              style={{
                backgroundColor: color,
              }}
            >
              <RemixIcon name={icon} className="text-white" />
            </AvatarFallback>
          </Avatar>
          <div className="flex flex-col space-y-0">          
            <Typography variant="subtitle2">{title}</Typography>
            <Typography variant="body2" className="text-muted-foreground">{subtitle}</Typography>
          </div>
        </div>
        <IconButton>
          <i className="ri-arrow-right-up-line text-xl rotate-[45] text-muted-foreground" />
        </IconButton>
      </button>
    </li>
  )
}

export default LinkListItem
