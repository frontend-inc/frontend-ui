'use client'

import React from 'react'
import { Button } from '../../../components'
import { MenuLinkType } from '../../../types'
import { SocialLink } from '../..'
import Logo from '../header/Logo'
import { useApp } from '../../../hooks'

export type FooterProps = {
	logo?: string
	links?: MenuLinkType[]
	legalLinks?: MenuLinkType[]
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
		logo,
		handleClick,
		links = [],
		socialLinks = [],
		legalLinks = [],
	} = props

	const { logo: appLogo } = useApp()

	const handleLogoClick = () => {
		handleClick('/')
	}

	return (
		<div className="flex flex-col space-y-2 py-2 w-full bg-background min-h-[80px]">
			<div className="flex flex-row space-x-10 w-full items-center justify-between border-b border-divider">
				<div className="flex flex-row space-x-4 p-6 w-full items-start">
					<div className="w-full sm:w-[160px] flex justify-start">
						<Logo
							handleClick={handleLogoClick}
							src={logo || appLogo}
							width={100}
							height={50}
						/>
					</div>
					<div className="w-full flex justify-start sm:justify-center sm:pl-3">
						<div className="flex flex-wrap flex-col sm:flex-row gap-4 sm:pl-3">
							{links?.map((menuLink, i) => (
								<Button
									className="text-foreground"
									variant="ghost"
									key={i}
									onClick={() => handleClick(menuLink?.path)}
								>
									{menuLink?.label}
								</Button>
							))}
						</div>
					</div>
					<div className="w-[100px]" />
				</div>
			</div>
			<div className="flex flex-col space-y-4 w-full py-1 px-3 items-center justify-between">
				<div className="flex flex-row space-x-3">
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
				<div className="flex flex-row space-x-3 w-full items-center">
					{legalLinks?.map((menuLink, i) => (
						<Button
							variant="link"
							key={i}
							className="text-muted-foreground"
							onClick={() => handleClick(menuLink?.path)}
						>
							{menuLink?.label}
						</Button>
					))}
				</div>
			</div>
		</div>
	)
}

export default Footer
