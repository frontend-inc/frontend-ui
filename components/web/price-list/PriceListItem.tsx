import React from 'react'
import { Image, Typography } from '../..'
import { useButton } from '../../../hooks'
import { ActionType } from '../../../types'

export type PriceListItemProps = {  
  image: string
  title: string
  subtitle: string
  price?: string
  action: ActionType
  path?: string
  url?: string
  src?: string
}

const PriceListItem: React.FC<PriceListItemProps> = (props) => {
  
  const {
    image,
    price,
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
          { image && (
            <div className="h-12 w-12">
              <Image 
                src={ image }
                alt={ title }
                height={72}
              />
            </div>
          )}
          <div className="flex flex-col space-y-0">          
            <Typography variant="subtitle1" className="font-medium">{title}</Typography>
            <Typography variant="body2" className="text-muted-foreground">{subtitle}</Typography>
          </div>
        </div>
        <Typography variant="body2" className="text-muted-foreground">
          {price}
        </Typography>
      </button>
    </li>
  )
}

export default PriceListItem