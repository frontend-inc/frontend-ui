'use client'

import React from 'react'
import { Button, Typography } from '../../../components'
import { MenuLinkType } from '../../../types'
import { SocialLink } from '../..'

export type FooterProps = {
	logo?: string
	links?: MenuLinkType[]
	socialLinks?: {
		label: string
		provider: string
		url: string
		position: number
	}[]
	handleClick: (path: string) => void
}

const Footer: React.FC<FooterProps> = (props) => {

  const {
		handleClick,
		links = [],
		socialLinks = [],
	} = props

	return (
		<div className="flex flex-col w-full bg-background min-h-[80px]">
      <div className="flex flex-col space-y-3 w-full items-center justify-center">
        <div className="flex flex-wrap flex-col space-y-2 sm:space-y-0 sm:flex-row sm:space-x-3 items-center justify-center">
          {links?.map((menuLink, i) => (
            <Button
              className="text-foreground"
              variant="link"
              key={i}
              onClick={() => handleClick(menuLink?.path)}
            >
              {menuLink?.label}
            </Button>
          ))}
        </div>
        <div className="flex flex-row space-x-3 w-full items-center justify-center">
          {socialLinks
            ?.sort((a, b) => a?.position - b?.position)
            ?.map((link, i) => (
              <SocialLink
                key={i}
                provider={link?.provider}
                url={link?.url}
                color="common.black"
              />
            ))}
        </div>
      </div>
		</div>
	)
}

export default Footer
