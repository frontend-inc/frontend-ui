'use client'

import React, { useState } from 'react'
import { Placeholder } from '../..'
import { BlurFade } from '../..'

type InstagramPostType = {
	embed?: any
}

export type InstagramPostProps = {
	items: InstagramPostType[]
}

const InstagramPosts: React.FC<InstagramPostProps> = (props) => {
	const { items } = props || {}

	return (
		<div className="w-full justify-center flex flow-row p-2">
      <div className="container mx-auto max-w-screen-2xl">
        <div 
          className={           
            "w-full justify-center grid grid-cols-1 sm:grid-cols-3 gap-6"
          }>
          {items?.map((item, idx) => (
            <div 
              dangerouslySetInnerHTML={{ __html: item?.embed }}
            />
          ))}
        </div>
			{items?.length == 0 && (
				<Placeholder
					icon="Instagram"
					title="No instagram posts."
					description="Instagram posts will appear here."
				/>
			)}
		</div>
    </div>
	)
}

export default InstagramPosts
