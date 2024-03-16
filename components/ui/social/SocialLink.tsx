import React from 'react'
import { IconButton } from '@mui/material'
import { Icon } from '../..'

type SocialLinkProps = {
  provider: 'facebook' | 
    'instagram' | 
    'linkedin' | 
    'twitter' | 
    'youtube' | 
    'tiktok' |
    'blog' 
  url: string
}

const SocialLink: React.FC<SocialLinkProps> = (props) => {
  const { provider, url } = props || {}  
  
  const handleClick = () => {  
    if(url.includes('http') || url.includes('www')){
      window.open(url, '_blank')
      return
    } 
    switch(provider) {
      case 'facebook':
        window.open(`https://www.facebook.com/${url}`, '_blank')
        break
      case 'instagram':
        window.open(`https://www.instagram.com/${url}`, '_blank')
        break
      case 'linkedin':
        window.open(`https://www.linkedin.com/in/${url}`, '_blank')
        break
      case 'twitter':
        window.open(`https://www.twitter.com/${url}`, '_blank')
        break
      case 'youtube':
        window.open(`https://www.youtube.com/${url}`, '_blank')
        break
      case 'tiktok':
        window.open(`https://www.tiktok.com/${url}`, '_blank')
        break
      default:
        break
    }
  }        

  if(!url) return null;
  return (
    <IconButton onClick={handleClick}>
      { provider === 'facebook' && (
        <Icon name="Facebook" size={20} />
      )}
      { provider === 'instagram' && (
        <Icon name="Instagram" size={20} />
      )}
      { provider === 'linkedin' && (
        <Icon name="Linkedin" size={20} />
      )}
      { provider === 'twitter' && (
        <Icon name="Twitter" size={20} />
      )}
      { provider === 'youtube' && (
        <Icon name="Youtube" size={20} />
      )}
    </IconButton>
  )
}

export default SocialLink
