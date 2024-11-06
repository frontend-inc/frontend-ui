'use client'

import React, { useEffect, useState } from 'react'
import {
  Image,
	AttachmentImage,
} from '../../../components'
import { Button } from '../../../components'
import { Card, CardContent, CardHeader } from 'frontend-shadcn'
import { Badge } from 'frontend-shadcn'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from 'frontend-shadcn'
import { MoreHorizontal } from 'lucide-react'
import { cn } from 'frontend-shadcn'

type MediaItemProps = {
	item?: any
	selected?: boolean
	handleClick: (item: any) => void
	handleRemove?: () => void
}

const MediaItem: React.FC<MediaItemProps> = ({
	item,
	selected,
	handleClick,
	handleRemove,
}) => {

	return (
		<Card
			className={cn(
				'rounded-md bg-background p-0 min-w-[160px] h-[200px] border border-transparent',
				selected && 'border-primary'
			)}
		>
			<CardHeader className="py-1 px-1 flex flex-row justify-end items-center">
				{handleRemove && (
					<DropdownMenu>
						<DropdownMenuTrigger asChild>
							<Button variant="ghost" className="h-8 w-8 p-0">
								<MoreHorizontal className="h-4 w-4" />
							</Button>
						</DropdownMenuTrigger>
						<DropdownMenuContent align="end">
							<DropdownMenuItem onClick={handleRemove}>Remove</DropdownMenuItem>
						</DropdownMenuContent>
					</DropdownMenu>
				)}
			</CardHeader>
      <CardContent className="p-0 overflow-hidden">
			  {item.resource_type === 'file' ? (
					<AttachmentImage icon="File" width={64} height={64} />
			  ) : (
        <div className="h-[180px] w-[240px] overflow-hidden">
          <button 
            onClick={() => handleClick(item) }
            className="w-full focus:outline-none p-0 overflow-hidden"
          >
            <Image
              disableBorderRadius
              src={item?.thumbnail_url}
              alt={item?.content_type}
              height={240}
            />
          </button>
        </div>				
			)}
      </CardContent>
		</Card>
	)
}

export default MediaItem
