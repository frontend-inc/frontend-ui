'use client'

import React from 'react'
import { Button, Chip } from '@nextui-org/react'

type ShopifySearchTagsProps = {
	tags?: string[]
	handleClick: (tag: string) => void
	handleClearAll: () => void
}

const ShopifySearchTags: React.FC<ShopifySearchTagsProps> = (props) => {
	const { tags = [], handleClick, handleClearAll } = props

	if (!tags) return null

	return (
		<div className="mb-6 flex flex-row justify-start items-center gap-2 overflow-x-auto scrollbar-hide">
			{tags.map((tag, index) => (
				<Chip key={index} onClose={() => handleClick(tag)}>
					{tag}
				</Chip>
			))}
			<Button variant="ghost" onPress={handleClearAll}>
				Clear All
			</Button>
		</div>
	)
}

export default ShopifySearchTags
