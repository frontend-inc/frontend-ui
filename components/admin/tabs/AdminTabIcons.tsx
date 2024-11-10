'use client'

import React, { useContext } from 'react'
import { AdminContext } from '../../../context'
import { IconButton } from '../../core'
import { Separator } from 'frontend-shadcn'
import AdminAuthButton from './AdminAuthButton'
import { LightDarkIconButton } from '../../../components'
import AdminTabIcon from './AdminTabIcon'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

type AdminTabIconsProps = {
	logo?: string
	menuItems: any[]
	handleClick: (item: any) => void
	secondaryAction?: React.ReactNode
}

export default function AdminTabIcons({
	logo,
	menuItems,
	handleClick,
	secondaryAction,
}: AdminTabIconsProps) {
	const { activeTab } = useContext(AdminContext)
	const router = useRouter()

	const handleHomeClick = () => {
		router.push('/dashboard')
	}

	const handleMyAccountClick = () => {
		router.push('/my-account')
	}

	return (
		<div className="w-full h-full flex flex-col items-center justify-between border-r border-border">
			<div className="w-full flex flex-col items-center justify-center space-y-3 pt-0">
				<div className="h-[50px] p-2 w-full flex flex-col items-center justify-center border-b border-border">
					{logo && (
						<IconButton
							className="w-[36px] h-[36px] rounded-md"
							onClick={handleHomeClick}
						>
							<Image src={logo} height={24} width={24} alt="logo" />
						</IconButton>
					)}
				</div>
				{Array.isArray(menuItems) &&
					menuItems?.map((item, index) => (
						<AdminTabIcon
							key={index}
							selected={activeTab == item.id}
							icon={item.icon}
							handleClick={() => handleClick(item)}
						/>
					))}
			</div>
			<div className="flex flex-col space-y-3 pb-4 mb-2">
        <LightDarkIconButton />
				{secondaryAction && (
					<>
						{secondaryAction}
						<Separator className="my-2" />
					</>
				)}
				<AdminAuthButton handleClick={handleMyAccountClick} />
			</div>
		</div>
	)
}
