'use client'

import React from 'react'
import { RemixIcon } from '../../../components'
import { useRouter } from 'next/navigation'

type ButtonMenuProps = {
  path?: string
  url?: string
  icon?: string
  label: string
  onClick?: (ev: React.MouseEvent<HTMLButtonElement>) => void
}

const ButtonMenu: React.FC<ButtonMenuProps> = (props) => {
  const { onClick, url, path, label, icon } = props

  const router = useRouter()

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (onClick) {
      onClick(event)
    } else {
      if (url) {
        window.open(url, '_blank')
      } else if(path) {
        router.push(path)
      }
    }
  }

  return (
    <button
      onClick={handleClick}
      className="flex w-full items-center px-2 py-2 text-sm rounded-md hover:bg-accent hover:text-accent-foreground focus:outline-none"
    >
      {icon && (
        <span className="mr-2">
          <RemixIcon name={icon} />
        </span>
      )}
      {label}
    </button>
  )
}

export default ButtonMenu
