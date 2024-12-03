'use client'

import React, { useState } from 'react'
import { Empty } from '../..'
import { BlurFade, ImageModal } from '../..'
import PriceListItem from './PriceListItem'
import { ActionType } from '../../../types'

type PriceListType = {
	variant?: 'fill' | 'outline' | 'default'
	image: string
	title: string
	subtitle: string
	action: ActionType
	path?: string
	url?: string
	src?: string
}

export type PriceListProps = {
	variant?: 'fill' | 'outline' | 'default'
	items: PriceListType[]
}

const PriceList: React.FC<PriceListProps> = (props) => {
	const { variant, items } = props || {}

  const [open, setOpen] = useState(false)
  const [activeItem, setActiveItem] = useState<PriceListType | null>(null)

  const handleImageClick = (item) => {
    setActiveItem(item)
    setOpen(true)
  }

  return (
		<div className="w-full justify-center flex flow-row">
			<div className="container mx-auto max-w-screen-2xl">
				<ul className="list-none w-full flex flex-col space-y-2">
					{items?.map((item, idx) => (
						<BlurFade delay={0.25 + idx * 0.05} key={idx}>
							<PriceListItem 
                {...item} 
                variant={variant} 
                handleImageClick={() => handleImageClick(item) }
              />
						</BlurFade>
					))}
				</ul>
				{items?.length == 0 && (
					<Empty
						icon="ri-list-unordered-line"
						title="No items yet."
						description="Your items will appear here."
					/>
				)}
			</div>
      <ImageModal
        open={open}
        handleClose={() => setOpen(false)}
        //@ts-ignore
        src={activeItem?.image}
        title={activeItem?.title}
      />
		</div>
	)
}

export default PriceList
