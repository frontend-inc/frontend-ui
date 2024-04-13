import React, { useContext } from 'react'
import { AppContext } from '../../../context'
import { 
  Breadcrumbs as MuiBreadcrumbs, 
  Link, 
  Typography 
} from '@mui/material'
import { Icon } from '../../../components'

export type Breadcrumb = {
  label: string
  path: string
}

export type BreadcrumbsProps = {
  links: Breadcrumb[]
  maxLinks?: number
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = (props) => {
  const { links=[], maxLinks=2 } = props

  const { clientUrl } = useContext(AppContext)

  if(links.length === 0) return null;
  return (
    <MuiBreadcrumbs 
      maxItems={maxLinks} 
      aria-label="breadcrumb"
      separator={
        <Icon color='text.secondary' name="ChevronRight" size={20} />
      }
    >
      {links.map((link, index) => (
        <Link 
          sx={ sx.link }
          key={index} 
          href={`${clientUrl}${link?.path}`}
        >
          {link?.label}
        </Link>
      ))}
    </MuiBreadcrumbs>
  )
}

export default Breadcrumbs

const sx = {
  link: {
    color: 'text.secondary',
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    }
  }
}