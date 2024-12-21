'use client'

import React from 'react'
import { 
  Link, 
  NestedLink, 
  HandleClickFunction, 
  organizeLinks 
} from '../../../components/web/header/NestedSidebarMenu'
import { Container, Typography } from '../../../components'
import { Button } from 'frontend-shadcn'

type FooterLinkProps = {
  link: NestedLink
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
  links: Link[]
  handleClick: HandleClickFunction
}

export default function Footer({ links, handleClick }: FooterProps) {

  return (
    <footer className="w-full bg-background py-10">
      <Container maxWidth="lg">
        <div className="w-full md:justify-end flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0 ">
          <div className="w-full gap-6 pb-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
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
                        {topLevelLink.children.map((child) => (
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
                    <div className="w-full mt-6">
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
        </div>
      </Container>
    </footer>
  )
}
