'use client'

import React from 'react'
import { Stack, Typography } from '../../../components'
import { SocialLink } from '../../../components'
import { SocialLinkType, MenuLinkType } from '../../../types'
import Image from 'next/image'
import AppStoreButton from './AppStoreButton'
import GooglePlayButton from './GooglePlayButton'
import { EmailSubscribe } from '../../../components'

type FooterLinkProps = {
  link: MenuLinkType
  handleClick: () => void
}

const FooterLink: React.FC<FooterLinkProps> = (props) => {

  const { link, handleClick } = props || {}
  return (
    <button
      onClick={handleClick}                              
      className='w-full justify-start items-start flex flex-col hover:bg-muted focus:focus-ring focus:ring-2 focus:ring-ring rounded-md p-2'
    >
      <Typography variant="body1" className='text-foreground'>
        {link.label}
      </Typography>
      <Typography variant="body2" className='text-muted-foreground'>
        {link.description}
      </Typography>
    </button>
  )
}

interface FooterProps {
  logo: string
  iOSUrl: string
  androidUrl: string  
  enableNewsletter?: boolean
  links: MenuLinkType[]
  socialLinks: SocialLinkType[]
  handleClick: (link: MenuLinkType) => void
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
    <footer className="w-full bg-background py-10 px-4">
        <Stack direction="row" className="gap-6">
          <Stack direction="row" size="1/3">
          <div className="min-w-[150px] flex-1 flex-col space-y-6">
              { logo && (
               <Image 
                  src={ logo } 
                  alt="logo" 
                  width={ 150 } 
                  height={ 150 } 
                  style={{ objectFit: 'contain' }} 
                /> 
              )}
              { enableNewsletter && (
                <EmailSubscribe size='default' />
              )}

              { socialLinks?.length > 0 && (
                <div className="flex flex-row space-x-1">
                  { socialLinks?.map((socialLink, index) => (
                    <SocialLink 
                      key={ index }
                      url={ socialLink.url }
                      provider={ socialLink.provider }
                    />
                  ))}
                </div>
              )}  

              <div className="flex flex-row space-x-2">        
                { iOSUrl && <AppStoreButton url={ iOSUrl } /> }
                { androidUrl && <GooglePlayButton url={ androidUrl } /> }
              </div> 
            </div>
          </Stack>
          <Stack direction="row" size="2/3" className='justify-end'>        
            <div className="w-full gap-6 pb-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">        
              {links.map((topLevelLink) => {
                const hasChildren = topLevelLink?.children?.length > 0 || topLevelLink.link_type == 'dropdown'
                return (                
                  <div key={topLevelLink.id} className="min-w-[150px] flex-1">
                    {hasChildren ? (
                      <>
                        <Typography variant="caption" className="ml-2 text- text-muted-foreground">
                          {topLevelLink.label}
                        </Typography>
                        <ul className="flex flex-col space-y-2 py-2">                        
                          {topLevelLink?.children.map((child) => (
                            <li key={child.id}>
                              <FooterLink 
                                link={child}
                                handleClick={() => handleClick(child)}
                              />
                            </li>
                          ))}
                        </ul>
                      </>
                    ) : (
                      <div className="w-full mt-6" key={topLevelLink?.id}>
                        <FooterLink 
                          link={topLevelLink}
                          handleClick={() => handleClick(topLevelLink)}
                        />
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </Stack>
        </Stack>
    </footer>
  )
}
