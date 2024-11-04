import React from 'react'
import { Avatar, AvatarFallback } from 'frontend-shadcn'
import { Icon } from '../../components'
import { cn } from 'frontend-shadcn'

type SquareButtonProps = {
  label: string
  color: string
  icon: string
  selected: boolean
  handleClick?: () => void
}

const SquareButton: React.FC<SquareButtonProps> = (props) => {

  const { label, color, icon, selected, handleClick } = props || {}
  return(
    <button       
      className={cn(
        "w-full flex flex-row space-x-3 items-center rounded-lg hover:border-primary p-4 transition duration-200",
        selected ? "border-2 border-primary scale-105 shadow-lg" : "border-2 border-border",
      )}
      onClick={ handleClick ? handleClick : undefined }
      >
        <Avatar
          style={{
            width: 48,
            height: 48,                
          }}
        >
          <AvatarFallback
            className={ color }
          >
            <Icon name={ icon } className='text-white' />
          </AvatarFallback>
        </Avatar>
        <div className="text-sm text-left font-medium text-foreground">
          {label}
        </div>            
      </button>
  )
}

export default SquareButton