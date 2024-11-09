'use client'

import React from 'react'
import { Tabs, TabsList, TabsTrigger, TabsContent } from 'frontend-shadcn'
import { Icon } from '../../../components'
import TabContent from './TabContent'

export type TabsProps = {
	items?: {
		icon?: string
		label: string
		title: string
		description: string
		image?: string
	}[]
}

const CustomTabs: React.FC<TabsProps> = ({ items = [] }) => {
	return (
		<Tabs defaultValue="0" className="w-full">
			<TabsList className="flex justify-center mb-4">
				{items.map((item, i) => (
					<TabsTrigger
						key={i}
						value={i.toString()}
						className="flex items-center justify-center"
					>
						{item.icon && (
							<Icon name={item.icon} className="w-5 h-5 mr-2 text-current" />
						)}
						{item.label}
					</TabsTrigger>
				))}
			</TabsList>
			{items.map((item, i) => (
				<TabsContent key={i} value={i.toString()}>
					<TabContent
						active={true}
						title={item.title}
						description={item.description}
						image={item.image}
					/>
				</TabsContent>
			))}
			{items.length === 0 && (
				<div className="flex flex-col items-center justify-center p-8 text-center">
					<Icon name="Search" className="w-12 h-12 text-gray-400 mb-4" />
					<h2 className="text-xl font-semibold mb-2">No content</h2>
					<p className="text-gray-600">Your content will appear here.</p>
				</div>
			)}
		</Tabs>
	)
}

export default CustomTabs
