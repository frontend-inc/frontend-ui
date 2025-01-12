import React from 'react'
import { SocialLink } from '../../../components'

type SocialLinksProps = {
  links: {
    provider: string
    url: string
  }[]
}

const SocialLinks: React.FC<SocialLinksProps> = (props) => {

  const { links=[] } = props || {}
  return (
    <div className="flex flex-row space-x-1">
      { links?.map((link) => (
        <SocialLink 
          url={ link.url }
          provider={ link.provider }
          key={ link.provider }
        />
      ))}
    </div>
  )
}

export default SocialLinks