'use client'

import React, { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@nextui-org/react'
import { MenuLinkType } from '../../../types'

export function organizeLinks(links: MenuLinkType[]): MenuLinkType[] {
	const linkMap = new Map<string, MenuLinkType>()
	const rootLinks: MenuLinkType[] = []

	// First pass: create NestedLink objects
	links.forEach((link) => {
		linkMap.set(link.id, { ...link, children: [] })
	})

	// Second pass: organize into a tree structure
	links.forEach((link) => {
		const nestedLink = linkMap.get(link.id)!
		if (link.parent_id === null) {
			rootLinks.push(nestedLink)
		} else {
			const parent = linkMap.get(link.parent_id)
			if (parent) {
				//@ts-ignore
				parent.children.push(nestedLink)
			}
		}
	})

	// Sort root links and their children recursively
	const sortLinks = (links: MenuLinkType[]) => {
		links.sort((a, b) => a.position - b.position)
		links.forEach((link) => sortLinks(link.children))
	}

	sortLinks(rootLinks)
	return rootLinks
}

interface RenderLinkProps {
	link: MenuLinkType
	handleClick: (path: string) => void
}

function RenderLink({ link, handleClick }: RenderLinkProps) {
	const hasChildren = link.children.length > 0
	// Local state to manage collapsible behavior
	const [isOpen, setIsOpen] = useState(false)

	const onClickHandler = (event: React.MouseEvent) => {
		if (hasChildren) {
			// Prevent navigation and toggle children display
			event.preventDefault()
			setIsOpen(!isOpen)
		} else {
			handleClick(link?.url || link?.path)
		}
	}

	return (
		<li key={link.id} className="list-none">
			<button
				onClick={onClickHandler}
				className="flex w-full items-center justify-between 
          rounded-md p-2 text-left text-md font-medium text-foreground
          transition-colors hover:bg-content2 focus:outline-none"
				aria-expanded={hasChildren ? isOpen : undefined}
			>
				<div className="flex flex-col text-left">
					<span>{link.label}</span>
					{link.description && (
						<span className="text-xs text-foreground/70">
							{link.description}
						</span>
					)}
				</div>
				{hasChildren && (
					<ChevronDown
						className={cn(
							'h-4 w-4 transition-transform',
							isOpen && 'rotate-180'
						)}
					/>
				)}
			</button>

			{hasChildren && isOpen && (
				<ul className="ml-4 mt-1 space-y-1 w-full pl-2">
					{link.children.map((child) => (
						<RenderLink key={child.id} link={child} handleClick={handleClick} />
					))}
				</ul>
			)}
		</li>
	)
}

// NestedSidebarMenu
interface NestedSidebarMenuProps {
	links: MenuLinkType[]
	handleClick: (path: string) => void
}

export default function NestedSidebarMenu({
	links,
	handleClick,
}: NestedSidebarMenuProps) {
	return (
		<nav className="w-full py-2">
			<ul className="flex flex-col space-y-2 w-full">
				{links.map((link) => (
					<RenderLink key={link.id} link={link} handleClick={handleClick} />
				))}
			</ul>
		</nav>
	)
}
