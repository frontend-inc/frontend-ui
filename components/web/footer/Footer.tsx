'use client'

import React from 'react'
import { Typography } from '../../../components'
import { SocialLink } from '../../../components'
import { SocialLinkType, MenuLinkType } from '../../../types'
import AppStoreButton from './AppStoreButton'
import GooglePlayButton from './GooglePlayButton'
import { NavLogo, EmailSubscribe } from '../../../components'

type FooterLinkProps = {
  link: MenuLinkType
  handleClick: () => void
}

const FooterLink: React.FC<FooterLinkProps> = (props) => {

  const { link, handleClick } = props || {}
  return (
    <button
      onClick={handleClick}                              
      className='w-full justify-start items-start flex flex-col hover:bg-content2 focus:focus-ring focus:ring-2 focus:ring-ring rounded-md p-2'
    >
      <Typography variant="body1" className='text-foreground'>
        {link.label}
      </Typography>
      <Typography variant="body2" className='text-foreground/70'>
        {link.description}
      </Typography>
    </button>
  )
}

export type FooterProps = {
  logo?: string
  iOSUrl?: string
  androidUrl?: string  
  enableNewsletter?: boolean
  links: MenuLinkType[]
  socialLinks?: SocialLinkType[]
  handleClick: (path: string) => void
}

export default function Footer(props: FooterProps) {

  const { 
    iOSUrl,
    androidUrl,
    enableNewsletter = false,
    logo, 
    links=[], 
    socialLinks=[], 
    handleClick 
  } = props || {}

  return (
    <footer className="w-full py-10 px-4">
      {(enableNewsletter || logo) && (
      <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4 justify-between items-center pb-6">
        <NavLogo 
          src={ logo } 
          handleClick={() => handleClick('/')}
        />          

        { enableNewsletter && (
          <div className="w-[260px]">
            <EmailSubscribe size='md' />
          </div>
        )}
      </div>
      )}
      <div className="w-full gap-6 py-6 grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))]">        
        {links.map((topLevelLink) => {
          const hasChildren = topLevelLink?.children?.length > 0 || topLevelLink.link_type == 'dropdown'
          return (                
            <div key={topLevelLink.id} className="min-w-[150px] flex-1">
              {hasChildren ? (
                <>
                  <Typography variant="caption" className="ml-2 text-foreground/70">
                    {topLevelLink.label}
                  </Typography>
                  <ul className="flex flex-col space-y-2 py-2">                        
                    {topLevelLink?.children.map((child) => (
                      <li key={child.id}>
                        <FooterLink 
                          link={child}
                          handleClick={() => handleClick(child?.url || child?.path)}
                        />
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <div className="w-full mt-6" key={topLevelLink?.id}>
                  <FooterLink 
                    link={topLevelLink}
                    handleClick={() => handleClick(topLevelLink?.url || topLevelLink?.path)}
                  />
                </div>
              )}
            </div>
          )
        })}
      </div>
      {(socialLinks?.length > 0 || iOSUrl || androidUrl) && (
        <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4 items-center justify-between border-t border-divider py-4">
          { socialLinks?.length > 0 && (
            <div className="flex flex-row space-x-1">
              { socialLinks?.map((socialLink, index) => (
                <div key={index}>
                  <SocialLink 
                    key={ index }
                    url={ socialLink.url }
                    provider={ socialLink.provider }
                  />
                </div>
              ))}
            </div>
          )}  

          <div className="flex flex-row space-x-2">        
            { iOSUrl && <AppStoreButton url={ iOSUrl } /> }
            { androidUrl && <GooglePlayButton url={ androidUrl } /> }
          </div> 
        </div>
      )}
    </footer>
  )
}
